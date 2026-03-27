/* ============================================================
   QuickBite – app.js
   ============================================================ */

/* ══════════════════════════════
   DATA
══════════════════════════════ */
const CATEGORIES = [
  { id: 'all',      label: 'All',      icon: '🍴' },
  { id: 'burgers',  label: 'Burgers',  icon: '🍔' },
  { id: 'pizza',    label: 'Pizza',    icon: '🍕' },
  { id: 'sushi',    label: 'Sushi',    icon: '🍣' },
  { id: 'indian',   label: 'Indian',   icon: '🍛' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
  { id: 'drinks',   label: 'Drinks',   icon: '🥤' },
];

const MENU = [
  { id:1,  name:'Classic Smash Burger',   desc:'Double beef patty, cheddar, pickles & secret sauce.', price:249, emoji:'🍔', category:'burgers',  rating:4.8, reviews:312 },
  { id:2,  name:'BBQ Bacon Burger',        desc:'Smoky BBQ sauce, crispy bacon, caramelised onions.',  price:299, emoji:'🥩', category:'burgers',  rating:4.7, reviews:204 },
  { id:3,  name:'Margherita Pizza',        desc:'San Marzano tomato, fresh mozzarella, basil.',        price:349, emoji:'🍕', category:'pizza',    rating:4.9, reviews:521 },
  { id:4,  name:'Pepperoni Feast',         desc:'Loaded pepperoni, mozzarella, chilli flakes.',        price:399, emoji:'🍕', category:'pizza',    rating:4.6, reviews:180 },
  { id:5,  name:'Salmon Nigiri (8 pcs)',   desc:'Fresh Atlantic salmon on hand-pressed rice.',         price:449, emoji:'🍣', category:'sushi',    rating:4.9, reviews:88  },
  { id:6,  name:'Dragon Roll',             desc:'Prawn tempura, avocado, spicy mayo.',                 price:499, emoji:'🍱', category:'sushi',    rating:4.8, reviews:96  },
  { id:7,  name:'Butter Chicken',          desc:'Tender chicken in a rich, creamy tomato gravy.',      price:279, emoji:'🍛', category:'indian',   rating:4.9, reviews:643 },
  { id:8,  name:'Paneer Tikka Masala',     desc:'Charred paneer cubes in a bold Punjabi masala.',      price:259, emoji:'🫕', category:'indian',   rating:4.7, reviews:420 },
  { id:9,  name:'Gulab Jamun (4 pcs)',     desc:'Soft milk-solid dumplings soaked in rose syrup.',     price:119, emoji:'🍮', category:'desserts', rating:4.8, reviews:290 },
  { id:10, name:'Chocolate Lava Cake',     desc:'Warm dark-chocolate cake with a molten centre.',      price:199, emoji:'🍰', category:'desserts', rating:4.9, reviews:350 },
  { id:11, name:'Mango Lassi',             desc:'Chilled yoghurt drink blended with Alphonso mango.',  price:99,  emoji:'🥭', category:'drinks',   rating:4.7, reviews:510 },
  { id:12, name:'Cold Brew Coffee',        desc:'Slow-steeped 18-hour cold brew over ice.',            price:149, emoji:'☕', category:'drinks',   rating:4.6, reviews:195 },
];

/* ══════════════════════════════
   STATE
══════════════════════════════ */
let cart           = [];
let activeCategory = 'all';
let searchQuery    = '';
let toastTimer     = null;

// User / auth state
let currentUser = null;   // { name, phone, address } or { guest: true }
let selectedPayMethod = null;

/* ══════════════════════════════
   INIT
══════════════════════════════ */
function init() {
  renderCategories();
  renderMenu();
}

/* ══════════════════════════════
   CATEGORIES
══════════════════════════════ */
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-chip ${cat.id === activeCategory ? 'active' : ''}"
         onclick="selectCategory('${cat.id}')">
      <span>${cat.icon}</span>${cat.label}
    </div>
  `).join('');
}

function selectCategory(id) {
  activeCategory = id;
  renderCategories();
  renderMenu();
}

/* ══════════════════════════════
   MENU
══════════════════════════════ */
function renderMenu() {
  const grid = document.getElementById('menu-grid');

  const items = MENU.filter(item => {
    const matchCat    = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) ||
                        item.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (items.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);text-align:center;grid-column:1/-1;padding:40px 0">
      No items found. Try a different search! 🔍</p>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => `
    <div class="food-card" style="animation-delay:${i * 0.06}s">
      <div class="food-img">${item.emoji}</div>
      <div class="food-body">
        <div class="food-name">${item.name}</div>
        <div class="food-rating">
          <span class="star">★</span> ${item.rating}
          <span style="margin-left:4px">(${item.reviews})</span>
        </div>
        <div class="food-desc">${item.desc}</div>
        <div class="food-footer">
          <div class="food-price">₹${item.price}</div>
          <button class="add-btn" onclick="addToCart(${item.id})">+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  renderMenu();
}

/* ══════════════════════════════
   CART — ADD / REMOVE
══════════════════════════════ */
function addToCart(id) {
  const item     = MENU.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else          { cart.push({ ...item, qty: 1 }); }
  updateCart();
  showToast(`${item.emoji} ${item.name} added!`);
}

function removeFromCart(id) {
  const existing = cart.find(c => c.id === id);
  if (!existing) return;
  if (existing.qty > 1) { existing.qty--; }
  else                  { cart = cart.filter(c => c.id !== id); }
  updateCart();
}

/* ══════════════════════════════
   CART — RENDER & TOTALS
══════════════════════════════ */
function updateCart() {
  const count    = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);

  // badge
  const badge = document.getElementById('cart-count');
  badge.textContent   = count;
  badge.style.display = count > 0 ? 'flex' : 'none';

  // totals
  document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent    = `₹${subtotal.toFixed(2)}`;
  document.getElementById('checkout-btn').disabled = cart.length === 0;

  // items list
  const list = document.getElementById('cart-items-list');
  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty">
      <div class="icon">🛒</div>
      <p>Your cart is empty.<br>Add something tasty!</p>
    </div>`;
    return;
  }

  list.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-emoji">${c.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-price">₹${(c.price * c.qty).toFixed(2)}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="removeFromCart(${c.id})">−</button>
        <span class="qty-num">${c.qty}</span>
        <button class="qty-btn" onclick="addToCart(${c.id})">+</button>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════
   CART SIDEBAR TOGGLE
══════════════════════════════ */
function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
}

/* ══════════════════════════════
   CHECKOUT ENTRY POINT
  — requires sign-in first
══════════════════════════════ */
function handleCheckout() {
  toggleCart();
  if (!currentUser) {
    // Not signed in — ask them to sign in first
    setTimeout(() => openSignIn(true), 350);
  } else {
    // Already signed in — go straight to payment
    setTimeout(() => openPayment(), 350);
  }
}

/* ══════════════════════════════
   ── SIGN IN ──
══════════════════════════════ */
let _checkoutAfterSignIn = false;

function openSignIn(fromCheckout = false) {
  _checkoutAfterSignIn = fromCheckout;
  showSignInStep1();
  document.getElementById('signin-modal').classList.add('open');
}

function closeSignIn() {
  document.getElementById('signin-modal').classList.remove('open');
}

function showSignInStep1() {
  setSignInStep('signin-step-1');
}

function showPhoneStep() {
  document.getElementById('phone-input').value = '';
  setSignInStep('signin-step-2');
}

function setSignInStep(activeId) {
  ['signin-step-1','signin-step-2','signin-step-3','signin-step-4'].forEach(id => {
    document.getElementById(id).style.display = id === activeId ? 'block' : 'none';
  });
}

// ── OTP flow ──
let _generatedOTP = '1234'; // fixed demo OTP

function sendOTP() {
  const phone = document.getElementById('phone-input').value.trim();
  if (phone.length < 10) {
    showToast('⚠️ Please enter a valid 10-digit number');
    return;
  }
  document.getElementById('otp-sent-msg').textContent = `Sent to +91 ${phone}`;
  // clear boxes
  [0,1,2,3].forEach(i => { document.getElementById(`otp${i}`).value = ''; });
  setSignInStep('signin-step-3');
  document.getElementById('otp0').focus();
  showToast('📨 Code sent! (Demo: 1234)');
}

function otpInput(index) {
  const el = document.getElementById(`otp${index}`);
  // keep only digits
  el.value = el.value.replace(/\D/g, '').slice(-1);
  // auto-advance
  if (el.value && index < 3) {
    document.getElementById(`otp${index + 1}`).focus();
  }
  // auto-verify when last box filled
  if (index === 3 && el.value) {
    setTimeout(verifyOTP, 200);
  }
}

function verifyOTP() {
  const entered = [0,1,2,3].map(i => document.getElementById(`otp${i}`).value).join('');
  if (entered.length < 4) {
    showToast('⚠️ Please enter all 4 digits');
    return;
  }
  if (entered !== _generatedOTP) {
    showToast('❌ Wrong code. Try 1234 for demo');
    return;
  }
  // OTP correct — ask for address
  setSignInStep('signin-step-4');
}

function quickGuestLogin() {
  currentUser = { guest: true, name: 'Guest' };
  updateNavUser();
  closeSignIn();
  showToast('🚀 Continuing as Guest!');
  if (_checkoutAfterSignIn) { setTimeout(() => openPayment(), 400); }
}

function saveAddress() {
  const name   = document.getElementById('addr-name').value.trim();
  const street = document.getElementById('addr-street').value.trim();
  const city   = document.getElementById('addr-city').value.trim();
  const pin    = document.getElementById('addr-pin').value.trim();

  if (!name || !street || !city || !pin) {
    showToast('⚠️ Please fill in all fields');
    return;
  }

  const phone = document.getElementById('phone-input').value.trim();
  currentUser = {
    name,
    phone,
    address: `${street}, ${city} - ${pin}`,
  };

  updateNavUser();
  closeSignIn();
  showToast(`✅ Welcome, ${name}! 🎉`);
  if (_checkoutAfterSignIn) { setTimeout(() => openPayment(), 400); }
}

function updateNavUser() {
  const label = document.getElementById('nav-user-label');
  const btn   = document.getElementById('nav-sign-btn');
  if (currentUser) {
    label.textContent = currentUser.guest ? 'Guest' : currentUser.name.split(' ')[0];
    btn.classList.add('signed-in');
  } else {
    label.textContent = 'Sign In';
    btn.classList.remove('signed-in');
  }
}

/* ══════════════════════════════
   ── PAYMENT ──
══════════════════════════════ */
function openPayment() {
  selectedPayMethod = null;
  // reset selection UI
  ['upi','card','cod','wallet'].forEach(m => {
    const el = document.getElementById(`check-${m}`);
    if (el) { el.className = 'pay-check'; }
    const btn = el ? el.closest('.pay-option-btn') : null;
    if (btn) btn.classList.remove('selected');
  });
  document.getElementById('pay-next-btn').disabled = true;
  showPayStep1();
  document.getElementById('payment-modal').classList.add('open');
}

function closePayment() {
  document.getElementById('payment-modal').classList.remove('open');
}

function showPayStep1() {
  const steps = ['pay-step-1','pay-step-upi','pay-step-card','pay-step-cod','pay-step-wallet'];
  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === 'pay-step-1' ? 'block' : 'none';
  });
}

function selectPayment(method) {
  selectedPayMethod = method;
  // update checks
  ['upi','card','cod','wallet'].forEach(m => {
    const check = document.getElementById(`check-${m}`);
    const btn   = check ? check.closest('.pay-option-btn') : null;
    if (check) { check.className = m === method ? 'pay-check checked' : 'pay-check'; }
    if (btn)   { btn.classList.toggle('selected', m === method); }
  });
  document.getElementById('pay-next-btn').disabled = false;
}

function showPaymentDetails() {
  if (!selectedPayMethod) return;
  const total = document.getElementById('total').textContent;

  showPayStep1(); // hide all first

  if (selectedPayMethod === 'upi') {
    document.getElementById('upi-amount').textContent = total;
    document.getElementById('pay-step-upi').style.display = 'block';
    document.getElementById('pay-step-1').style.display = 'none';
  } else if (selectedPayMethod === 'card') {
    document.getElementById('card-amount').textContent = total;
    document.getElementById('pay-step-card').style.display = 'block';
    document.getElementById('pay-step-1').style.display = 'none';
  } else if (selectedPayMethod === 'cod') {
    document.getElementById('cod-amount-text').textContent = total;
    document.getElementById('pay-step-cod').style.display = 'block';
    document.getElementById('pay-step-1').style.display = 'none';
  } else if (selectedPayMethod === 'wallet') {
    document.getElementById('wallet-amount').textContent = total;
    document.getElementById('pay-step-wallet').style.display = 'block';
    document.getElementById('pay-step-1').style.display = 'none';
  }
}

function processPayment() {
  // Basic validation per method
  if (selectedPayMethod === 'upi') {
    const upi = document.getElementById('upi-input').value.trim();
    if (!upi.includes('@')) { showToast('⚠️ Enter a valid UPI ID (e.g. name@upi)'); return; }
  } else if (selectedPayMethod === 'card') {
    const num = document.getElementById('card-num').value.replace(/\s/g,'');
    const exp = document.getElementById('card-exp').value.trim();
    const cvv = document.getElementById('card-cvv').value.trim();
    const nm  = document.getElementById('card-name').value.trim();
    if (!nm || num.length < 16 || exp.length < 5 || cvv.length < 3) {
      showToast('⚠️ Please fill in all card details'); return;
    }
  } else if (selectedPayMethod === 'wallet') {
    const w = document.getElementById('wallet-input').value.trim();
    if (w.length < 10) { showToast('⚠️ Enter your 10-digit Paytm number'); return; }
  }

  // All good — simulate payment processing
  showToast('⏳ Processing…');
  closePayment();

  setTimeout(() => {
    const total = document.getElementById('total').textContent;
    const method = { upi:'UPI', card:'Card', cod:'Cash on Delivery', wallet:'Paytm Wallet' }[selectedPayMethod];
    const name = currentUser && !currentUser.guest ? currentUser.name : 'there';
    const addr = currentUser && currentUser.address ? `<br><small>📍 Delivering to: ${currentUser.address}</small>` : '';

    document.getElementById('success-msg').innerHTML =
      `Hey ${name}, your order of <strong>${total}</strong> was placed via <strong>${method}</strong>. ${addr}`;

    document.getElementById('success-modal').classList.add('open');
    // Clear cart
    cart = [];
    updateCart();
  }, 1200);
}

/* ══════════════════════════════
   SUCCESS MODAL
══════════════════════════════ */
function closeSuccess() {
  document.getElementById('success-modal').classList.remove('open');
}

/* ══════════════════════════════
   CARD INPUT FORMATTERS
══════════════════════════════ */
function formatCard(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 16);
  input.value = val.match(/.{1,4}/g)?.join('  ') || val;
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').slice(0, 4);
  if (val.length >= 3) { val = val.slice(0,2) + '/' + val.slice(2); }
  input.value = val;
}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ══════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('signin-modal').classList.remove('open');
    document.getElementById('payment-modal').classList.remove('open');
    document.getElementById('success-modal').classList.remove('open');
  }
});

/* ══════════════════════════════
   START
══════════════════════════════ */
init();
