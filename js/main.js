// Theme toggle (persisted; try/catch in case storage is blocked)
(function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem('theme'); if (t) root.setAttribute('data-theme', t); } catch (e) {}
  var btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  // Mobile menu
  var menu = document.getElementById('menu-btn'), nav = document.getElementById('nav');
  if (menu && nav) menu.addEventListener('click', function () { nav.classList.toggle('open'); });
  // Homepage search across ALL tools (window.SEARCH is embedded in the page).
  // Every word typed must appear in the tool's title, description, keywords or category.
  var form = document.getElementById('search-form'), input = document.getElementById('q');
  if (form && input && window.SEARCH) {
    var grid = document.getElementById('tool-grid'), title = document.getElementById('featured-title'), none = document.getElementById('no-results');
    var featuredHtml = grid.innerHTML, featuredTitle = title.textContent;
    var esc = function (s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var card = function (t) {
      return '<a class="tool" href="' + t.u + '"><img src="' + t.i + '" width="44" height="44" alt=""><h3>' + esc(t.t) + '</h3><p>' + esc(t.b) + '</p><span>Use Now →</span></a>';
    };
    var filter = function () {
      var words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      grid.classList.toggle('searching', words.length > 0); // lets CSS show only the top featured tools when not searching
      if (!words.length) { grid.innerHTML = featuredHtml; title.textContent = featuredTitle; none.style.display = 'none'; return; } // back to featured
      // A word matches when it starts a word in the tool text ("age" finds Age Calculator, not "percentage")
      var pats = words.map(function (w) { return new RegExp('(^|[^a-z0-9])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); });
      var hits = window.SEARCH.filter(function (t) { return pats.every(function (p) { return p.test(t.k); }); })
        .sort(function (a, b) { // tools whose title matches come first
          var sa = pats.filter(function (p) { return p.test(a.t.toLowerCase()); }).length, sb = pats.filter(function (p) { return p.test(b.t.toLowerCase()); }).length;
          return sb - sa;
        });
      grid.innerHTML = hits.map(card).join('');
      title.textContent = 'Search results (' + hits.length + ')';
      none.style.display = hits.length ? 'none' : 'block';
    };
    input.addEventListener('input', filter);
    form.addEventListener('submit', function (e) {
      e.preventDefault(); filter();
      document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    });
    if (location.hash === '#q') input.focus(); // the header search icon on other pages links here
  }
})();
