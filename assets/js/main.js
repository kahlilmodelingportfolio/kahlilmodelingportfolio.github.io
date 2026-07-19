/* Mobile nav toggle */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }
})();

/* Build gallery grid + lightbox.
   A gallery page has: <div class="masonry" data-gallery="nike" data-count="8"></div> */
(function () {
  var grid = document.querySelector(".masonry[data-gallery]");
  if (!grid) return;

  var folder = grid.getAttribute("data-gallery");
  var count = parseInt(grid.getAttribute("data-count"), 10);
  var sources = [];

  for (var i = 1; i <= count; i++) {
    var n = i < 10 ? "0" + i : "" + i;
    var full = "images/" + folder + "/" + n + ".jpg";
    var thumb = "images/" + folder + "/thumb/" + n + ".jpg";
    sources.push(full);

    var fig = document.createElement("figure");
    var img = document.createElement("img");
    img.loading = "lazy";
    img.src = thumb;
    img.alt = folder + " photo " + i;
    img.setAttribute("data-index", i - 1);
    img.addEventListener("load", function () { this.classList.add("loaded"); });
    if (img.complete) img.classList.add("loaded");
    fig.appendChild(img);
    grid.appendChild(fig);
  }

  /* Lightbox */
  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" aria-label="Previous">&#8249;</button>' +
    '<img alt="Enlarged portfolio photo">' +
    '<button class="lb-btn lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector("img");
  var current = 0;

  function show(idx) {
    current = (idx + sources.length) % sources.length;
    lbImg.src = sources[current];
  }
  function open(idx) { show(idx); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
  function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }

  grid.addEventListener("click", function (e) {
    var img = e.target.closest("img");
    if (img) open(parseInt(img.getAttribute("data-index"), 10));
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); show(current + 1); });
  lb.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); show(current - 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(current + 1);
    else if (e.key === "ArrowLeft") show(current - 1);
  });
})();
