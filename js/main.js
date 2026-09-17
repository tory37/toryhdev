document.addEventListener('DOMContentLoaded', function () {
  var mobileNav = document.querySelector('.mobile-nav');
  var overlay = document.querySelector('.nav-overlay');
  var openBtn = document.querySelector('.nav-open');
  var closeBtn = document.querySelector('.nav-close');

  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('open');
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (openBtn) openBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);
});
