const SHEET_URL =
  "https://opensheet.elk.sh/1E0cY44BsBwalv3RZkzzdxaHLrA5nb52FAiW_jdVyZE0/活動報告";

async function loadReports() {
  const grid = document.getElementById("reportsGrid");
  if (!grid) return;

  try {
    const res = await fetch(SHEET_URL);
    const data = await res.json();

    grid.innerHTML = "";

    data.forEach((row) => {
      const card = document.createElement("div");
      card.className = "report-card reveal";
      card.dataset.cat = row.category.toLowerCase();

      let tagClass = "";
      switch (row.category.toLowerCase()) {
        case "soccer":   tagClass = "tag-soccer";   break;
        case "dance":    tagClass = "tag-dance";    break;
        case "yoga":     tagClass = "tag-yoga";     break;
        case "tennis":   tagClass = "tag-tennis";   break;
        case "athletic": tagClass = "tag-athletic"; break;
        case "onigokko": tagClass = "tag-onigokko"; break;
        case "event":    tagClass = "tag-event";    break;
      }

      card.innerHTML = `
        <div class="report-img">
          <img src="${row.image}" alt="">
        </div>
        <div class="report-body">
          <div class="report-meta">
            <span class="report-date">${row.date}</span>
            <span class="report-tag ${tagClass}">${row.category}</span>
          </div>
          <h3 class="report-title">${row.title}</h3>
          <p class="report-excerpt">${row.text}</p>
        </div>
      `;

      grid.appendChild(card);
    });
  } catch (e) {
    console.error("読み込み失敗", e);
  }
}

document.addEventListener("DOMContentLoaded", loadReports);
