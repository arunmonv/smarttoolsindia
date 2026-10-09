// Generic calculator runtime. Each page defines window.CALC = { results, compute(v, fmt) -> {resultId: text} }.
(function () {
  var C = window.CALC, form = document.getElementById('calc-form');
  if (!C || !form) return;
  var inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  var fmt = {
    inr: function (n) { return inr.format(n); },
    num: function (n, d) { return new Intl.NumberFormat('en-IN', { maximumFractionDigits: d == null ? 2 : d }).format(n); }
  };
  function run() {
    var v = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.id) return;
      // selects and date fields stay strings; number fields are parsed
      v[el.id] = (el.tagName === 'SELECT' || el.type === 'date') ? el.value : parseFloat(el.value);
    });
    // Selects holding plain numbers (e.g. GST rate) become numbers
    Array.prototype.forEach.call(form.elements, function (el) {
      if (el.tagName === 'SELECT' && el.value !== '' && !isNaN(Number(el.value))) v[el.id] = Number(el.value);
    });
    var out;
    try { out = C.compute(v, fmt); } catch (e) { out = null; }
    Object.keys(C.results).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = out && out[id] != null ? out[id] : '–'; // '–' when inputs are invalid
    });
  }
  form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
  form.addEventListener('input', run); // live update
  form.addEventListener('reset', function () { setTimeout(run, 0); }); // recalc once defaults are restored
  run();
})();
