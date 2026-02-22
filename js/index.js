(function () {
  /* ─── HERO SLIDESHOW ─── */
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  let cur = 0;

  function goTo(i) {
    slides[cur].classList.remove("active");
    dots[cur].classList.remove("active");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("active");
    dots[cur].classList.add("active");
  }

  dots.forEach((d) => d.addEventListener("click", () => goTo(+d.dataset.i)));
  setInterval(() => goTo(cur + 1), 5000);

  /* ─── GOOGLE SHEETS NEWS ─── */

  const sheetId = "1E0cY44BsBwalv3RZkzzdxaHLrA5nb52FAiW_jdVyZE0";
  const apiKey = "ここにあなたのAPIキー";
  const range = "Sheet1!A2:C"; // シート名を確認

  const url = `https://sheets.googleapis.com/v4/spreadsheets/1E0cY44BsBwalv3RZkzzdxaHLrA5nb52FAiW_jdVyZE0/values/!A2:C?key=AIzaSyCcsDeP7hDGOFiDudnCQK8gmLVOCMKeZKs`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("news-list");

      if (!data.values) {
        container.innerHTML =
          "<div class='news-item'><span class='news-txt'>現在お知らせはありません。</span></div>";
        return;
      }

      // 最新順に表示（上が新しい）
      const rows = data.values.reverse();

      rows.forEach((row) => {
        const [date, category, text] = row;

        const item = document.createElement("div");
        item.className = "news-item";

        item.innerHTML = `
          <span class="news-date">${date}</span>
          <span class="news-badge ${category === "活動報告" ? "report" : ""}">${category}</span>
          <span class="news-txt">${text}</span>
        `;

        container.appendChild(item);
      });
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("news-list").innerHTML =
        "<div class='news-item'><span class='news-txt'>読み込みに失敗しました。</span></div>";
    });
})();
