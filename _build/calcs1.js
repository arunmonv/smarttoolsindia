// Calculator definitions (set 1). Each compute() must be self-contained: it is serialised into the page.
const N = (v) => Number.isFinite(v) && v >= 0;
module.exports = [
{
  slug: 'gst-calculator', cat: 'business', icon: 'business/gst-calculator.png',
  title: 'GST Calculator', h1: 'GST Calculator (Add or Remove GST)',
  desc: 'Free GST calculator for India. Add or remove GST at 5%, 12%, 18% or 28% and see the CGST, SGST and final price instantly.',
  intro: 'Add GST to a price or work out the original price from a GST-inclusive amount.',
  fields: [
    { id: 'amount', label: 'Amount (₹)', value: 1000 },
    { id: 'rate', label: 'GST rate (%)', value: 18, step: 'any', list: [0.25, 3, 5, 12, 18, 28] },
    { id: 'mode', label: 'Calculation', type: 'select', value: 'add', options: [['add', 'Add GST (price is exclusive)'], ['remove', 'Remove GST (price is inclusive)']] }
  ],
  results: { base: 'Price before GST', gst: 'Total GST', half: 'CGST / SGST (each)', total: 'Final price' },
  compute(v, f) {
    if (!(v.amount >= 0) || !N(v.rate)) return null;
    const base = v.mode === 'add' ? v.amount : v.amount / (1 + v.rate / 100);
    const gst = base * v.rate / 100;
    return { base: f.inr(base), gst: f.inr(gst), half: f.inr(gst / 2), total: f.inr(base + gst) };
  },
  how: 'GST amount = price × rate ÷ 100. To remove GST from an inclusive price, divide by (1 + rate ÷ 100). For intra-state sales the GST is split equally into CGST and SGST.',
  faqs: [['What are the GST slabs in India?', 'Common GST rates are 5%, 12%, 18% and 28%, with 0.25% and 3% for items such as rough stones and gold. Rates change, so check the latest GST notification for your product.'],
         ['What is CGST and SGST?', 'For sales within a state, GST is split equally between the Central (CGST) and State (SGST) governments.']]
},
{
  slug: 'gold-jewellery-calculator', cat: 'finance', icon: 'finance/gold-jewellery-calculator.png',
  title: 'Gold Jewellery Calculator', h1: 'Gold Jewellery Price Calculator',
  desc: 'Calculate the final gold jewellery price in India including wastage, making charges and GST (3% on gold, 5% on making).',
  intro: 'Find the final price of gold jewellery from weight, today’s rate, wastage and making charges.',
  fields: [
    { id: 'weight', label: 'Jewellery weight (grams)', value: 10, step: 0.01 },
    { id: 'rate', label: 'Gold rate per gram (₹) for your purity', value: 7000 },
    { id: 'wastage', label: 'Wastage (%)', value: 8, step: 0.1 },
    { id: 'making', label: 'Making charges (%)', value: 12, step: 0.1 },
    { id: 'gstGold', label: 'GST on gold value incl. wastage (%)', value: 3, step: 0.01, adv: true },
    { id: 'gstMake', label: 'GST on making charges (%)', value: 5, step: 0.01, adv: true }
  ],
  results: { gold: 'Gold value', waste: 'Wastage amount', make: 'Making charges', gst: 'GST (gold + making)', total: 'Final price' },
  compute(v, f) {
    if (![v.weight, v.rate, v.wastage, v.making, v.gstGold, v.gstMake].every(N)) return null;
    const gold = v.weight * v.rate, waste = gold * v.wastage / 100, base = gold + waste;
    const make = base * v.making / 100, gst = base * v.gstGold / 100 + make * v.gstMake / 100;
    return { gold: f.inr(gold), waste: f.inr(waste), make: f.inr(make), gst: f.inr(gst), total: f.inr(base + make + gst) };
  },
  how: 'Gold value = weight × rate. Wastage and making charges are added as a percentage, then GST is applied to the gold value (default 3%) and to making charges (default 5%); both rates are editable under Advanced assumptions. Jewellers’ methods vary, so treat this as an estimate.',
  faqs: [['How is gold jewellery price calculated?', 'Price = (gold value + wastage) + making charges + GST. Gold value is weight multiplied by the day’s rate for your purity (22K or 24K).'],
         ['What is wastage in gold jewellery?', 'Wastage is the gold lost while crafting the ornament, charged to the customer as a percentage of weight.']]
},
{
  slug: 'gold-loan-calculator', cat: 'finance', icon: 'finance/gold-loan-calculator.png',
  title: 'Gold Loan Calculator', h1: 'Gold Loan Eligibility & Interest Calculator',
  desc: 'Estimate your gold loan amount from weight and purity, plus interest and total repayment. Free gold loan calculator for India.',
  intro: 'Know how much loan you can get against your gold and what it will cost.',
  fields: [
    { id: 'weight', label: 'Gold weight (grams)', value: 50, step: 0.01 },
    { id: 'purity', label: 'Purity (carat, up to 24)', value: 22, step: 'any', list: [24, 22, 18, 14] },
    { id: 'rate', label: '24K gold rate per gram (₹)', value: 7500 },
    { id: 'ltv', label: 'Loan-to-value (%)', value: 75, step: 1 },
    { id: 'interest', label: 'Interest rate (% per year)', value: 10, step: 0.1 },
    { id: 'months', label: 'Tenure (months)', value: 12 }
  ],
  results: { value: 'Gold value', loan: 'Eligible loan amount', int: 'Interest payable', total: 'Total to repay' },
  compute(v, f) {
    if (![v.weight, v.rate, v.ltv, v.interest, v.months].every(N) || !(v.purity > 0 && v.purity <= 24)) return null;
    const value = v.weight * v.rate * v.purity / 24, loan = value * Math.min(v.ltv, 100) / 100;
    const int = loan * v.interest / 100 * v.months / 12; // simple interest, bullet repayment
    return { value: f.inr(value), loan: f.inr(loan), int: f.inr(int), total: f.inr(loan + int) };
  },
  how: 'Gold value = weight × 24K rate × (carat ÷ 24). Loan = gold value × LTV. RBI caps LTV at 75% for most gold loans (higher for small loans under specific rules). Interest here is simple interest with bullet repayment; your lender’s method may differ.',
  faqs: [['What is LTV in a gold loan?', 'Loan-to-value is the share of your gold’s value the lender will finance, typically up to 75%.'],
         ['Which purity is accepted for gold loans?', 'Most lenders accept 18K to 24K gold jewellery or coins.']]
},
{
  slug: 'profit-margin-calculator', cat: 'business', icon: 'business/profit-margin-calculator.png',
  title: 'Profit Margin Calculator', h1: 'Profit Margin & Markup Calculator',
  desc: 'Calculate profit, profit margin % and markup % from cost price and selling price. Free business calculator for India.',
  intro: 'Enter your cost and selling price to see profit, margin and markup.',
  fields: [{ id: 'cost', label: 'Cost price (₹)', value: 800 }, { id: 'sell', label: 'Selling price (₹)', value: 1000 }],
  results: { profit: 'Profit', margin: 'Profit margin', markup: 'Markup' },
  compute(v, f) {
    if (!(v.cost > 0) || !(v.sell >= 0)) return null;
    const p = v.sell - v.cost;
    return { profit: f.inr(p), margin: v.sell > 0 ? f.num(p / v.sell * 100) + '%' : '–', markup: f.num(p / v.cost * 100) + '%' };
  },
  how: 'Profit = selling price − cost. Margin % = profit ÷ selling price × 100. Markup % = profit ÷ cost × 100. Margin is measured against revenue; markup against cost.',
  faqs: [['What is the difference between margin and markup?', 'Margin is profit as a percentage of the selling price; markup is profit as a percentage of the cost price. A 25% markup equals a 20% margin.'],
         ['How do I price a product for a target margin?', 'Selling price = cost ÷ (1 − margin %). For a 20% margin on ₹800 cost, price it at ₹1,000.']]
},
{
  slug: 'house-construction-cost-calculator', cat: 'home-construction', icon: 'home-construction/house-construction-cost-calculator.png',
  title: 'House Construction Cost Calculator', h1: 'House Construction Cost Calculator',
  desc: 'Estimate house construction cost in India from built-up area and rate per sq ft, with a material, labour and other costs breakdown.',
  intro: 'A quick budget estimate for building a house, based on built-up area and local rate per sq ft.',
  fields: [
    { id: 'area', label: 'Built-up area per floor (sq ft)', value: 1200 },
    { id: 'floors', label: 'Number of floors', value: 1, step: 1 },
    { id: 'rate', label: 'Construction rate (₹ per sq ft)', value: 2000 },
    { id: 'matPct', label: 'Materials share of cost (%)', value: 60, step: 1, adv: true },
    { id: 'labPct', label: 'Labour share of cost (%)', value: 30, step: 1, adv: true }
  ],
  results: { total: 'Estimated total cost', mat: 'Materials', lab: 'Labour', other: 'Approvals & other (remaining share)' },
  compute(v, f) {
    if (![v.area, v.floors, v.rate, v.matPct, v.labPct].every(N) || v.matPct + v.labPct > 100) return null;
    const t = v.area * v.floors * v.rate;
    return { total: f.inr(t), mat: f.inr(t * v.matPct / 100), lab: f.inr(t * v.labPct / 100), other: f.inr(t * (100 - v.matPct - v.labPct) / 100) };
  },
  how: 'Total cost = area × floors × rate per sq ft. Rates vary by city, specification and finishes (roughly ₹1,500–₹3,000+ per sq ft). The material / labour / other split defaults to a 60/30/10 rule of thumb and is editable under Advanced assumptions; it is not a quote.',
  faqs: [['What is the construction cost per sq ft in India?', 'It commonly ranges from about ₹1,500 to ₹3,000 per sq ft depending on location, materials and finish quality.'],
         ['Does this include land, interiors or furniture?', 'No. This estimates the structure and basic finishing only.']]
},
{
  slug: 'paint-calculator', cat: 'home-construction', icon: 'home-construction/paint-calculator.png',
  title: 'Paint Calculator', h1: 'Paint Calculator (Litres Needed for Walls)',
  desc: 'Calculate how many litres of paint you need for a room’s walls, after deducting doors and windows, for any number of coats.',
  intro: 'Enter your room size to find out how much paint to buy.',
  fields: [
    { id: 'l', label: 'Room length (ft)', value: 12 }, { id: 'w', label: 'Room width (ft)', value: 10 }, { id: 'h', label: 'Wall height (ft)', value: 10 },
    { id: 'doors', label: 'Doors', value: 1, step: 1 }, { id: 'windows', label: 'Windows', value: 2, step: 1 },
    { id: 'coats', label: 'Coats', value: 2, step: 1 },
    { id: 'cover', label: 'Coverage (sq ft per litre per coat)', value: 100 },
    { id: 'doorA', label: 'Area of one door (sq ft)', value: 20, adv: true }, { id: 'winA', label: 'Area of one window (sq ft)', value: 15, adv: true }
  ],
  results: { area: 'Paintable wall area', litres: 'Paint required' },
  compute(v, f) {
    if (![v.l, v.w, v.h, v.doors, v.windows, v.coats, v.doorA, v.winA].every(N) || !(v.cover > 0)) return null;
    const area = Math.max(2 * (v.l + v.w) * v.h - v.doors * v.doorA - v.windows * v.winA, 0);
    return { area: f.num(area, 0) + ' sq ft', litres: f.num(Math.ceil(area * v.coats / v.cover * 10) / 10, 1) + ' litres' };
  },
  how: 'Wall area = 2 × (length + width) × height, minus the area of doors and windows (defaults 20 and 15 sq ft each, editable). Paint = area × coats ÷ coverage. Buy about 5–10% extra for touch-ups. Check the coverage printed on your paint tin.',
  faqs: [['How much area does 1 litre of paint cover?', 'Most emulsion paints cover roughly 90–120 sq ft per litre per coat, depending on the surface.'],
         ['How many coats should I apply?', 'Two coats are standard for walls; a primer coat first gives a better finish.']]
},
{
  slug: 'tile-calculator', cat: 'home-construction', icon: 'home-construction/tile-calculator.png',
  title: 'Tile Calculator', h1: 'Tile Calculator (Number of Tiles & Cost)',
  desc: 'Calculate how many floor tiles you need for a room, including wastage, and estimate the total cost.',
  intro: 'Enter your room and tile size to get the number of tiles and the cost.',
  fields: [
    { id: 'rl', label: 'Room length (ft)', value: 12 }, { id: 'rw', label: 'Room width (ft)', value: 10 },
    { id: 'tl', label: 'Tile length (inches)', value: 24 }, { id: 'tw', label: 'Tile width (inches)', value: 24 },
    { id: 'waste', label: 'Wastage allowance (%)', value: 10 },
    { id: 'price', label: 'Price per tile (₹)', value: 60 }
  ],
  results: { area: 'Room area', tiles: 'Tiles required', cost: 'Estimated tile cost' },
  compute(v, f) {
    if (![v.rl, v.rw, v.waste, v.price].every(N) || !(v.tl > 0) || !(v.tw > 0)) return null;
    const area = v.rl * v.rw, tiles = Math.ceil(area * 144 / (v.tl * v.tw) * (1 + v.waste / 100)); // 144 sq in per sq ft
    return { area: f.num(area, 1) + ' sq ft', tiles: f.num(tiles, 0), cost: f.inr(tiles * v.price) };
  },
  how: 'Tiles = room area (sq in) ÷ tile area (sq in), plus wastage for cuts and breakage (10% is typical; 15% for diagonal layouts).',
  faqs: [['How much extra tile should I buy?', 'Add 10% for straight layouts and 15% for diagonal or patterned layouts.'],
         ['Does this include adhesive or labour?', 'No, only the tiles themselves.']]
},
{
  slug: 'salary-take-home-calculator', cat: 'personal-lifestyle', icon: 'personal-lifestyle/salary-take-home-calculator.png',
  title: 'Salary / Take-home Calculator', h1: 'Salary Take-home (In-hand) Calculator – India',
  desc: 'Estimate your monthly in-hand salary from annual gross pay after PF, professional tax and income tax. Choose the new or old tax regime and edit every assumption.',
  intro: 'An indicative in-hand salary estimate. Pick a tax regime and adjust the assumptions under Advanced to match your payslip.',
  fields: [
    { id: 'gross', label: 'Annual gross salary (₹)', value: 900000 },
    { id: 'basic', label: 'Basic pay (% of gross)', value: 40, step: 1 },
    { id: 'pt', label: 'Professional tax (₹ per month)', value: 200 },
    { id: 'regime', label: 'Income tax regime', type: 'select', value: 'new', options: [['new', 'New regime (default slabs)'], ['old', 'Old regime (needs deductions below)'], ['none', 'Ignore income tax']] },
    { id: 'std', label: 'Standard deduction (₹/yr)', value: 75000, adv: true },
    { id: 'other', label: 'Other deductions from taxable income (₹/yr, e.g. 80C, HRA – mainly old regime)', value: 0, adv: true },
    { id: 'pfRate', label: 'Employee PF (% of basic)', value: 12, step: 0.1, adv: true },
    { id: 'pfCap', label: 'PF yearly cap (₹, 0 = no cap)', value: 21600, adv: true },
    { id: 'rebateLim', label: 'Tax-free taxable-income limit, Section 87A (₹, 0 = none)', value: 1200000, adv: true },
    { id: 'cess', label: 'Health & education cess (%)', value: 4, step: 0.1, adv: true }
  ],
  results: { pf: 'Employee PF (yearly)', taxable: 'Taxable income', tax: 'Income tax (yearly)', month: 'Monthly take-home', year: 'Yearly take-home' },
  compute(v, f) {
    if (![v.gross, v.basic, v.pt, v.std, v.other, v.pfRate, v.pfCap, v.rebateLim, v.cess].every(N)) return null;
    const pf0 = v.gross * v.basic / 100 * v.pfRate / 100, pf = v.pfCap > 0 ? Math.min(pf0, v.pfCap) : pf0;
    const taxable = Math.max(v.gross - v.std - v.other, 0);
    let tax = 0;
    if (v.regime !== 'none') {
      // [upper limit, rate]. New regime (FY 2025-26): 4L nil, 8L 5%, 12L 10%, 16L 15%, 20L 20%, 24L 25%, above 30%. Old regime: 2.5L nil, 5L 5%, 10L 20%, above 30%.
      const slabs = v.regime === 'old' ? [[250000, 0], [500000, .05], [1000000, .20], [Infinity, .30]]
        : [[400000, 0], [800000, .05], [1200000, .10], [1600000, .15], [2000000, .20], [2400000, .25], [Infinity, .30]];
      let prev = 0;
      for (const [lim, r] of slabs) { if (taxable > prev) tax += (Math.min(taxable, lim) - prev) * r; prev = lim; }
      if (v.rebateLim > 0) {
        if (taxable <= v.rebateLim) tax = 0;                                        // 87A rebate
        else if (v.regime === 'new') tax = Math.min(tax, taxable - v.rebateLim);   // marginal relief just above the limit
      }
      tax *= 1 + v.cess / 100;
    }
    const year = v.gross - pf - tax - v.pt * 12;
    return { pf: f.inr(pf), taxable: f.inr(taxable), tax: f.inr(tax), month: f.inr(year / 12), year: f.inr(year) };
  },
  how: 'Take-home = gross − employee PF − income tax − professional tax. Tax = slab tax on (gross − standard deduction − other deductions), nil if taxable income is within the Section 87A limit, plus cess. Slabs shown are the new regime (FY 2025-26) and the old regime; every other figure is editable under Advanced assumptions. It ignores employer-specific items (bonuses, insurance, HRA exemption rules), so your payslip will differ.',
  faqs: [['Is this exact?', 'No. It is an estimate; your payslip depends on your employer’s salary structure and your declarations.'],
         ['Which tax regime should I pick?', 'Try both. For the old regime, enter your 80C, HRA and other deductions under Advanced assumptions and set the standard deduction to ₹50,000 and the 87A limit to ₹5,00,000. Tax slabs change with each Union Budget, so verify against the latest rules.']]
},
{
  slug: 'percentage-calculator', cat: 'converters-utilities', icon: 'converters-utilities/percentage-calculator.png',
  title: 'Percentage Calculator', h1: 'Percentage Calculator',
  desc: 'Free percentage calculator: find X% of a number, what percent one number is of another, and percentage increase or decrease.',
  intro: 'Enter two numbers to see all three common percentage results at once.',
  fields: [{ id: 'a', label: 'Number A', value: 20, step: 'any' }, { id: 'b', label: 'Number B', value: 500, step: 'any' }],
  results: { r1: 'A% of B', r2: 'A is what % of B', r3: '% change from A to B' },
  compute(v, f) {
    if (!Number.isFinite(v.a) || !Number.isFinite(v.b)) return null;
    return { r1: f.num(v.a / 100 * v.b), r2: v.b !== 0 ? f.num(v.a / v.b * 100) + '%' : '–', r3: v.a !== 0 ? f.num((v.b - v.a) / Math.abs(v.a) * 100) + '%' : '–' };
  },
  how: 'A% of B = A ÷ 100 × B. A is what % of B = A ÷ B × 100. Percentage change = (B − A) ÷ |A| × 100; positive means an increase, negative a decrease.',
  faqs: [['How do I calculate a percentage increase?', 'Subtract the old value from the new value, divide by the old value and multiply by 100.'],
         ['How do I find 18% of a number?', 'Multiply the number by 0.18.']]
}
];
