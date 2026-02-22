/* =========================================================
   filter.js  |  カテゴリフィルター機能（活動内容・活動報告 共用）
   ========================================================= */

(function () {

  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  /* info.html: .act-card[data-cat]  /  report.html: .report-card[data-cat] */
  const cards = document.querySelectorAll('.act-card, .report-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      /* active state */
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || btn.dataset.cat || 'all';

      cards.forEach(card => {
        const cat = card.dataset.cat || card.dataset.filter || '';
        const show = (filter === 'all') || cat.includes(filter);

        /* support both class-based (info) and style-based (report) hiding */
        if (card.classList.contains('act-card')) {
          card.classList.toggle('hidden', !show);
        } else {
          card.style.display = show ? 'flex' : 'none';
        }
      });
    });
  });

})();
