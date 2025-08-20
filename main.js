function toggleSidebar() {
  document.getElementById('sidebarMenu').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebarMenu').classList.remove('open');
}
function signInModal() {
  var m = new bootstrap.Modal(document.getElementById('loginModal'));
  m.show();
}
function registerNow() {
  alert('Thank you for registering! You will be notified about new courses and updates.');
  var m = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  if (m) m.hide();
}
function showSection(id) {
  document.querySelectorAll('section').forEach((s) => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  var footer = document.getElementById('footer-home');
  if (footer) footer.style.display = id === 'home' ? 'block' : 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeSidebar();
}
function shareWebsite(url) {
  const shareData = {
    title: 'Explore Astrology courses',
    text: 'Check out this website for astrology and more.',
    url: window.location.href,
  };
  if (navigator.share) {
    navigator.share(shareData).catch((err) => console.log('Share failed:', err));
  } else {
    navigator.clipboard.writeText(shareData.url).then(() => {
      alert('Website URL copied to clipboard for sharing!');
    });
  }
}
function submitQuery(e) {
  e.preventDefault();
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const message = document.getElementById('userMessage').value.trim();
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    e.target.reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
}
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  if (email) {
    localStorage.setItem('loggedInEmail', email);
    alert('Login successful: Welcome ' + email);
    var m = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    if (m) m.hide();
  } else {
    alert('Please enter a valid email to log in.');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  showSection('home');
  closeSidebar();
  const storedEmail = localStorage.getItem('loggedInEmail');
  if (storedEmail) {
    console.log('User logged in as:', storedEmail);
  }
});
document.addEventListener('click', function (e) {
  if (document.getElementById('sidebarMenu').classList.contains('open')) {
    const sidebar = document.getElementById('sidebarMenu');
    const toggle = document.querySelector('.sidebar-toggle');
    if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
      closeSidebar();
    }
  }
});
