const cardGrid = document.getElementById("card-grid");

async function loadCards() {
  if (!cardGrid) return;

  try {
    const response = await fetch("./data/girls.json");
    if (!response.ok) {
      throw new Error("Failed to load data/girls.json");
    }

    const { profiles } = await response.json();
    if (!Array.isArray(profiles)) {
      throw new Error("Invalid JSON format: profiles must be an array");
    }

    cardGrid.innerHTML = profiles
      .filter((item) => item.visible !== false)
      .map(
        (item) => `
          <a class="card" href="${item.link}" target="_blank" rel="noopener noreferrer">
            <figure>
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
            </figure>
            <figcaption>${item.name}</figcaption>
          </a>
        `
      )
      .join("");
  } catch (error) {
    console.error(error);
    cardGrid.innerHTML = "<p>读取卡片数据失败，请检查 data/girls.json。</p>";
  }
}

loadCards();
