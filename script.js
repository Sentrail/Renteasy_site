// CSS Variables Polyfill for Older Browsers (if needed)
if (!CSS.supports('--primary-blue')) { /* Fallbacks */ }

// Hardcoded Properties JSON (10 samples; expand for Firebase)
const properties = [
  { id: 1, type: 'Rental', title: 'Cozy 1-Bed Self-Contain', price: '₦100,000/annum', location: 'Alimosho, Lagos', beds: 1, baths: 1, size: '400sqft', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f275e43?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 2, type: 'Rental', title: 'Modern 2-Bed Apartment', price: '₦250,000/annum', location: 'Ikeja, Lagos', beds: 2, baths: 2, size: '800sqft', image: 'https://images.unsplash.com/photo-1564078512254-ef5cc0e1d3e4?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 3, type: 'Rental', title: 'Spacious Family House', price: '₦500,000/annum', location: 'Abuja Central', beds: 4, baths: 3, size: '1500sqft', image: 'https://images.unsplash.com/photo-1583608205777-1b7a5d2e1c4a?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 4, type: 'Rental', title: 'Warehouse Space', price: '₦300,000/annum', location: 'Oshodi, Lagos', beds: 0, baths: 1, size: '2000sqft', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 5, type: 'Rental', title: 'Shop Unit', price: '₦150,000/annum', location: 'Victoria Island, Lagos', beds: 0, baths: 1, size: '600sqft', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 6, type: 'Buy', title: 'Luxury 3-Bed Villa', price: '₦45,000,000', location: 'Lekki, Lagos', beds: 3, baths: 3, size: '1200sqft', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 7, type: 'Buy', title: 'Land Plot', price: '₦20,000,000', location: 'Gwarinpa, Abuja', beds: 0, baths: 0, size: '500sqm', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 8, type: 'Sell', title: 'Commercial Hall', price: 'Asking ₦15M', location: 'Surulere, Lagos', beds: 0, baths: 2, size: '1000sqft', image: 'https://images.unsplash.com/photo-1469362102473-8622cfb973cd?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 9, type: 'Sell', title: 'Duplex for Sale', price: '₦60,000,000', location: 'Asokoro, Abuja', beds: 5, baths: 4, size: '2500sqft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&fit=crop', agent: 'Renteasy Team' },
  { id: 10, type: 'Sell', title: 'Office Space', price: '₦8,000,000', location: 'Ibadan', beds: 0, baths: 2, size: '900sqft', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&fit=crop', agent: 'Renteasy Team' }
];

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  if (hamburger) hamburger.addEventListener('click', () => navUl.classList.toggle('open'));
});

// Hero Slider (Homepage)
let currentSlide = 0;
const slides = ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200', 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200'];
function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  slides.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = `slide ${i === 0 ? 'active' : ''}`;
    slide.innerHTML = `<img src="${src}" alt="Property slide ${i+1}" loading="lazy">`;
    slider.appendChild(slide);
  });
  setInterval(() => {
    document.querySelectorAll('.slide')[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    document.querySelectorAll('.slide')[currentSlide].classList.add('active');
  }, 5000);
}

// Property Filtering & Rendering (Rent/Buy Pages)
function renderProperties(props, containerSelector = '.property-grid') {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = props.map(p => `
    <article class="card" role="article" aria-label="${p.title}">
      <img src="${p.image}" alt="${p.title} in ${p.location}" loading="lazy">
      <h3>${p.title}</h3>
      <span class="price-badge">${p.price}</span>
      <ul aria-label="Specifications">
        <li>${p.beds} Beds | ${p.baths} Baths | ${p.size}</li>
        <li>${p.location}</li>
      </ul>
      <a href="r1.html?id=${p.id}" class="cta-btn">View Details</a>
    </article>
  `).join('');
}

function filterProperties(query = '', location = '', type = '') {
  let filtered = properties.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) &&
    p.location.toLowerCase().includes(location.toLowerCase()) &&
    (!type || p.type === type)
  );
  renderProperties(filtered);
}

// Search/Filter Listeners (Rent/Buy Pages)
function initSearch() {
  const searchInput = document.querySelector('#searchInput');
  const locationSelect = document.querySelector('#locationFilter');
  const typeSelect = document.querySelector('#typeFilter');
  if (!searchInput || !locationSelect || !typeSelect) return;
  [searchInput, locationSelect, typeSelect].forEach(el => {
    el.addEventListener('input', () => filterProperties(searchInput.value, locationSelect.value, typeSelect.value));
  });
  filterProperties(); // Initial render
}

// Form Validation
function validateForm(form) {
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  if (!email.includes('@')) { alert('Please enter a valid email.'); return false; }
  if (!/^\+?\d{10,15}$/.test(phone.replace(/\s/g, ''))) { alert('Please enter a valid phone (e.g., +2348190453867).'); return false; }
  // For production: Integrate Formspree or mailto:
  window.location.href = `mailto:senthor100@gmail.com?subject=Property Inquiry&body=${form.message.value}`;
  alert('Thank you! We\'ll respond within 24 hours.'); // Placeholder
  form.reset();
  return false; // Prevent default submit
}

// Modal for Valuation (Homepage CTA)
function openModal() {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:2000;">
      <div style="background:var(--white);padding:2rem;border-radius:8px;max-width:400px;">
        <h2>Free Valuation</h2>
        <form onsubmit="return validateForm(this)">
          <input type="text" placeholder="Name" required><br>
          <input type="email" placeholder="Email" required><br>
          <input type="tel" placeholder="Phone (+234...)" required><br>
          <select required><option>Rental</option><option>Buy</option><option>Sell</option></select><br>
          <textarea placeholder="Message" required></textarea><br>
          <button type="submit">Submit</button>
        </form>
        <button onclick="this.parentElement.parentElement.remove()">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

// Tabs Toggle (Buy Page)
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => tab.addEventListener('click', (e) => {
    tabs.forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    const type = e.target.dataset.type;
    filterProperties('', '', type); // Filter by type
  }));
}

// Property Detail Load (r1.html)
function loadDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const prop = properties.find(p => p.id === id);
  if (!prop) return;
  document.querySelector('#prop-title').textContent = prop.title;
  document.querySelector('#prop-price').textContent = prop.price;
  document.querySelector('#prop-image').src = prop.image;
  // Populate specs table, etc.
}

// Auto-Populate Contact Form from URL
function initContactForm() {
  const urlParams = new URLSearchParams(window.location.search);
  const from = urlParams.get('from');
  if (from) {
    const inquirySelect = document.querySelector('#inquiryType');
    if (inquirySelect) inquirySelect.value = from;
  }
}

// Init on Load
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initSearch();
  initTabs();
  if (document.querySelector('.property-grid')) initSearch();
  if (window.location.pathname.includes('r1.html')) loadDetail();
  if (window.location.pathname.includes('contact.html')) initContactForm();
  document.querySelectorAll('form').forEach(f => f.addEventListener('submit', (e) => { e.preventDefault(); validateForm(f); }));
});