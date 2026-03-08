/* =========================================================
   filter.js  | 活動内容・活動報告 共通フィルター
   ========================================================= */

(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cards = document.querySelectorAll(".act-card, .report-card");

      // active状態の切り替え
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = (
        btn.dataset.filter ||
        btn.dataset.cat ||
        "all"
      ).toLowerCase();

      cards.forEach((card) => {
        const cat = (
          card.dataset.cat ||
          card.dataset.filter ||
          ""
        ).toLowerCase();
        const show = filter === "all" || cat.includes(filter);

        if (card.classList.contains("act-card")) {
          card.classList.toggle("hidden", !show);
        } else if (card.classList.contains("report-card")) {
          // reports-grid内はflex表示に対応
          card.style.display = show ? "flex" : "none";
        }
      });
    });
  });
})();
