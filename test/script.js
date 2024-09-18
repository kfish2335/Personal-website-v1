const titles = ["a Developer.", "a Designer.", "an Innovator.", "a Problem Solver."];
let count = 0;
let index = 0;
let currentTitle = '';
let letter = '';
let isDeleting = false;

(function type() {
  if (count === titles.length) {
    count = 0;
  }
  currentTitle = titles[count];

  if (isDeleting) {
    letter = currentTitle.slice(0, --index);
  } else {
    letter = currentTitle.slice(0, ++index);
  }

  document.getElementById('typing').textContent = letter;

  let typingSpeed = 200;
  if (isDeleting) {
    typingSpeed /= 2;
  }

  if (!isDeleting && letter.length === currentTitle.length) {
    typingSpeed = 2000; // Pause at the end
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
})();

// Theme Toggle Functionality with Button Text Change
const themeToggle = document.getElementById('theme-toggle');

function updateThemeButton() {
  const themeText = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  themeToggle.textContent = themeText;
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  updateThemeButton();

  // Save the user's preference in localStorage
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

themeToggle.addEventListener('click', toggleTheme);

// On page load, check for saved theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
  updateThemeButton();
});

// Sidebar Toggle Functionality
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});

// Close sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('.sidebar-menu a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// Close sidebar when overlay is clicked
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
});

// Toggle Card Content Visibility
const windowHeaders = document.querySelectorAll('.window-header');

windowHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const cardClass = header.getAttribute('data-card');
    const card = document.querySelector(`.${cardClass}`);
    const content = card.querySelector('.window-content');
    content.classList.toggle('collapsed');
  });
});

