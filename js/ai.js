// Rule-based assistant: scores each tool's keywords against the question and links the best matches.
// Runs fully in the browser (no server, no API cost). window.TOOLS = [{t:title,u:url,k:keywords}]
(function () {
  var log = document.getElementById('chat-log'), form = document.getElementById('chat-form'), q = document.getElementById('chat-q');
  if (!log || !window.TOOLS) return;
  var STOP = /\b(how|much|what|is|the|a|an|for|of|to|my|i|me|do|can|calculate|calculator|find|need|want|get|in|on|and|with|cost|price)\b/g;
  // Synonyms widen the match (user word -> words found in tool keywords)
  var SYN = { lakh: 'loan emi', crore: 'loan emi', mortgage: 'home loan', house: 'construction home', build: 'construction', building: 'construction', wedding: 'marriage', salary: 'salary take-home', income: 'salary budget', tax: 'gst', bill: 'invoice', sip: 'savings', invest: 'roi savings', gold: 'gold', acre: 'unit converter', land: 'unit converter' };

  function add(cls, html) { var d = document.createElement('div'); d.className = 'msg ' + cls; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function answer(text) {
    var words = text.toLowerCase().replace(STOP, ' ').split(/[^a-z0-9%/-]+/).filter(function (w) { return w.length > 1; });
    words = words.concat(words.reduce(function (a, w) { return SYN[w] ? a.concat(SYN[w].split(' ')) : a; }, []));
    var scored = window.TOOLS.map(function (t) {
      var s = 0; words.forEach(function (w) { if (t.k.indexOf(w) > -1) s += (t.t.toLowerCase().indexOf(w) > -1 ? 3 : 1); });
      return { t: t, s: s };
    }).filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 3);
    if (!scored.length) return 'I couldn’t match that to a calculator. Try words like EMI, GST, gold, loan, paint, tiles, salary or budget – or <a href="../calculators/">browse all tools</a>.';
    return 'These calculators should help:<ul>' + scored.map(function (x) { return '<li><a href="' + x.t.u + '">' + esc(x.t.t) + '</a></li>'; }).join('') + '</ul>Open one, enter your numbers and the result updates instantly.';
  }
  function ask(text) { text = text.trim(); if (!text) return; add('user', esc(text)); add('bot', answer(text)); }

  form.addEventListener('submit', function (e) { e.preventDefault(); ask(q.value); q.value = ''; });
  document.getElementById('chips').addEventListener('click', function (e) { if (e.target.tagName === 'BUTTON') ask(e.target.textContent); });
})();
