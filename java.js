// 🌗 Light/Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
};

// 🔝 Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// ✨ AOS (Animate on Scroll) Initialization
AOS.init({
  duration: 1000,
  once: true
});

// 📤 Contact Form Submission Handling
const form = document.querySelector('#contact form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});
