// assets/js/menu.js

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('closeButton');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  }

  menuButton.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeButton) closeButton.addEventListener('click', closeMenu);
});
