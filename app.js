/* ============================================================
   QuickBite – Unified App JS
   ============================================================ */

/* ══════════════════════════
   DATA — RESTAURANTS
══════════════════════════ */
const RESTAURANTS = [
  { id:'spice-house', name:'Spice House', emoji:'🏮', bg:'#2a1a0a', cuisine:'North Indian', rating:4.8, time:'20–30', tags:['Indian','Veg-friendly'], open:true },
  { id:'burger-lab',  name:'Burger Lab',  emoji:'🧪', bg:'#0a1a0a', cuisine:'Burgers & Fries', rating:4.7, time:'15–25', tags:['Burgers','American'], open:true },
  { id:'pizza-grove', name:'Pizza Grove', emoji:'🌿', bg:'#0a140a', cuisine:'Italian', rating:4.9, time:'25–35', tags:['Pizza','Italian'], open:true },
  { id:'sushi-zen',   name:'Sushi Zen',   emoji:'⛩️', bg:'#0a0a1a', cuisine:'Japanese', rating:4.8, time:'30–45', tags:['Sushi','Japanese'], open:true },
  { id:'sweet-spot',  name:'Sweet Spot',  emoji:'🍭', bg:'#1a0a1a', cuisine:'Desserts & Drinks', rating:4.6, time:'20–30', tags:['Desserts','Drinks'], open:true },
  { id:'thai-garden', name:'Thai Garden', emoji:'🌸', bg:'#1a0a0a', cuisine:'Thai & Asian', rating:4.7, time:'25–35', tags:['Thai','Asian'], open:false },
  { id:'fusion-kitchen', name:'Fusion Kitchen', emoji:'🔥', bg:'#1a1a0a', cuisine:'Multi-cuisine', rating:4.5, time:'20–30', tags:['Fusion','International'], open:true },
];

const CATEGORIES = [
  { id:'all', label:'All', icon:'🍴' },
  { id:'burgers', label:'Burgers', icon:'🍔' },
  { id:'pizza', label:'Pizza', icon:'🍕' },
  { id:'sushi', label:'Sushi', icon:'🍣' },
  { id:'indian', label:'Indian', icon:'🍛' },
  { id:'thai', label:'Thai', icon:'🍜' },
  { id:'desserts', label:'Desserts', icon:'🍰' },
  { id:'drinks', label:'Drinks', icon:'🥤' },
];

const MENU = [
  // Spice House
  { id:1,  name:'Butter Chicken',         desc:'Tender chicken in a rich, creamy tomato gravy.', price:279, emoji:'🍛', category:'indian',   rating:4.9, reviews:643, restId:'spice-house' },
  { id:2,  name:'Paneer Tikka Masala',    desc:'Charred paneer cubes in a bold Punjabi masala.', price:259, emoji:'🫕', category:'indian',   rating:4.7, reviews:420, restId:'spice-house' },
  { id:3,  name:'Dal Makhani',            desc:'Slow-cooked black lentils with butter and cream.', price:199, emoji:'🍲', category:'indian',   rating:4.8, reviews:310, restId:'spice-house' },
  { id:4,  name:'Chicken Biryani',        desc:'Fragrant basmati rice layered with spiced chicken.', price:319, emoji:'🍚', category:'indian',   rating:4.9, reviews:780, restId:'spice-house' },
  { id:5,  name:'Garlic Naan (3 pcs)',    desc:'Soft leavened bread brushed with garlic butter.', price:79,  emoji:'🫓', category:'indian',   rating:4.6, reviews:520, restId:'spice-house' },
  // Burger Lab
  { id:6,  name:'Classic Smash Burger',   desc:'Double beef patty, cheddar, pickles & secret sauce.', price:249, emoji:'🍔', category:'burgers',  rating:4.8, reviews:312, restId:'burger-lab' },
  { id:7,  name:'BBQ Bacon Burger',       desc:'Smoky BBQ sauce, crispy bacon, caramelised onions.', price:299, emoji:'🥩', category:'burgers',  rating:4.7, reviews:204, restId:'burger-lab' },
  { id:8,  name:'Crispy Chicken Burger',  desc:'Fried chicken fillet, coleslaw, spicy mayo.', price:269, emoji:'🍗', category:'burgers',  rating:4.6, reviews:189, restId:'burger-lab' },
  { id:9,  name:'Veg Mushroom Burger',    desc:'Grilled portobello, swiss cheese, truffle aioli.', price:219, emoji:'🍄', category:'burgers',  rating:4.5, reviews:142, restId:'burger-lab' },
  { id:10, name:'Loaded Cheese Fries',    desc:'Crinkle fries smothered in nacho cheese sauce.', price:149, emoji:'🍟', category:'burgers',  rating:4.7, reviews:390, restId:'burger-lab' },
  // Pizza Grove
  { id:11, name:'Margherita Pizza',       desc:'San Marzano tomato, fresh mozzarella, basil.', price:349, emoji:'🍕', category:'pizza',    rating:4.9, reviews:521, restId:'pizza-grove' },
  { id:12, name:'Pepperoni Feast',        desc:'Loaded pepperoni, mozzarella, chilli flakes.', price:399, emoji:'🍕', category:'pizza',    rating:4.6, reviews:180, restId:'pizza-grove' },
  { id:13, name:'BBQ Chicken Pizza',      desc:'Grilled chicken, BBQ sauce, red onion, jalapeños.', price:429, emoji:'🍕', category:'pizza',    rating:4.7, reviews:240, restId:'pizza-grove' },
  { id:14, name:'Truffle Mushroom Pizza', desc:'Wild mushrooms, truffle oil, parmesan shavings.', price:459, emoji:'🍕', category:'pizza',    rating:4.8, reviews:168, restId:'pizza-grove' },
  { id:15, name:'Garlic Bread (4 pcs)',   desc:'Toasted ciabatta with herb butter and parmesan.', price:99,  emoji:'🥖', category:'pizza',    rating:4.5, reviews:310, restId:'pizza-grove' },
  // Sushi Zen
  { id:16, name:'Salmon Nigiri (8 pcs)',  desc:'Fresh Atlantic salmon on hand-pressed rice.', price:449, emoji:'🍣', category:'sushi',    rating:4.9, reviews:88,  restId:'sushi-zen' },
  { id:17, name:'Dragon Roll',            desc:'Prawn tempura, avocado, spicy mayo.', price:499, emoji:'🍱', category:'sushi',    rating:4.8, reviews:96,  restId:'sushi-zen' },
  { id:18, name:'Tuna Sashimi (6 pcs)',   desc:'Premium bluefin tuna, wasabi, pickled ginger.', price:549, emoji:'🐟', category:'sushi',    rating:4.9, reviews:74,  restId:'sushi-zen' },
  { id:19, name:'Veggie Rainbow Roll',    desc:'Cucumber, avocado, mango, sesame seeds.', price:349, emoji:'🥑', category:'sushi',    rating:4.6, reviews:60,  restId:'sushi-zen' },
  { id:20, name:'Miso Soup',             desc:'Traditional dashi broth with tofu and wakame.', price:99,  emoji:'🥣', category:'sushi',    rating:4.5, reviews:200, restId:'sushi-zen' },
  // Sweet Spot
  { id:21, name:'Gulab Jamun (4 pcs)',    desc:'Soft milk-solid dumplings soaked in rose syrup.', price:119, emoji:'🍮', category:'desserts', rating:4.8, reviews:290, restId:'sweet-spot' },
  { id:22, name:'Chocolate Lava Cake',   desc:'Warm dark-chocolate cake with a molten centre.', price:199, emoji:'🍰', category:'desserts', rating:4.9, reviews:350, restId:'sweet-spot' },
  { id:23, name:'Mango Kulfi',           desc:'Creamy traditional Indian ice cream, Alphonso mango.', price:129, emoji:'🧊', category:'desserts', rating:4.7, reviews:220, restId:'sweet-spot' },
  { id:24, name:'Tiramisu',              desc:'Classic Italian espresso dessert, mascarpone cream.', price:229, emoji:'☕', category:'desserts', rating:4.8, reviews:180, restId:'sweet-spot' },
  { id:25, name:'Mango Lassi',           desc:'Chilled yoghurt drink blended with Alphonso mango.', price:99,  emoji:'🥭', category:'drinks',   rating:4.7, reviews:510, restId:'sweet-spot' },
  { id:26, name:'Cold Brew Coffee',      desc:'Slow-steeped 18-hour cold brew over ice.', price:149, emoji:'☕', category:'drinks',   rating:4.6, reviews:195, restId:'sweet-spot' },
  { id:27, name:'Watermelon Slush',      desc:'Fresh watermelon blended with lime and mint.', price:119, emoji:'🍉', category:'drinks',   rating:4.5, reviews:140, restId:'sweet-spot' },
  // Thai Garden
  { id:28, name:'Pad Thai',             desc:'Stir-fried rice noodles, bean sprouts, peanuts.', price:289, emoji:'🍜', category:'thai',     rating:4.7, reviews:165, restId:'thai-garden' },
  { id:29, name:'Green Curry',          desc:'Coconut green curry with vegetables and basil.', price:299, emoji:'🍛', category:'thai',     rating:4.8, reviews:140, restId:'thai-garden' },
  { id:30, name:'Tom Yum Soup',         desc:'Spicy lemongrass soup with prawns and mushrooms.', price:249, emoji:'🍲', category:'thai',     rating:4.7, reviews:120, restId:'thai-garden' },
  { id:31, name:'Mango Sticky Rice',    desc:'Glutinous rice, fresh mango, sweet coconut cream.', price:179, emoji:'🥭', category:'desserts', rating:4.9, reviews:95,  restId:'thai-garden' },
  { id:32, name:'Thai Iced Tea',        desc:'Strong tea with condensed milk over crushed ice.', price:99,  emoji:'🧋', category:'drinks',   rating:4.6, reviews:180, restId:'thai-garden' },
  // Fusion Kitchen
  { id:33, name:'Shawarma Wrap',        desc:'Grilled chicken, garlic sauce, pickles, flatbread.', price:229, emoji:'🌯', category:'indian',   rating:4.6, reviews:210, restId:'fusion-kitchen' },
  { id:34, name:'Korean BBQ Bowl',      desc:'Gochujang beef, steamed rice, kimchi, sesame.', price:319, emoji:'🥘', category:'indian',   rating:4.7, reviews:180, restId:'fusion-kitchen' },
  { id:35, name:'Mediterranean Platter',desc:'Hummus, falafel, pita, tabbouleh, olives.', price:349, emoji:'🫙', category:'indian',   rating:4.8, reviews:145, restId:'fusion-kitchen' },
  { id:36, name:'Avocado Toast',        desc:'Sourdough, smashed avocado, poached egg, chilli.', price:199, emoji:'🥑', category:'burgers',  rating:4.5, reviews:130, restId:'fusion-kitchen' },
  { id:37, name:'Passion Fruit Mojito', desc:'Fresh lime, mint, passion fruit, sparkling water.', price:149, emoji:'🍹', category:'drinks',   rating:4.7, reviews:160, restId:'fusion-kitchen' },
];

/* ══════════════════════════
   STATE
══════════════════════════ */
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let toastTimer = null;
let currentUser = null;
let selectedPayMethod = null;
let selectedPayTiming = null;
let _checkoutAfterSignIn = false;
let _generatedOTP = '';
let selectedStaffRole = null;
let currentView = 'landing'; // landing | customer | manager | waiter
let currentOrderId = null;
let trackingInterval = null;
let ordersFilter = 'all';
let waiterFilter = 'all';

// Persistent state (simulated)
const ORDERS_DB = generateSampleOrders();
const COMPLAINTS_DB = generateSampleComplaints();
let customerComplaints = [];

/* ══════════════════════════
   SAMPLE DATA GENERATION
══════════════════════════ */
function generateSampleOrders() {
  const statuses = ['pending','preparing','out','delivered','delivered','delivered','cancelled'];
  const orders = [];
  const customers = ['Aarav Shah','Priya Nair','Rahul Mehta','Sneha Iyer','Vikram Singh','Anita Rao','Kabir Khan','Meera Patel'];
  let id = 1;
  for (let i = 0; i < 24; i++) {
    const rest = RESTAURANTS[Math.floor(Math.random()*RESTAURANTS.length)];
    const items = MENU.filter(m => m.restId === rest.id).slice(0, Math.floor(Math.random()*3)+1);
    const total = items.reduce((s,m) => s + m.price, 0);
    orders.push({
      id: 'QB' + String(id++).padStart(4,'0'),
      customer: customers[Math.floor(Math.random()*customers.length)],
      items,
      restaurant: rest.name,
      restId: rest.id,
      total,
      status: statuses[Math.floor(Math.random()*statuses.length)],
      time: new Date(Date.now() - Math.random()*86400000),
      isRepeat: Math.random() > 0.55,
    });
  }
  return orders;
}

function generateSampleComplaints() {
  const types = ['delivery','quality','payment','other'];
  const msgs = [
    'Order was 45 minutes late and food was cold.',
    'Wrong items delivered — I ordered paneer but got chicken.',
    'Payment deducted twice from my account.',
    'The packaging was torn and food spilled.',
    'Rider was rude and unprofessional.',
    'Missing items in my order — no drinks delivered.',
  ];
  return Array.from({length:6}, (_,i) => ({
    id: 'CMP' + String(i+1).padStart(3,'0'),
    type: types[i % types.length],
    orderId: 'QB' + String(i+1).padStart(4,'0'),
    text: msgs[i],
    customer: ['Priya Nair','Rahul Mehta','Sneha Iyer','Vikram Singh','Anita Rao','Kabir Khan'][i],
    time: new Date(Date.now() - (i*3600000 + Math.random()*3600000)),
    resolved: i > 3,
    response: i > 3 ? 'We are sorry for the inconvenience. A refund has been initiated.' : '',
  }));
}

/* ══════════════════════════
   LANDING
══════════════════════════ */
function enterAsCustomer() {
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('customer-app').style.display = 'block';
  currentView = 'customer';
  init();
}

function enterAsStaff() {
  document.getElementById('landing-screen').style.display = 'none';
  document.getElementById('staff-login-modal').classList.add('open');
}

function selectStaffRole(role) {
  selectedStaffRole = role;
  document.getElementById('role-manager').classList.toggle('active-role', role === 'manager');
  document.getElementById('role-waiter').classList.toggle('active-role', role === 'waiter');
}

function submitStaffLogin() {
  if (!selectedStaffRole) { showToast('⚠️ Select a role first'); return; }
  const pass = document.getElementById('staff-pass').value.trim();
  if (pass !== '1234') { showToast('❌ Wrong password. Demo: 1234'); return; }
  closeStaffLogin();
  if (selectedStaffRole === 'manager') {
    document.getElementById('manager-dashboard').style.display = 'block';
    currentView = 'manager';
    initManagerDash();
  } else {
    document.getElementById('waiter-dashboard').style.display = 'block';
    currentView = 'waiter';
    initWaiterDash();
  }
}

function closeStaffLogin() {
  document.getElementById('staff-login-modal').classList.remove('open');
}

function logoutStaff() {
  document.getElementById('manager-dashboard').style.display = 'none';
  document.getElementById('waiter-dashboard').style.display = 'none';
  document.getElementById('landing-screen').style.display = 'flex';
  selectedStaffRole = null;
  document.getElementById('staff-pass').value = '';
}

/* ══════════════════════════
   INIT CUSTOMER
══════════════════════════ */
function init() {
  renderRestaurants();
  renderCategories();
  renderMenu();
}

function scrollToTop() { window.scrollTo({top:0,behavior:'smooth'}); }

/* ══════════════════════════
   RESTAURANTS
══════════════════════════ */
function renderRestaurants() {
  const grid = document.getElementById('restaurants-grid');
  grid.innerHTML = RESTAURANTS.map((r,i) => `
    <div class="restaurant-card" style="animation-delay:${i*0.07}s" onclick="scrollToMenuAndFilter('${r.id}')">
      <div class="rest-banner" style="background:${r.bg}">
        <span style="font-size:4rem">${r.emoji}</span>
        <span class="rest-tag ${r.open ? 'open' : ''}">${r.open ? '🟢 Open' : '🔴 Closed'}</span>
      </div>
      <div class="rest-body">
        <div class="rest-name">${r.name}</div>
        <div class="rest-meta">
          <span>⭐ ${r.rating}</span>
          <span>🕐 ${r.time} min</span>
          <span>🚚 FREE</span>
        </div>
        <div style="color:var(--muted);font-size:.82rem;margin-bottom:10px">${r.cuisine}</div>
        <div class="rest-tags">${r.tags.map(t=>`<span class="rest-tag-chip">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

function scrollToMenuAndFilter(restId) {
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
}

/* ══════════════════════════
   CATEGORIES
══════════════════════════ */
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-chip ${cat.id === activeCategory ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <span>${cat.icon}</span>${cat.label}
    </div>
  `).join('');
}

function selectCategory(id) {
  activeCategory = id;
  renderCategories();
  renderMenu();
}

/* ══════════════════════════
   MENU
══════════════════════════ */
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const items = MENU.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (items.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);text-align:center;grid-column:1/-1;padding:40px 0">No items found. Try a different search! 🔍</p>`;
    return;
  }

  grid.innerHTML = items.map((item, i) => {
    const rest = RESTAURANTS.find(r => r.id === item.restId);
    return `
      <div class="food-card" style="animation-delay:${i*0.06}s">
        <div class="food-img">
          ${item.emoji}
          <span class="food-rest-badge">${rest ? rest.emoji + ' ' + rest.name : ''}</span>
        </div>
        <div class="food-body">
          <div class="food-name">${item.name}</div>
          <div class="food-rating"><span class="star">★</span> ${item.rating} <span style="margin-left:4px">(${item.reviews})</span></div>
          <div class="food-desc">${item.desc}</div>
          <div class="food-footer">
            <div class="food-price">₹${item.price}</div>
            <button class="add-btn" onclick="addToCart(${item.id})">+ Add</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function filterMenu() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  renderMenu();
}

/* ══════════════════════════
   CART
══════════════════════════ */
function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({...item, qty:1}); }
  updateCart();
  showToast(`${item.emoji} ${item.name} added!`);
}

function removeFromCart(id) {
  const existing = cart.find(c => c.id === id);
  if (!existing) return;
  if (existing.qty > 1) { existing.qty--; }
  else { cart = cart.filter(c => c.id !== id); }
  updateCart();
}

function updateCart() {
  const count = cart.reduce((s,c) => s+c.qty, 0);
  const subtotal = cart.reduce((s,c) => s+c.price*c.qty, 0);
  const badge = document.getElementById('cart-count');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('total').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('checkout-btn').disabled = cart.length === 0;
  const list = document.getElementById('cart-items-list');
  if (cart.length === 0) {
    list.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><p>Your cart is empty.<br>Add something tasty!</p></div>`;
    return;
  }
  list.innerHTML = cart.map(c => {
    const rest = RESTAURANTS.find(r => r.id === c.restId);
    return `
      <div class="cart-item">
        <div class="cart-item-emoji">${c.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-rest">${rest ? rest.name : ''}</div>
          <div class="cart-item-price">₹${(c.price*c.qty).toFixed(2)}</div>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="removeFromCart(${c.id})">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="addToCart(${c.id})">+</button>
        </div>
      </div>`;
  }).join('');
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
}

/* ══════════════════════════
   CHECKOUT
══════════════════════════ */
function handleCheckout() {
  toggleCart();
  if (!currentUser) {
    setTimeout(() => openSignIn(true), 350);
  } else {
    setTimeout(() => openPayment(), 350);
  }
}

/* ══════════════════════════
   SIGN IN
══════════════════════════ */
function openSignIn(fromCheckout = false) {
  _checkoutAfterSignIn = fromCheckout;
  showSignInStep1();
  document.getElementById('signin-modal').classList.add('open');
}

function closeSignIn() { document.getElementById('signin-modal').classList.remove('open'); }

function showSignInStep1() { setSignInStep('signin-step-1'); }
function showPhoneStep() { setSignInStep('signin-step-2'); setTimeout(() => document.getElementById('phone-input').focus(), 100); }

function setSignInStep(id) {
  ['signin-step-1','signin-step-2','signin-step-3','signin-step-4'].forEach(s => {
    const el = document.getElementById(s);
    if (el) el.style.display = s === id ? 'block' : 'none';
  });
}

function sendOTP() {
  const phone = document.getElementById('phone-input').value.trim();
  if (phone.length < 10) { showToast('⚠️ Enter a valid 10-digit number'); return; }
  _generatedOTP = '1234';
  document.getElementById('otp-sent-msg').textContent = `Sent to +91 ${phone}`;
  setSignInStep('signin-step-3');
  setTimeout(() => document.getElementById('otp0').focus(), 100);
}

function otpInput(index) {
  const el = document.getElementById(`otp${index}`);
  el.value = el.value.replace(/\D/g,'').slice(-1);
  if (el.value && index < 3) document.getElementById(`otp${index+1}`).focus();
  if (index === 3 && el.value) setTimeout(verifyOTP, 200);
}

function verifyOTP() {
  const entered = [0,1,2,3].map(i => document.getElementById(`otp${i}`).value).join('');
  if (entered.length < 4) { showToast('⚠️ Please enter all 4 digits'); return; }
  if (entered !== _generatedOTP) { showToast('❌ Wrong code. Try 1234 for demo'); return; }
  setSignInStep('signin-step-4');
}

function quickGuestLogin() {
  currentUser = {guest:true, name:'Guest'};
  updateNavUser();
  closeSignIn();
  showToast('🚀 Continuing as Guest!');
  if (_checkoutAfterSignIn) setTimeout(() => openPayment(), 400);
}

function saveAddress() {
  const name = document.getElementById('addr-name').value.trim();
  const street = document.getElementById('addr-street').value.trim();
  const city = document.getElementById('addr-city').value.trim();
  const pin = document.getElementById('addr-pin').value.trim();
  if (!name || !street || !city || !pin) { showToast('⚠️ Please fill in all fields'); return; }
  const phone = document.getElementById('phone-input').value.trim();
  currentUser = {name, phone, address:`${street}, ${city} - ${pin}`};
  updateNavUser();
  closeSignIn();
  showToast(`✅ Welcome, ${name}! 🎉`);
  if (_checkoutAfterSignIn) setTimeout(() => openPayment(), 400);
}

function updateNavUser() {
  const label = document.getElementById('nav-user-label');
  const btn = document.getElementById('nav-sign-btn');
  if (currentUser) {
    label.textContent = currentUser.guest ? 'Guest' : currentUser.name.split(' ')[0];
    btn.classList.add('signed-in');
  } else {
    label.textContent = 'Sign In';
    btn.classList.remove('signed-in');
  }
}

/* ══════════════════════════
   PAYMENT
══════════════════════════ */
function openPayment() {
  selectedPayMethod = null;
  selectedPayTiming = null;
  ['upi','card','wallet'].forEach(m => {
    const el = document.getElementById(`check-${m}`);
    if (el) { el.className = 'pay-check'; }
    const btn = document.getElementById(`popt-${m}`);
    if (btn) btn.classList.remove('selected');
  });
  document.getElementById('pay-next-btn').disabled = true;
  document.getElementById('ptime-next-btn').disabled = true;
  document.getElementById('ptime-now').classList.remove('selected');
  document.getElementById('ptime-delivery').classList.remove('selected');
  showPayTiming();
  document.getElementById('payment-modal').classList.add('open');
}

function closePayment() { document.getElementById('payment-modal').classList.remove('open'); }

function showPayTiming() {
  ['pay-step-timing','pay-step-1','pay-step-cod-confirm','pay-step-upi','pay-step-card','pay-step-wallet'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === 'pay-step-timing' ? 'block' : 'none';
  });
}

function selectPayTiming(t) {
  selectedPayTiming = t;
  document.getElementById('ptime-now').classList.toggle('selected', t === 'now');
  document.getElementById('ptime-delivery').classList.toggle('selected', t === 'delivery');
  document.getElementById('ptime-next-btn').disabled = false;
}

function showPayStep1() {
  if (selectedPayTiming === 'delivery') {
    // Go straight to COD confirm
    const total = document.getElementById('total').textContent;
    document.getElementById('cod-amount-text').textContent = total;
    ['pay-step-timing','pay-step-1','pay-step-upi','pay-step-card','pay-step-wallet'].forEach(id => {
      const el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    document.getElementById('pay-step-cod-confirm').style.display = 'block';
  } else {
    document.getElementById('pay-step-1-sub').textContent = 'Pick the easiest way';
    ['pay-step-timing','pay-step-cod-confirm','pay-step-upi','pay-step-card','pay-step-wallet'].forEach(id => {
      const el = document.getElementById(id); if (el) el.style.display = 'none';
    });
    document.getElementById('pay-step-1').style.display = 'block';
  }
}

function selectPayment(method) {
  selectedPayMethod = method;
  ['upi','card','wallet'].forEach(m => {
    const check = document.getElementById(`check-${m}`);
    const btn = document.getElementById(`popt-${m}`);
    if (check) check.className = m === method ? 'pay-check checked' : 'pay-check';
    if (btn) btn.classList.toggle('selected', m === method);
  });
  document.getElementById('pay-next-btn').disabled = false;
}

function showPaymentDetails() {
  if (!selectedPayMethod) return;
  const total = document.getElementById('total').textContent;
  ['pay-step-1','pay-step-upi','pay-step-card','pay-step-wallet'].forEach(id => {
    const el = document.getElementById(id); if (el) el.style.display = 'none';
  });
  if (selectedPayMethod === 'upi') {
    document.getElementById('upi-amount').textContent = total;
    document.getElementById('pay-step-upi').style.display = 'block';
  } else if (selectedPayMethod === 'card') {
    document.getElementById('card-amount').textContent = total;
    document.getElementById('pay-step-card').style.display = 'block';
  } else if (selectedPayMethod === 'wallet') {
    document.getElementById('wallet-amount').textContent = total;
    document.getElementById('pay-step-wallet').style.display = 'block';
  }
}

function processPayment() {
  if (selectedPayTiming === 'now') {
    if (selectedPayMethod === 'upi') {
      const upi = document.getElementById('upi-input').value.trim();
      if (!upi.includes('@')) { showToast('⚠️ Enter a valid UPI ID (e.g. name@upi)'); return; }
    } else if (selectedPayMethod === 'card') {
      const num = document.getElementById('card-num').value.replace(/\s/g,'');
      const exp = document.getElementById('card-exp').value.trim();
      const cvv = document.getElementById('card-cvv').value.trim();
      const nm = document.getElementById('card-name').value.trim();
      if (!nm || num.length < 16 || exp.length < 5 || cvv.length < 3) { showToast('⚠️ Please fill in all card details'); return; }
    } else if (selectedPayMethod === 'wallet') {
      const w = document.getElementById('wallet-input').value.trim();
      if (w.length < 10) { showToast('⚠️ Enter your 10-digit Paytm number'); return; }
    }
  }

  showToast('⏳ Placing order…');
  closePayment();
  setTimeout(() => {
    const total = document.getElementById('total').textContent;
    const methodLabel = selectedPayTiming === 'delivery' ? 'Cash on Delivery' :
      {upi:'UPI', card:'Card', wallet:'Paytm Wallet'}[selectedPayMethod];
    const name = currentUser && !currentUser.guest ? currentUser.name : 'there';
    const addr = currentUser && currentUser.address ? `<br><small>📍 Delivering to: ${currentUser.address}</small>` : '';
    currentOrderId = 'QB' + String(Math.floor(Math.random()*9000)+1000);

    // Add to orders DB
    ORDERS_DB.unshift({
      id: currentOrderId,
      customer: name,
      items: cart.map(c => ({...c})),
      restaurant: [...new Set(cart.map(c => RESTAURANTS.find(r=>r.id===c.restId)?.name || 'QuickBite'))].join(', '),
      total: cart.reduce((s,c) => s+c.price*c.qty, 0),
      status: 'pending',
      time: new Date(),
      isRepeat: Math.random() > 0.5,
    });

    document.getElementById('success-msg').innerHTML =
      `Hey ${name}, your order <strong>${currentOrderId}</strong> of <strong>${total}</strong> via <strong>${methodLabel}</strong> is confirmed! ${addr}`;
    document.getElementById('success-modal').classList.add('open');
    cart = [];
    updateCart();
  }, 1200);
}

function closeSuccess() { document.getElementById('success-modal').classList.remove('open'); }
function closeSuccessAndTrack() {
  closeSuccess();
  setTimeout(() => openTracking(), 300);
}

/* ══════════════════════════
   DELIVERY TRACKING
══════════════════════════ */
const TRACKING_STEPS_DEF = [
  {icon:'✅', label:'Order Placed', sub:'Your order has been received'},
  {icon:'👨‍🍳', label:'Preparing', sub:'Restaurant is cooking your food'},
  {icon:'🛵', label:'Out for Delivery', sub:'Rider is on the way'},
  {icon:'🏠', label:'Delivered', sub:'Enjoy your meal!'},
];

function openTracking() {
  if (!currentOrderId) { showToast('⚠️ No active order to track'); return; }
  document.getElementById('track-order-id').textContent = `Order #${currentOrderId}`;
  let step = 0;
  updateTrackingUI(step);
  document.getElementById('tracking-modal').classList.add('open');
  clearInterval(trackingInterval);
  trackingInterval = setInterval(() => {
    step = Math.min(step + 1, 3);
    updateTrackingUI(step);
    if (step === 3) clearInterval(trackingInterval);
  }, 6000);
}

function updateTrackingUI(activeStep) {
  const pcts = [10, 35, 70, 100];
  document.getElementById('track-progress-fill').style.width = pcts[activeStep] + '%';
  const etas = ['35 min', '28 min', '12 min', 'Delivered! 🎉'];
  document.getElementById('track-eta-text').textContent = etas[activeStep];
  const stepsHTML = TRACKING_STEPS_DEF.map((s,i) => {
    const isDone = i < activeStep;
    const isActive = i === activeStep;
    return `
      <div class="track-step">
        <div class="track-step-icon ${isDone ? 'done' : isActive ? 'active' : ''}">
          ${isDone ? '✓' : s.icon}
        </div>
        <div class="track-step-info">
          <div class="track-step-label" style="color:${isDone||isActive ? 'var(--text)' : 'var(--muted)'}">${s.label}</div>
          <div class="track-step-time" style="color:${isActive ? 'var(--accent)' : 'var(--muted)'}">${isActive ? '● In progress' : isDone ? '● Done' : s.sub}</div>
        </div>
      </div>`;
  }).join('');
  document.getElementById('tracking-steps').innerHTML = stepsHTML;
}

function closeTracking() {
  document.getElementById('tracking-modal').classList.remove('open');
  clearInterval(trackingInterval);
}

/* ══════════════════════════
   HELP
══════════════════════════ */
function openHelp() { renderMyComplaints(); document.getElementById('help-modal').classList.add('open'); }
function closeHelp() { document.getElementById('help-modal').classList.remove('open'); }

function switchHelpTab(tab, el) {
  document.querySelectorAll('.help-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.help-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('help-' + tab).classList.add('active');
}

function toggleFaq(el) {
  const answer = el.nextElementSibling;
  answer.classList.toggle('open');
  el.querySelector('span').textContent = answer.classList.contains('open') ? '▲' : '▼';
}

function submitComplaint() {
  const type = document.getElementById('complaint-type').value;
  const orderId = document.getElementById('complaint-order-id').value.trim();
  const text = document.getElementById('complaint-text').value.trim();
  if (!type || !text) { showToast('⚠️ Please fill in type and description'); return; }
  const complaint = {
    id: 'CMP' + String(COMPLAINTS_DB.length + customerComplaints.length + 1).padStart(3,'0'),
    type, orderId: orderId || 'N/A', text,
    customer: currentUser ? (currentUser.guest ? 'Guest' : currentUser.name) : 'Anonymous',
    time: new Date(), resolved: false, response: '',
  };
  customerComplaints.push(complaint);
  COMPLAINTS_DB.push(complaint);
  document.getElementById('complaint-type').value = '';
  document.getElementById('complaint-order-id').value = '';
  document.getElementById('complaint-text').value = '';
  showToast('📨 Complaint submitted! We\'ll resolve it within 24h.');
  renderMyComplaints();
}

function renderMyComplaints() {
  const list = document.getElementById('my-complaints-list');
  const all = [...customerComplaints];
  if (all.length === 0) {
    list.innerHTML = `<div style="text-align:center;color:var(--muted);padding:40px 0">No complaints lodged yet. 🎉</div>`;
    return;
  }
  list.innerHTML = all.reverse().map(c => `
    <div class="complaint-card" style="margin-bottom:14px">
      <div class="complaint-card-header">
        <div><div class="complaint-meta">${c.id} · ${timeAgo(c.time)}</div></div>
        <span class="complaint-type ctype-${c.type}">${c.type}</span>
      </div>
      <div class="complaint-text">${c.text}</div>
      <div>${c.resolved ? `<span class="resolved-badge">✅ Resolved</span>${c.response ? `<p style="color:var(--muted);font-size:.82rem;margin-top:8px">${c.response}</p>` : ''}` : '<span style="color:var(--muted);font-size:.82rem">⏳ Under review</span>'}</div>
    </div>
  `).join('');
}

/* ══════════════════════════
   MANAGER DASHBOARD
══════════════════════════ */
function initManagerDash() {
  const now = new Date();
  document.getElementById('dash-date-str').textContent = now.toLocaleDateString('en-IN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
  switchDashTab('overview');
  setTimeout(() => {
    const rate = 67;
    const circle = document.getElementById('repeat-ring-circle');
    if (circle) { circle.style.strokeDashoffset = String(314 * (1 - rate/100)); }
  }, 500);
}

function switchDashTab(tab) {
  document.querySelectorAll('.dash-tab').forEach((t,i) => t.classList.remove('active'));
  document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
  const tabs = ['overview','orders','revenue','menu-mgr','complaints-mgr'];
  const idx = tabs.indexOf(tab);
  document.querySelectorAll('.dash-tab')[idx].classList.add('active');
  document.getElementById(`panel-${tab}`).classList.add('active');

  if (tab === 'overview') renderOverview();
  if (tab === 'orders') renderOrdersTable(ordersFilter);
  if (tab === 'revenue') renderRevenue();
  if (tab === 'menu-mgr') renderMenuManager();
  if (tab === 'complaints-mgr') renderManagerComplaints();
}

function renderOverview() {
  const todayOrders = ORDERS_DB.filter(o => isToday(o.time));
  const todayRevenue = todayOrders.filter(o => o.status !== 'cancelled').reduce((s,o) => s+o.total, 0);
  const pending = ORDERS_DB.filter(o => o.status === 'pending').length;
  const delivered = ORDERS_DB.filter(o => o.status === 'delivered').length;
  const repeatRate = Math.round(ORDERS_DB.filter(o => o.isRepeat).length / ORDERS_DB.length * 100);

  document.getElementById('kpi-grid').innerHTML = `
    <div class="kpi-card gold"><div class="kpi-label">Today's Revenue</div><div class="kpi-value">₹${todayRevenue.toLocaleString('en-IN')}</div><div class="kpi-sub">From ${todayOrders.length} orders today</div></div>
    <div class="kpi-card green"><div class="kpi-label">Delivered Today</div><div class="kpi-value">${delivered}</div><div class="kpi-sub">Completed orders</div></div>
    <div class="kpi-card blue"><div class="kpi-label">Pending Orders</div><div class="kpi-value">${pending}</div><div class="kpi-sub">Awaiting action</div></div>
    <div class="kpi-card red"><div class="kpi-label">Repeat Rate</div><div class="kpi-value">${repeatRate}%</div><div class="kpi-sub">Returning customers</div></div>
  `;

  const totalCust = ORDERS_DB.length;
  const repeatCust = ORDERS_DB.filter(o => o.isRepeat).length;
  document.getElementById('cust-today').textContent = todayOrders.length;
  document.getElementById('cust-repeat').textContent = repeatCust;
  document.getElementById('cust-new').textContent = totalCust - repeatCust;
  document.getElementById('repeat-pct').textContent = repeatRate + '%';
  setTimeout(() => {
    const circle = document.getElementById('repeat-ring-circle');
    if (circle) circle.style.strokeDashoffset = String(314*(1-repeatRate/100));
  }, 300);

  renderBarChart('rev-bar-chart');

  const recent = ORDERS_DB.slice(0,5);
  document.getElementById('overview-orders').innerHTML = renderOrderRows(recent);
}

function renderBarChart(containerId) {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const vals = [8400, 6200, 9100, 7800, 12300, 15600, 11200];
  const max = Math.max(...vals);
  document.getElementById(containerId).innerHTML = vals.map((v,i) => `
    <div class="bar-wrap">
      <div class="bar-val">₹${(v/1000).toFixed(1)}k</div>
      <div class="bar" style="height:${Math.max((v/max)*100,5)}%"></div>
      <div class="bar-label">${days[i]}</div>
    </div>
  `).join('');
}

function renderRevenue() {
  const todayOrders = ORDERS_DB.filter(o => isToday(o.time));
  const todayRevenue = todayOrders.filter(o => o.status !== 'cancelled').reduce((s,o) => s+o.total, 0);
  const weekRevenue = 70600;
  const avgOrder = Math.round(ORDERS_DB.reduce((s,o) => s+o.total, 0) / ORDERS_DB.length);

  document.getElementById('rev-kpi-grid').innerHTML = `
    <div class="kpi-card gold"><div class="kpi-label">Today</div><div class="kpi-value">₹${todayRevenue.toLocaleString('en-IN')}</div><div class="kpi-sub">${todayOrders.length} orders</div></div>
    <div class="kpi-card green"><div class="kpi-label">This Week</div><div class="kpi-value">₹${(weekRevenue/1000).toFixed(1)}k</div><div class="kpi-sub">7-day total</div></div>
    <div class="kpi-card blue"><div class="kpi-label">Avg Order Value</div><div class="kpi-value">₹${avgOrder}</div><div class="kpi-sub">Per transaction</div></div>
    <div class="kpi-card red"><div class="kpi-label">Total Orders</div><div class="kpi-value">${ORDERS_DB.length}</div><div class="kpi-sub">All time</div></div>
  `;
  renderBarChart('rev-bar-chart-2');

  const byRest = {};
  ORDERS_DB.forEach(o => {
    if (!byRest[o.restaurant]) byRest[o.restaurant] = 0;
    byRest[o.restaurant] += o.total;
  });
  const sorted = Object.entries(byRest).sort((a,b) => b[1]-a[1]);
  const maxRev = sorted[0]?.[1] || 1;
  document.getElementById('rev-by-rest').innerHTML = sorted.slice(0,6).map(([name,rev]) => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:5px">
        <span>${name}</span><span style="color:var(--accent)">₹${rev.toLocaleString('en-IN')}</span>
      </div>
      <div class="track-progress"><div class="track-progress-fill" style="width:${rev/maxRev*100}%"></div></div>
    </div>
  `).join('');
}

function renderOrderRows(orders) {
  if (orders.length === 0) return `<div style="text-align:center;color:var(--muted);padding:30px">No orders found.</div>`;
  return orders.map(o => `
    <div class="order-row">
      <span class="order-id">${o.id}</span>
      <span>
        <span style="font-size:.88rem;color:var(--text)">${o.customer}</span>
        <span class="order-restaurant">${o.restaurant} · ${o.items.map(i=>i.name).slice(0,2).join(', ')}${o.items.length > 2 ? '…' : ''}</span>
      </span>
      <span style="font-size:.82rem;color:var(--muted)">${o.restaurant}</span>
      <span class="order-amount">₹${o.total.toLocaleString('en-IN')}</span>
      <span class="order-status status-${o.status}">${statusLabel(o.status)}</span>
      <span class="order-actions">
        ${o.status === 'pending' ? `<button class="act-btn success" onclick="updateOrderStatus('${o.id}','preparing')">Prepare</button><button class="act-btn danger" onclick="updateOrderStatus('${o.id}','cancelled')">Cancel</button>` : ''}
        ${o.status === 'preparing' ? `<button class="act-btn success" onclick="updateOrderStatus('${o.id}','out')">Dispatch</button>` : ''}
        ${o.status === 'out' ? `<button class="act-btn success" onclick="updateOrderStatus('${o.id}','delivered')">Delivered</button>` : ''}
        ${o.status === 'delivered' || o.status === 'cancelled' ? '<span style="color:var(--muted);font-size:.78rem">Done</span>' : ''}
      </span>
    </div>
  `).join('');
}

function renderOrdersTable(filter) {
  const orders = filter === 'all' ? ORDERS_DB : ORDERS_DB.filter(o => o.status === filter);
  document.getElementById('orders-table-body').innerHTML = renderOrderRows(orders);
}

function filterOrders(filter, el) {
  ordersFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderOrdersTable(filter);
}

function updateOrderStatus(id, newStatus) {
  const order = ORDERS_DB.find(o => o.id === id);
  if (order) { order.status = newStatus; }
  renderOrdersTable(ordersFilter);
  renderOverview();
  showToast(`✅ Order ${id} → ${statusLabel(newStatus)}`);
}

function renderMenuManager() {
  document.getElementById('menu-manager-grid').innerHTML = MENU.map(item => {
    const rest = RESTAURANTS.find(r => r.id === item.restId);
    return `
      <div class="mm-card" id="mmcard-${item.id}">
        <div class="mm-header">
          <span class="mm-emoji">${item.emoji}</span>
          <div><div class="mm-name">${item.name}</div><div class="mm-rest">${rest?.name || ''}</div></div>
        </div>
        <div class="mm-price">₹${item.price}</div>
        <div class="mm-actions">
          <button class="mm-btn edit" onclick="editMenuItem(${item.id})">✏️ Edit</button>
          <button class="mm-btn del" onclick="deleteMenuItem(${item.id})">🗑 Remove</button>
        </div>
      </div>`;
  }).join('');
}

function editMenuItem(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  const newPrice = prompt(`Edit price for "${item.name}" (current: ₹${item.price}):`);
  if (newPrice && !isNaN(newPrice)) {
    item.price = parseInt(newPrice);
    renderMenuManager();
    showToast(`✅ Price updated to ₹${item.price}`);
  }
}

function deleteMenuItem(id) {
  const idx = MENU.findIndex(m => m.id === id);
  if (idx !== -1) {
    const name = MENU[idx].name;
    MENU.splice(idx, 1);
    renderMenuManager();
    showToast(`🗑 "${name}" removed`);
  }
}

function showAddItemForm() {
  showToast('🛠 Add item form — coming soon!');
}

function renderManagerComplaints() {
  const all = COMPLAINTS_DB;
  const open = all.filter(c => !c.resolved).length;
  document.getElementById('open-complaints-count').textContent = `${open} open complaint${open !== 1 ? 's' : ''}`;
  document.getElementById('manager-complaints-list').innerHTML = all.map(c => `
    <div class="complaint-card" id="mcomp-${c.id}">
      <div class="complaint-card-header">
        <div>
          <div style="font-weight:600;font-size:.95rem;margin-bottom:2px">${c.customer}</div>
          <div class="complaint-meta">${c.id} · Order ${c.orderId} · ${timeAgo(c.time)}</div>
        </div>
        <span class="complaint-type ctype-${c.type}">${c.type}</span>
      </div>
      <div class="complaint-text">${c.text}</div>
      <div class="complaint-actions">
        ${c.resolved ?
          `<span class="resolved-badge">✅ Resolved</span>${c.response ? `<span style="color:var(--muted);font-size:.82rem;margin-left:8px">${c.response}</span>` : ''}` :
          `<button class="resolve-btn" onclick="resolveComplaint('${c.id}')">✅ Mark Resolved</button>
           <button class="act-btn" onclick="replyComplaint('${c.id}')">💬 Reply</button>`
        }
      </div>
    </div>
  `).join('');
}

function resolveComplaint(id) {
  const c = COMPLAINTS_DB.find(x => x.id === id);
  if (c) { c.resolved = true; c.response = 'Issue reviewed and resolved by our team.'; }
  const cc = customerComplaints.find(x => x.id === id);
  if (cc) { cc.resolved = true; cc.response = 'Issue reviewed and resolved by our team.'; }
  renderManagerComplaints();
  showToast(`✅ Complaint ${id} resolved`);
}

function replyComplaint(id) {
  const msg = prompt('Enter your response to the customer:');
  if (msg) {
    const c = COMPLAINTS_DB.find(x => x.id === id);
    if (c) { c.response = msg; c.resolved = true; }
    renderManagerComplaints();
    showToast('💬 Response sent');
  }
}

function exportRevenue() {
  const rows = [['Order ID','Customer','Restaurant','Amount','Status','Date']];
  ORDERS_DB.forEach(o => {
    rows.push([o.id, o.customer, o.restaurant, `₹${o.total}`, o.status, o.time.toLocaleDateString('en-IN')]);
  });
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'quickbite-revenue.csv'; a.click();
  showToast('⬇ CSV exported!');
}

/* ══════════════════════════
   WAITER DASHBOARD
══════════════════════════ */
function initWaiterDash() {
  renderWaiterOrders();
}

function renderWaiterOrders() {
  const orders = waiterFilter === 'all' ? ORDERS_DB : ORDERS_DB.filter(o => o.status === waiterFilter);
  const grid = document.getElementById('waiter-orders-grid');
  if (orders.length === 0) {
    grid.innerHTML = `<div style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px 0">No orders in this status.</div>`;
    return;
  }
  grid.innerHTML = orders.map(o => `
    <div class="waiter-order-card">
      <div class="waiter-order-header">
        <span class="waiter-order-id">#${o.id}</span>
        <span class="order-status status-${o.status}">${statusLabel(o.status)}</span>
      </div>
      <div style="color:var(--muted);font-size:.82rem;margin-bottom:6px">${o.customer} · ${timeAgo(o.time)}</div>
      <div class="waiter-order-items">${o.items.map(i => `${i.emoji} ${i.name}`).join('<br>')}</div>
      <div class="waiter-act-btns">
        ${o.status === 'pending' ? `<button class="waiter-act-btn prep" onclick="waiterUpdate('${o.id}','preparing')">Start Preparing</button>` : ''}
        ${o.status === 'preparing' ? `<button class="waiter-act-btn done" onclick="waiterUpdate('${o.id}','out')">Mark Out for Delivery</button>` : ''}
        ${o.status === 'out' ? `<button class="waiter-act-btn done" onclick="waiterUpdate('${o.id}','delivered')">Mark Delivered</button>` : ''}
        ${o.status === 'delivered' || o.status === 'cancelled' ? '<span style="color:var(--muted);font-size:.82rem">✓ Done</span>' : ''}
      </div>
    </div>
  `).join('');
}

function waiterUpdate(id, status) {
  const order = ORDERS_DB.find(o => o.id === id);
  if (order) order.status = status;
  renderWaiterOrders();
  showToast(`✅ Order #${id} → ${statusLabel(status)}`);
}

function filterWaiterOrders(filter, el) {
  waiterFilter = filter;
  document.querySelectorAll('#waiter-dashboard .filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  renderWaiterOrders();
}

/* ══════════════════════════
   HELPERS
══════════════════════════ */
function statusLabel(s) {
  return {pending:'⏳ Pending', preparing:'👨‍🍳 Preparing', out:'🛵 Out for Delivery', delivered:'✅ Delivered', cancelled:'❌ Cancelled'}[s] || s;
}

function isToday(date) {
  const d = new Date(date); const now = new Date();
  return d.getDate()===now.getDate() && d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();
}

function timeAgo(date) {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff/60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins/60);
  if (hrs < 24) return `${hrs}h ago`;
  return Math.floor(hrs/24) + 'd ago';
}

function formatCard(input) {
  let val = input.value.replace(/\D/g,'').slice(0,16);
  input.value = val.match(/.{1,4}/g)?.join('  ') || val;
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g,'').slice(0,4);
  if (val.length >= 3) { val = val.slice(0,2)+'/'+val.slice(2); }
  input.value = val;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ══════════════════════════
   KEYBOARD
══════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['cart-sidebar','cart-overlay'].forEach(id => document.getElementById(id)?.classList.remove('open'));
    ['signin-modal','payment-modal','success-modal','tracking-modal','help-modal','staff-login-modal'].forEach(id => document.getElementById(id)?.classList.remove('open'));
    clearInterval(trackingInterval);
  }
});
