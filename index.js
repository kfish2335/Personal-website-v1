/* ==================== Theme ==================== */
(function () {
  const html = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored === "light") html.classList.add("light");
  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector(".theme-toggle-icon");

  function setTheme(mode) {
    if (mode === "light") {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      icon.textContent = "☀";
    } else {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      icon.textContent = "☾";
    }
  }
  setTheme(stored || "dark");
  btn.addEventListener("click", () =>
    setTheme(html.classList.contains("light") ? "dark" : "light")
  );
})();

/* ============== Mobile Menu Toggle ============== */
(function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  toggle.addEventListener("click", () => {
    const isHidden = menu.hasAttribute("hidden");
    menu.toggleAttribute("hidden");
    toggle.setAttribute("aria-expanded", String(isHidden));
  });
  // close on link click
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
})();

/* ================== Modal / Videos ================== */
(function () {
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalClose");
  const frame = document.getElementById("ytFrame");

  function openVideo(ytId) {
    frame.src = `https://www.youtube.com/embed/${ytId}`;
    backdrop.removeAttribute("hidden");
  }
  function closeVideo() {
    frame.src = "";
    backdrop.setAttribute("hidden", "");
  }

  document.querySelectorAll(".js-video").forEach((btn) => {
    btn.addEventListener("click", () => openVideo(btn.dataset.yt));
  });
  closeBtn.addEventListener("click", closeVideo);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeVideo();
    }
  });
})();

/* =================== Footer Year =================== */
document.getElementById("year").textContent = new Date().getFullYear();
