(function () {
  // Theme toggle
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  function setIcon() {
    if (!btn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    btn.innerHTML = dark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
  setIcon();
  if (btn) btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon();
  });

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".navbar nav");
  if (toggle && nav) toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Abstract toggles
  document.querySelectorAll(".abs-toggle").forEach(function (b) {
    b.addEventListener("click", function () {
      var box = document.getElementById(b.getAttribute("aria-controls"));
      var open = box.hasAttribute("hidden");
      if (open) box.removeAttribute("hidden"); else box.setAttribute("hidden", "");
      b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
