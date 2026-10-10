// Static site generator: `node _build/build.js` (run from anywhere) regenerates every HTML page + sitemap.xml.
// Edit CALCS (calcs1.js / calcs2.js), META or the page templates below, then rebuild. Not needed on the web host.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://enkanakku.netlify.app';
const EMAIL = 'konjamtherium@gmail.com';               // contact email
const YEAR = 2026;
const ICONS = 'smarttools-icon-pack/smarttools_icon_pack/';   // icon pack location (relative to site root)
// Tool slug -> icon file when the pack's filename differs from the slug
const ICON_FILE = { 'paint-calculator': 'home-construction/paint-calculator.svg', 'tile-calculator': 'home-construction/tile-calculator.svg', 'salary-take-home-calculator': 'personal-lifestyle/salary-take-home-calculator.svg', 'percentage-calculator': 'converters-utilities/percentage-calculator.svg', 'house-construction-cost-calculator': 'home-construction/construction-cost-calculator.png', 'flooring-calculator': 'home-construction/flooring-cost-calculator.svg', 'profit-margin-calculator': 'business/margin-calculator.svg', 'markup-calculator': 'business/selling-price-calculator.svg', 'roi-calculator': 'business/profit-calculator.svg', 'invoice-generator': 'business/gst-invoice-generator.png', 'budget-planner': 'personal-lifestyle/family-budget-calculator.svg' };
// Prefer a redrawn SVG (same name as the PNG) when one exists in the icon pack
const iconOf = (c) => {
  if (ICON_FILE[c.slug]) return ICON_FILE[c.slug];
  const svg = `${c.cat}/${c.slug}.svg`;
  return fs.existsSync(path.join(ROOT, ICONS, svg)) ? svg : `${c.cat}/${c.slug}.png`;
};
const CALCS = [...require('./calcs1.js'), ...require('./calcs2.js')];
// Long-form calculator write-ups (content-*.js) and guide articles (guides*.js); missing files are skipped
const tryReq = (f) => { try { return require(f); } catch (e) { if (e.code !== 'MODULE_NOT_FOUND') throw e; return null; } };
const CONTENT = Object.assign({}, ...['a', 'b', 'c'].map((k) => tryReq(`./content-${k}.js`) || {}));
const GUIDES = [].concat(...['1', '2'].map((k) => tryReq(`./guides${k}.js`) || []));
const guideCard = (g) => `<a class="tool" href="/guides/${g.slug}.html"><h3>${esc(g.title)}</h3><p>${esc(g.desc)}</p><span>Read guide →</span></a>`;
// Render {h, p[]} sections to HTML; paragraphs starting with '- ' become bullet lists
const renderSections = (secs, h = 'h2') => secs.map((sec) => {
  let out = `<${h}>${esc(sec.h)}</${h}>`, list = [];
  const flush = () => { if (list.length) { out += `<ul>${list.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`; list = []; } };
  for (const t of sec.p) { if (t.startsWith('- ')) list.push(t.slice(2)); else { flush(); out += `<p>${esc(t)}</p>`; } }
  flush(); return out;
}).join('\n    ');

// ---- categories (order = homepage order) ----
const CATS = [
  { key: 'finance', name: 'Finance', short: 'Loans, EMI, Gold, Savings and more', icon: 'finance/savings-calculator.svg', nav: 'calculators',
    title: 'Finance Calculators – EMI, Loan, Gold & Savings', desc: 'Free finance calculators for India: EMI, personal loan, home loan, car & bike loan, gold loan, gold jewellery price, savings and loan comparison.',
    text: 'Plan borrowing and saving with confidence. These calculators cover every common loan in India – home, car, bike and personal – as well as gold loans, jewellery pricing and savings growth. All calculations run in your browser; nothing you enter is sent or stored.' },
  { key: 'home-construction', name: 'Home & Construction', short: 'Construction, Paint, Tiles, Cement and more', icon: 'home-construction/construction-cost-calculator.png', nav: 'calculators',
    title: 'Home & Construction Calculators – Cost, Paint, Tile, Cement', desc: 'Free construction calculators for India: house construction cost, paint, tiles, cement, bricks, TMT steel and flooring estimates.',
    text: 'Budget and order materials for your home. Estimate overall construction cost, then work out paint, tiles, cement, bricks, steel and flooring quantities so you buy the right amount and avoid wastage.' },
  { key: 'business', name: 'Business', short: 'GST, Profit, Margin, Invoice and more', icon: 'business/gst-calculator.png', nav: 'calculators',
    title: 'Business Calculators – GST, Profit Margin, Invoice, ROI', desc: 'Free business calculators for India: GST, profit margin, markup, discount, invoice total, break-even and ROI.',
    text: 'Everyday maths for shop owners, freelancers and small businesses: add or remove GST, price products with the right markup, check margins, total an invoice and find your break-even point.' },
  { key: 'personal-lifestyle', name: 'Personal & Lifestyle', short: 'Marriage, Salary, Budget, Education and more', icon: 'personal-lifestyle/family-budget-calculator.svg', nav: 'calculators',
    title: 'Personal & Lifestyle Calculators – Salary, Budget, Wedding', desc: 'Free personal finance calculators for India: salary take-home, monthly budget planner, wedding budget and education cost planning.',
    text: 'Plan the big moments and the monthly routine – from your in-hand salary and a simple 50/30/20 budget to wedding costs and saving for your child’s education.' },
  { key: 'converters-utilities', name: 'Converters & Utilities', short: 'Unit, Date, Age, Percentage and more', icon: 'converters-utilities/unit-converter.png', nav: 'converters',
    title: 'Converters & Utilities – Unit, Date, Age, Percentage', desc: 'Free online converters and utilities: unit converter with Indian land units, date difference, age calculator and percentage calculator.',
    text: 'Handy everyday tools: convert length, area and weight (including cent, gunta, acre and tola), count days between dates, calculate exact age and work out percentages.' }
];

// ---- per-tool card text, search keywords and featured order ----
const META = {
  'emi-calculator': ['Calculate your monthly EMI, total interest and repayment.', 'loan interest repayment', 1],
  'gold-jewellery-calculator': ['Find the final price including making charges, wastage & GST.', 'making charges wastage gold price', 2],
  'gold-loan-calculator': ['Know your loan value based on gold weight and purity.', 'loan against gold purity', 3],
  'gst-calculator': ['Calculate GST amount and final price easily.', 'tax invoice inclusive exclusive cgst sgst', 4],
  'profit-margin-calculator': ['Find your profit margin and markup percentage.', 'markup business profit', 5],
  'house-construction-cost-calculator': ['Estimate construction cost based on area and rate.', 'building home area rate', 6],
  'paint-calculator': ['Find the required paint quantity for your walls.', 'walls litres colour', 7],
  'tile-calculator': ['Calculate number of tiles and estimated cost.', 'flooring floor', 8],
  'salary-take-home-calculator': ['Find your in-hand salary after deductions.', 'in-hand pf tax deductions ctc', 9],
  'percentage-calculator': ['Calculate percentage, increase or decrease easily.', 'increase decrease', 10],
  'personal-loan-calculator': ['Get your personal loan EMI and total cost with fees.', 'unsecured loan emi interest'],
  'home-loan-calculator': ['Plan your home loan EMI with down payment and tenure.', 'housing loan mortgage property'],
  'car-bike-loan-calculator': ['Check car or two-wheeler loan EMI and total cost.', 'vehicle auto two wheeler finance'],
  'savings-calculator': ['See how monthly savings or SIP grow over time.', 'sip investment compound deposit'],
  'loan-comparison-calculator': ['Compare two loans by EMI and total interest.', 'compare emi rates tenure'],
  'cement-calculator': ['Cement bags, sand and aggregate for a concrete slab.', 'concrete mix m20 slab sand aggregate'],
  'concrete-calculator': ['Concrete volume and ready-mix cost for a slab.', 'slab footing ready mix m3 volume'],
  'renovation-cost-calculator': ['Renovation budget by area and scope of work.', 'remodel repair interior upgrade'],
  'flooring-calculator': ['Flooring cost with wastage and labour.', 'marble granite vitrified wood floor'],
  'markup-calculator': ['Set your selling price from cost and markup %.', 'price profit'],
  'discount-calculator': ['Final price and savings after one or two discounts.', 'sale offer off'],
  'invoice-generator': ['Subtotal, discount, GST and total for an invoice.', 'bill gst invoice total'],
  'break-even-calculator': ['Units and revenue needed to cover your costs.', 'fixed cost variable cost'],
  'roi-calculator': ['Return on investment and annualised CAGR.', 'return profit cagr investment'],
  'marriage-budget-calculator': ['Plan wedding costs with a contingency buffer.', 'wedding catering venue decoration'],
  'budget-planner': ['Split income into needs, wants and savings.', '50/30/20 expenses monthly'],
  'education-cost-calculator': ['Future education cost and monthly savings needed.', 'college school fees child inflation'],
  'unit-converter': ['Convert length, area and weight incl. cent, gunta, acre.', 'sq ft cent gunta acre tola kg feet metre'],
  'date-calculator': ['Days, weeks and months between two dates.', 'difference days between'],
  'age-calculator': ['Exact age in years, months and days.', 'birthday dob']
};
CALCS.forEach((c) => { const m = META[c.slug]; if (!m) throw new Error('Missing META for ' + c.slug); c.blurb = m[0]; c.kw = m[1]; c.featured = m[2] || 0; });
const catOf = (k) => CATS.find((c) => c.key === k);
const byCat = (k) => CALCS.filter((c) => c.cat === k);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const write = (rel, html) => { const p = path.join(ROOT, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, html); };

// ---- shared layout ----
const link = (href, text, cur) => `<a href="${href}"${cur ? ' aria-current="page"' : ''}>${text}</a>`;
function header(prefix, cur) {
  const dd = (key, href, label, items) => `<div class="dd"><a class="dd-parent" href="${href}"${cur === key ? ' aria-current="page"' : ''}>${label}</a><div class="dd-menu">${items.join('')}</div></div>`;
  const item = (c) => `<a href="/calculators/${c.slug}.html">${esc(c.title)}</a>`;
  return `<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="EnKanakku home">
      <img src="${prefix}${ICONS}navigation/calculators.png" width="44" height="44" alt="">
      <span><strong>En<span>Kanakku</span></strong><small>Calculate • Plan • Build a Better Tomorrow</small></span>
    </a>
    <nav class="nav" id="nav" aria-label="Main">
      ${link('/', 'Home', cur === 'home')}
      ${dd('calculators', '/calculators/', 'Calculators', [...CATS.filter((c) => c.nav === 'calculators').map((c) => `<a href="/${c.key}/">${esc(c.name)}</a>`), '<a href="/calculators/">All calculators</a>'])}
      ${dd('tools', '/#featured', 'Tools', ['<a href="/ai-assistant/">AI Assistant</a>', ...['emi-calculator', 'gst-calculator', 'gold-jewellery-calculator', 'salary-take-home-calculator'].map((s) => item(CALCS.find((c) => c.slug === s)))])}
      ${dd('converters', '/converters-utilities/', 'Converters', byCat('converters-utilities').map(item))}
      ${dd('resources', '/resources/', 'Resources', ['<a href="/guides/">Guides</a>', '<a href="/about/">About Us</a>', '<a href="/contact/">Contact</a>', '<a href="/privacy-policy/">Privacy Policy</a>', '<a href="/disclaimer/">Disclaimer</a>'])}
      ${link('/guides/', 'Guides', cur === 'guides')}
      ${link('/about/', 'About', cur === 'about')}
    </nav>
    <button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle dark mode"><img src="${prefix}${ICONS}navigation/dark-mode.png" width="22" height="22" alt=""></button>
    <a class="icon-btn" href="/#q" aria-label="Search tools"><img src="${prefix}${ICONS}navigation/search.png" width="22" height="22" alt=""></a>
    <button class="icon-btn menu-btn" id="menu-btn" type="button" aria-label="Open menu">☰</button>
  </div>
</header>`;
}
function footer(prefix) {
  return `<footer class="site-footer">
  <div class="container footer-inner">
    <a class="brand" href="/"><img src="${prefix}${ICONS}navigation/calculators.png" width="32" height="32" alt=""><strong>EnKanakku</strong></a>
    <nav aria-label="Footer"><a href="/">Home</a><a href="/calculators/">Calculators</a><a href="/#featured">Tools</a><a href="/converters-utilities/">Converters</a><a href="/resources/">Resources</a><a href="/guides/">Guides</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy-policy/">Privacy</a></nav>
    <span>© ${YEAR} EnKanakku. All rights reserved. Results are estimates for guidance only.</span>
  </div>
</footer>`;
}
// opts: title, desc, url (path starting with /), depth, cur, body, ld (object), scripts (array of src), inlineScript
function layout(o) {
  const prefix = o.root ? '/' : '../'.repeat(o.depth || 0), url = DOMAIN + o.url;
  const html = `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#2563eb">
<meta property="og:type" content="website">
<meta property="og:site_name" content="EnKanakku">
<meta property="og:title" content="${esc(o.title)}">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="en_IN">
<link rel="icon" href="${prefix}${ICONS}navigation/calculators.png">
<link rel="stylesheet" href="${prefix}css/style.css">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y4DYCSHQRX"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Y4DYCSHQRX');</script>
${o.ld ? `<script type="application/ld+json">${JSON.stringify(o.ld)}</script>` : ''}
</head>
<body>
${header(prefix, o.cur)}
${o.body}
${footer(prefix)}
${o.inlineScript ? `<script>${o.inlineScript}</script>` : ''}
<script src="${prefix}js/main.js" defer></script>
${(o.scripts || []).map((s) => `<script src="${prefix}${s}" defer></script>`).join('\n')}
</body>
</html>
`;
  // Make root-absolute links ("/finance/") relative to this page so the site works from any folder or
  // sub-path, not only a domain root. The 404 page (served at unknown depths) keeps absolute links.
  return o.root ? html : html.replace(/href="\/([^"]*)"/g, (m, rest) => `href="${rest === '' || rest[0] === '#' ? (prefix || './') : prefix}${rest}"`);
}
const crumbLd = (items) => ({ '@type': 'BreadcrumbList', itemListElement: items.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, ...(href ? { item: DOMAIN + href } : {}) })) });
const card = (c, prefix) => `<a class="tool" href="/calculators/${c.slug}.html" data-keywords="${esc(c.kw)}"><img src="${prefix}${ICONS}${iconOf(c)}" width="44" height="44" loading="lazy" alt=""><h3>${esc(c.title)}</h3><p>${esc(c.blurb)}</p><span>Use Now →</span></a>`;

// ---- calculator pages ----
function calcPage(c) {
  const url = `/calculators/${c.slug}.html`, cat = catOf(c.cat);
  const renderField = (f) => {
    const input = f.type === 'select'
      ? `<select id="${f.id}">${f.options.map(([val, lab]) => `<option value="${val}"${String(val) === String(f.value) ? ' selected' : ''}>${esc(lab)}</option>`).join('')}</select>`
      : f.type === 'date' ? `<input id="${f.id}" type="date" value="${f.value}">`
      : `<input id="${f.id}" type="number" min="${f.step === 'any' ? '' : 0}" step="${f.step || 'any'}" value="${f.value}" inputmode="decimal"${f.list ? ` list="${f.id}-list"` : ''}>${f.list ? `<datalist id="${f.id}-list">${f.list.map((o) => `<option value="${o}">`).join('')}</datalist>` : ''}`;
    return `<label for="${f.id}">${esc(f.label)}</label>\n      ${input}`;
  };
  const mainFields = c.fields.filter((f) => !f.adv).map(renderField).join('\n      ');
  const advFields = c.fields.filter((f) => f.adv).map(renderField).join('\n      ');
  const fields = mainFields + (advFields ? `\n      <details class="adv"><summary>Advanced assumptions (editable)</summary>\n      ${advFields}\n      </details>` : '');
  const results = Object.entries(c.results).map(([id, lab]) => `<div><small>${esc(lab)}</small><b id="${id}">–</b></div>`).join('\n      ');
  const related = byCat(c.cat).filter((x) => x.slug !== c.slug).slice(0, 4);
  const extra = CONTENT[c.slug] || {};
  // Existing FAQs (optionally one replaced with a corrected answer) plus the extra ones from content-*.js
  const faqs = c.faqs.map(([q, a]) => (extra.replaceFaq && extra.replaceFaq[0] === q ? [q, extra.replaceFaq[1]] : [q, a])).concat(extra.faqs || []);
  const guides = GUIDES.filter((g) => (g.related || []).includes(c.slug));
  const body = `<main class="container">
  <p class="crumbs"><a href="/">Home</a> › <a href="/${cat.key}/">${esc(cat.name)}</a> › ${esc(c.title)}</p>
  <h1>${esc(c.h1)}</h1>
  <p>${esc(c.intro)}</p>
  <div class="calc-wrap">
    <form class="panel" id="calc-form">
      ${fields}
      <button class="btn" type="submit">Calculate</button> <button class="btn btn-ghost" type="reset">Reset</button>
    </form>
    <div class="panel result" aria-live="polite">
      ${results}
    </div>
  </div>
  <p class="note">For educational and estimation purposes only – results may contain errors, so please verify before making any decision. <a href="/disclaimer/">Disclaimer</a></p>
  <section class="seo-text">
    <h2>How it works</h2>
    <p>${esc(c.how)}</p>
    ${renderSections(extra.sections || [])}
  </section>
  ${guides.length ? `<section class="block"><h2>Related guides</h2><ul class="plain-list">${guides.map((g) => `<li><a href="/guides/${g.slug}.html">${esc(g.title)}</a></li>`).join('')}</ul></section>` : ''}
  <section class="faq">
    <h2>FAQs</h2>
    ${faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n    ')}
  </section>
  <section class="block">
    <h2>More ${esc(cat.name)} tools</h2>
    <div class="tool-grid">${related.map((r) => card(r, '../')).join('')}</div>
  </section>
</main>`;
  return layout({
    title: `${c.title} – Free Online | EnKanakku`, desc: c.desc, url, depth: 1, cur: cat.nav, body,
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebApplication', name: c.title, url: DOMAIN + url, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' } },
      crumbLd([['Home', '/'], [cat.name, `/${cat.key}/`], [c.title]]),
      { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }] },
    inlineScript: `var N=function(v){return Number.isFinite(v)&&v>=0};window.CALC={results:${JSON.stringify(c.results)},compute:${c.compute.toString().replace(/^compute/, 'function')}};`,
    scripts: ['js/calc.js']
  });
}
CALCS.forEach((c) => write(`calculators/${c.slug}.html`, calcPage(c)));

// ---- category pages ----
CATS.forEach((cat) => {
  const tools = byCat(cat.key);
  write(`${cat.key}/index.html`, layout({
    title: `${cat.title} | EnKanakku`, desc: cat.desc, url: `/${cat.key}/`, depth: 1, cur: cat.nav,
    ld: { '@context': 'https://schema.org', '@graph': [crumbLd([['Home', '/'], [cat.name]]), { '@type': 'CollectionPage', name: cat.name + ' calculators', url: `${DOMAIN}/${cat.key}/`, hasPart: tools.map((t) => ({ '@type': 'WebPage', name: t.title, url: `${DOMAIN}/calculators/${t.slug}.html` })) }] },
    body: `<main class="container">
  <p class="crumbs"><a href="/">Home</a> › ${esc(cat.name)}</p>
  <h1>${esc(cat.name)} Calculators</h1>
  <p class="sub">${esc(cat.short)} – ${tools.length} free tools.</p>
  <div class="tool-grid">${tools.map((t) => card(t, '../')).join('')}</div>
  <section class="seo-text block"><h2>About these tools</h2><p>${esc(cat.text)}</p></section>
</main>`
  }));
});

// ---- all-calculators hub ----
write('calculators/index.html', layout({
  title: 'All Calculators – Finance, Construction, Business & More | EnKanakku', desc: `All ${CALCS.length} free online calculators and converters for India in one place.`, url: '/calculators/', depth: 1, cur: 'calculators',
  ld: { '@context': 'https://schema.org', '@graph': [crumbLd([['Home', '/'], ['All calculators']])] },
  body: `<main class="container">
  <p class="crumbs"><a href="/">Home</a> › All calculators</p>
  <h1>All Calculators &amp; Tools</h1>
  <p class="sub">${CALCS.length} free tools, built for Indian users.</p>
  ${CATS.map((cat) => `<section class="block"><div class="head-row"><h2>${esc(cat.name)}</h2><a href="/${cat.key}/">View category →</a></div><div class="tool-grid">${byCat(cat.key).map((t) => card(t, '../')).join('')}</div></section>`).join('\n  ')}
</main>`
}));

// ---- homepage ----
const featured = CALCS.filter((c) => c.featured).sort((a, b) => a.featured - b.featured);
// Full search index embedded in the homepage: searches all tools, not just the featured ones
const SEARCH_INDEX = CALCS.map((c) => ({ t: c.title, u: `calculators/${c.slug}.html`, i: `${ICONS}${iconOf(c)}`, b: c.blurb, k: (c.title + ' ' + c.blurb + ' ' + c.kw + ' ' + catOf(c.cat).name).toLowerCase() }));
write('index.html', layout({
  inlineScript: `window.SEARCH=${JSON.stringify(SEARCH_INDEX)};`,
  title: 'EnKanakku – Free EMI, GST, Gold & Construction Calculators', url: '/', depth: 0, cur: 'home',
  desc: 'Free online calculators for India: EMI, GST, gold jewellery, gold loan, house construction cost, paint, tiles, salary and more. Fast, accurate, no registration.',
  ld: { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', name: 'EnKanakku', url: DOMAIN + '/', logo: DOMAIN + '/' + ICONS + 'navigation/calculators.png' },
    { '@type': 'WebSite', name: 'EnKanakku', url: DOMAIN + '/', inLanguage: 'en-IN' }] },
  body: `<main>
<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="badge">🇮🇳 Free • Easy • 100% Indian Focused</span>
      <h1>Smart Tools for <span>Everyday Decisions</span></h1>
      <p>Use our free calculators, converters and useful tools to plan your finances, home, business and more — all in one place.</p>
      <form class="search" id="search-form" role="search">
        <input id="q" type="search" placeholder="Search calculators and tools..." aria-label="Search tools" autocomplete="off">
        <button type="submit">Search</button>
      </form>
    </div>
    <img class="hero-art" src="img/hero.svg" width="480" height="340" alt="Calculator, house, growth chart and gold coins illustration">
    <ul class="features">
      <li><img src="${ICONS}navigation/tools.png" width="44" height="44" alt=""><div><b>Quick &amp; Accurate</b><span>Get instant and reliable results</span></div></li>
      <li><img src="${ICONS}finance/savings-calculator.svg" width="44" height="44" alt=""><div><b>100% Free</b><span>No registration required</span></div></li>
      <li><img src="${ICONS}navigation/about.png" width="44" height="44" alt=""><div><b>India Focused</b><span>Built for Indian users &amp; needs</span></div></li>
      <li><img src="${ICONS}navigation/converters.png" width="44" height="44" alt=""><div><b>Mobile Friendly</b><span>Use on any device, anywhere</span></div></li>
    </ul>
  </div>
</section>

<section class="block" id="categories">
  <div class="container">
    <h2>Popular Categories</h2>
    <p class="sub">Choose a category to explore our tools</p>
    <div class="cat-grid">
      ${CATS.map((cat, i) => `<a class="cat cat-${i + 1}" href="/${cat.key}/"><img src="${ICONS}${cat.icon}" width="56" height="56" loading="lazy" alt=""><h3>${esc(cat.name)}</h3><p>${esc(cat.short)}</p><span>${byCat(cat.key).length} tools →</span></a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="block" id="featured">
  <div class="container">
    <div class="head-row"><h2 id="featured-title">Featured Tools</h2><a href="/calculators/">View All Tools →</a></div>
    <p class="no-results" id="no-results">No tools match your search. Try “EMI”, “GST” or “gold”, or <a href="/calculators/">browse all ${CALCS.length} tools</a>.</p>
    <div class="tool-grid" id="tool-grid">
      ${featured.map((c) => card(c, '')).join('\n      ')}
    </div>
  </div>
</section>

${GUIDES.length ? `<section class="block">
  <div class="container">
    <div class="head-row"><h2>Latest Guides</h2><a href="/guides/">All guides →</a></div>
    <div class="tool-grid">${GUIDES.slice(0, 5).map(guideCard).join('')}</div>
  </div>
</section>` : ''}

<section class="block">
  <div class="container">
    <div class="ai-bar">
      <svg class="ai-ico" viewBox="0 0 32 32" width="34" height="34" aria-hidden="true"><path d="M13 5l2.6 7.4L23 15l-7.4 2.6L13 25l-2.6-7.4L3 15l7.4-2.6z" fill="#2563eb"/><path d="M24 4l1.2 3.3L28.5 8.5l-3.3 1.2L24 13l-1.2-3.3L19.5 8.5l3.3-1.2z" fill="#60a5fa"/></svg>
      <div><strong>Try our AI Assistant</strong><br><small>Ask anything about finance, home, business and more. Get quick answers and guidance.</small></div>
      <a class="btn" href="/ai-assistant/">Chat with AI →</a>
    </div>
  </div>
</section>

<section class="block">
  <div class="container seo-text">
    <h2>How to use EnKanakku</h2>
    <p>Pick a calculator, enter your numbers and read the result straight away – there is nothing to install and no sign-up. Each calculator page explains the formula it uses, shows a worked example and lists the assumptions behind the result, so you can check the logic rather than trust a black box. Fields under “Advanced assumptions” let you change defaults such as GST on making charges, wastage on tiles or the loan-to-value ratio on a gold loan.</p>
    <p>Our <a href="/guides/"><u>guides</u></a> go deeper than the calculators: how EMI is calculated, how gold loan value is decided, how much paint or cement a job needs, and how to plan a monthly budget. They are written in plain language with worked numbers, and they link back to the matching calculator.</p>
    <p>All results are estimates for planning. Rates, taxes and material prices change and differ by lender, jeweller, supplier and city, so confirm the final figures with the provider before you commit. See our <a href="/disclaimer/"><u>disclaimer</u></a> and <a href="/about/"><u>about page</u></a> for how the tools are built and maintained.</p>
    <h2>Free Online Calculators Built for India</h2>
    <p>EnKanakku brings together the calculators Indians use every day: an <a href="/calculators/emi-calculator.html"><u>EMI calculator</u></a> for home, car and personal loans, a <a href="/calculators/gst-calculator.html"><u>GST calculator</u></a>, gold jewellery and gold loan calculators, house construction cost estimators, and salary take-home tools. Everything runs in your browser, so results are instant and your numbers are never stored or sent anywhere.</p>
  </div>
</section>
</main>`
}));

// ---- AI assistant (rule-based, runs in the browser; no server cost) ----
const TOOLS = CALCS.map((c) => ({ t: c.title, u: `../calculators/${c.slug}.html`, k: (c.title + ' ' + c.blurb + ' ' + c.kw).toLowerCase() }));
write('ai-assistant/index.html', layout({
  title: 'AI Assistant – Find the Right Calculator | EnKanakku', desc: 'Ask a question about loans, GST, gold, construction or budgeting and get pointed to the right free calculator instantly.', url: '/ai-assistant/', depth: 1, cur: 'tools',
  ld: { '@context': 'https://schema.org', '@graph': [crumbLd([['Home', '/'], ['AI Assistant']])] },
  body: `<main class="container narrow">
  <p class="crumbs"><a href="/">Home</a> › AI Assistant</p>
  <h1>AI Assistant</h1>
  <p>Ask in plain words – for example “how much EMI for a 20 lakh loan?” – and I’ll point you to the right calculator. This helper runs in your browser, so nothing you type is sent anywhere.</p>
  <div class="chat panel">
    <div class="chat-log" id="chat-log" aria-live="polite"><div class="msg bot">Hi! What do you want to calculate today?</div></div>
    <form class="chat-form" id="chat-form"><input id="chat-q" type="text" placeholder="Type your question…" aria-label="Your question" autocomplete="off"><button class="btn" type="submit">Ask</button></form>
    <div class="chips" id="chips"><button type="button">EMI for a home loan</button><button type="button">Add GST to a price</button><button type="button">Gold jewellery price</button><button type="button">Cost to build a house</button><button type="button">Monthly budget</button></div>
  </div>
  <p class="sub">Not a financial adviser. Results from our calculators are estimates for guidance only.</p>
</main>`,
  inlineScript: `window.TOOLS=${JSON.stringify(TOOLS)};`, scripts: ['js/ai.js']
}));

// ---- content pages ----
const simple = (slug, title, desc, h1, html, cur) => write(`${slug}/index.html`, layout({ title: `${title} | EnKanakku`, desc, url: `/${slug}/`, depth: 1, cur, ld: { '@context': 'https://schema.org', '@graph': [crumbLd([['Home', '/'], [h1]])] }, body: `<main class="container narrow"><p class="crumbs"><a href="/">Home</a> › ${esc(h1)}</p><h1>${esc(h1)}</h1>${html}</main>` }));
simple('about', 'About Us', 'EnKanakku offers free, accurate calculators and converters built for Indian users: finance, home construction, business and everyday needs.', 'About EnKanakku', `
<p>EnKanakku is a collection of free calculators, converters and everyday tools designed for Indian users – loans and EMI, GST, gold, home construction, salary, budgets and more.</p>
<h2>Our approach</h2>
<ul><li><b>Free:</b> no sign-up, no hidden charges.</li><li><b>India focused:</b> ₹ formatting, GST slabs, Indian units such as cent, gunta and tola.</li><li><b>Private:</b> every calculation runs in your browser. We never receive the numbers you enter.</li><li><b>Fast:</b> lightweight pages that work on any phone.</li></ul>
<h2>Important note</h2>
<p>Our tools give estimates to help you plan. Banks, builders, jewellers and tax rules differ, so always confirm figures with the relevant provider or a qualified professional before making a financial decision.</p>
<p><a class="btn-link" href="/calculators/">Browse all ${CALCS.length} tools →</a></p>`, 'about');
simple('contact', 'Contact Us', 'Contact EnKanakku for feedback, suggestions for new calculators or corrections.', 'Contact Us', `
<p>Found a mistake, or want a calculator we don’t have yet? We’d love to hear from you.</p>
<p><a class="btn-link" href="mailto:${EMAIL}">Email ${EMAIL}</a></p>
<p>Please include the name of the calculator and the values you entered when reporting an issue.</p>`, 'resources');
simple('resources', 'Resources', 'Helpful pages about EnKanakku: about us, contact, privacy policy and disclaimer.', 'Resources', `
<ul class="plain-list"><li><a href="/guides/">Guides</a> – step-by-step explainers on loans, GST, gold, construction and budgeting</li><li><a href="/about/">About Us</a> – who we are and how the tools work</li><li><a href="/ai-assistant/">AI Assistant</a> – find the right calculator quickly</li><li><a href="/contact/">Contact</a> – feedback and suggestions</li><li><a href="/privacy-policy/">Privacy Policy</a></li><li><a href="/disclaimer/">Disclaimer</a></li></ul>`, 'resources');
simple('privacy-policy', 'Privacy Policy', 'How EnKanakku handles your data: calculations run in your browser and are not stored or sent to our servers.', 'Privacy Policy', `
<p><b>Last updated:</b> ${YEAR}</p>
<p>Calculations on EnKanakku run entirely in your browser. The values you enter are not sent to or stored on our servers.</p>
<h2>What is stored on your device</h2><p>We save only your light/dark theme preference in your browser’s local storage.</p>
<h2>Analytics and advertising</h2><p>We use Google Analytics 4 to understand how many people visit the site and which pages they view. Google Analytics may use cookies and collects anonymised usage data such as pages viewed, approximate location and device type. The values you enter into calculators are not shared with it. If we add advertising in future, we will update this policy first.</p>
<h2>Contact</h2><p>Questions about this policy: <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>`, 'resources');
simple('disclaimer', 'Disclaimer', 'EnKanakku calculators provide estimates for guidance only and are not financial, tax or legal advice.', 'Disclaimer', `
<p>The calculators on EnKanakku provide estimates for general guidance only. They are not financial, tax, legal or construction advice.</p>
<p>Actual EMI, interest, tax, gold prices, material quantities and costs depend on your lender, jeweller, supplier, location and current rules. Rates and tax slabs change. Always verify figures with the relevant provider or a qualified professional.</p>
<p>We make reasonable efforts to keep the tools accurate but accept no liability for decisions made using their results.</p>`, 'resources');

write('404.html', layout({ title: 'Page not found | EnKanakku', desc: 'The page you were looking for could not be found.', url: '/404.html', depth: 0, root: true, cur: '', body: `<main class="container narrow"><h1>Page not found</h1><p>Sorry, we couldn’t find that page. Try the <a href="/calculators/">full list of calculators</a> or go back to the <a href="/">homepage</a>.</p></main>` }));

// ---- guides (long-form articles; /guides/ index + one page per article) ----
write('guides/index.html', layout({
  title: 'Guides – Loans, GST, Gold, Construction & Budgeting | EnKanakku', desc: 'Plain-language guides for Indian users: how EMI is calculated, GST slabs, gold loan value, house construction cost, budgeting and more.', url: '/guides/', depth: 1, cur: 'guides',
  ld: { '@context': 'https://schema.org', '@graph': [crumbLd([['Home', '/'], ['Guides']])] },
  body: `<main class="container"><p class="crumbs"><a href="/">Home</a> › Guides</p><h1>Guides</h1>
  <p>Step-by-step explainers that sit alongside our calculators – formulas, worked examples and common mistakes, written for everyday Indian users.</p>
  <div class="tool-grid">${GUIDES.map(guideCard).join('')}</div></main>`
}));
GUIDES.forEach((g) => {
  const url = `/guides/${g.slug}.html`;
  const rel = g.related.map((r) => CALCS.find((c) => c.slug === r)).filter(Boolean);
  write(`guides/${g.slug}.html`, layout({
    title: `${g.title} | EnKanakku`, desc: g.desc, url, depth: 1, cur: 'guides',
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', headline: g.title, description: g.desc, inLanguage: 'en-IN', mainEntityOfPage: DOMAIN + url, dateModified: `${YEAR}-10-10`, author: { '@type': 'Organization', name: 'EnKanakku' }, publisher: { '@type': 'Organization', name: 'EnKanakku' } },
      crumbLd([['Home', '/'], ['Guides', '/guides/'], [g.title]])] },
    body: `<main class="container narrow"><p class="crumbs"><a href="/">Home</a> › <a href="/guides/">Guides</a> › ${esc(g.title)}</p>
  <article class="seo-text guide"><h1>${esc(g.title)}</h1><p class="lead">${esc(g.intro)}</p>
    ${renderSections(g.sections)}
    <p class="note">For educational purposes only – not financial, tax or legal advice. Please verify current rules and figures before deciding. <a href="/disclaimer/">Disclaimer</a></p>
  </article>
  ${rel.length ? `<section class="block"><h2>Try the calculators</h2><div class="tool-grid">${rel.map((r) => card(r, '../')).join('')}</div></section>` : ''}</main>`
  }));
});

// ---- sitemap (every page except 404) ----
const urls = ['/', '/calculators/', ...CATS.map((c) => `/${c.key}/`), '/ai-assistant/', '/guides/', ...GUIDES.map((g) => `/guides/${g.slug}.html`), '/about/', '/contact/', '/resources/', '/privacy-policy/', '/disclaimer/', ...CALCS.map((c) => `/calculators/${c.slug}.html`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${DOMAIN}${u}</loc><priority>${u === '/' ? '1.0' : u.startsWith('/calculators/') && u !== '/calculators/' ? '0.8' : '0.6'}</priority></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${CALCS.length} calculators, ${CATS.length} categories, ${urls.length} sitemap URLs`);
