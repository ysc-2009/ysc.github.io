/* =========================================================
   common.js  |  安原スポーツクラブ 全ページ共通スクリプト
   ========================================================= */

(function () {

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Close on close button
    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    }

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ─── SCROLL REVEAL ─── */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(r => io.observe(r));

  /* ─── STICKY HEADER + PAGE TOP ─── */
  const header  = document.getElementById('header');
  const pagetop = document.getElementById('pagetop');

  window.addEventListener('scroll', () => {
    if (header) {
      header.style.height = window.scrollY > 60 ? '60px' : '';
    }
    if (pagetop) {
      pagetop.style.display = window.scrollY > 350 ? 'flex' : 'none';
    }
  });

})();
