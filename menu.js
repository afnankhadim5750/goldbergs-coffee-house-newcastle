// Mobile nav toggle — toggles .open on the nav links
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
});
