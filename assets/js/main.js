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

function setupBackToTop() {
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.type = "button";
  btn.setAttribute("aria-label", "回到頂部");
  btn.innerHTML = "&#8593;";
  document.body.appendChild(btn);

  const onScroll = () => {
    btn.classList.toggle("visible", window.scrollY > 300);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

setupBackToTop();

function setupFeatureIconLinks() {
  const icons = document.querySelectorAll(".feature-grid article");
  const cards = document.querySelectorAll(".feature-cards .feature-card");
  if (!icons.length || !cards.length) return;

  icons.forEach((icon, index) => {
    const target = cards[index];
    if (!target) return;
    icon.setAttribute("role", "button");
    icon.setAttribute("tabindex", "0");

    const goToCard = () => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    };

    icon.addEventListener("click", goToCard);
    icon.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goToCard();
      }
    });
  });
}

setupFeatureIconLinks();

function setupCountUp() {
  const elements = document.querySelectorAll(
    ".final-stats .stat-num, .stats-grid strong"
  );
  if (!elements.length) return;

  const targets = new Map();
  elements.forEach((el) => {
    const match = el.textContent.trim().match(/(\d+)(\+?)/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    targets.set(el, { target, suffix });
    el.textContent = "0" + suffix;
  });

  const animate = (el) => {
    const info = targets.get(el);
    if (!info) return;
    const { target, suffix } = info;
    const duration = 1500;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((el) => observer.observe(el));
}

setupCountUp();
