// Calculator definitions (set 4): property, utility, GST and gold-scheme calculators. Each compute() must be self-contained: it is serialised into the page.
const N = (v) => Number.isFinite(v) && v >= 0;

module.exports = [
{
  slug: 'stamp-duty-calculator', cat: 'home-construction', title: 'Stamp Duty Calculator', h1: 'Stamp Duty & Registration Fee Calculator',
  desc: 'Free stamp duty and registration charges calculator for property in India. Defaults to Tamil Nadu rates; change the percentages for any state.',
  intro: 'Estimate the stamp duty, registration fee and total cost when you buy a property.',
  fields: [{ id: 'price', label: 'Sale price (₹)', value: 5000000 }, { id: 'guide', label: 'Government guideline value (₹)', value: 5500000 },
    { id: 'sd', label: 'Stamp duty (%)', value: 7, step: 0.05 }, { id: 'rf', label: 'Registration fee (%)', value: 4, step: 0.05 },
    { id: 'other', label: 'Other charges – transfer duty, cess, documentation (₹)', value: 0, adv: true }],
  results: { base: 'Value used for duty', sdAmt: 'Stamp duty', rfAmt: 'Registration fee', total: 'Total duty and fees', cost: 'Total property cost' },
  compute(v, f) {
    if (!(v.price > 0) || !N(v.guide) || !N(v.sd) || !N(v.rf) || !N(v.other)) return null;
    const base = Math.max(v.price, v.guide); // duty is charged on the higher of sale price and guideline value
    const sdAmt = base * v.sd / 100, rfAmt = base * v.rf / 100, total = sdAmt + rfAmt + v.other;
    return { base: f.inr(base), sdAmt: f.inr(sdAmt), rfAmt: f.inr(rfAmt), total: f.inr(total), cost: f.inr(v.price + total) };
  },
  how: 'Stamp duty and registration fee are charged as a percentage of the higher of the sale price and the government guideline value. The defaults (7% stamp duty and 4% registration) are the Tamil Nadu rates for a sale deed; rates, concessions (for example for women buyers) and extra levies differ by state and change often, so confirm with your Sub-Registrar office or the state registration portal.',
  faqs: [['Why use the guideline value?', 'Most states do not allow registration below the guideline (circle) rate, so duty is calculated on whichever is higher.'], ['Are the rates the same in every state?', 'No. Rates differ by state, property type and buyer category. Change the two percentage fields to match your state.']]
},
{
  slug: 'land-area-converter', cat: 'converters-utilities', title: 'Land Area Converter', h1: 'Land Area Converter (Sq Ft, Cent, Ground, Acre)',
  desc: 'Free land area converter for India: sq ft, sq m, sq yard, cent, ground, guntha, acre and hectare in one go.',
  intro: 'Enter an area in any unit and see it in all the common Indian land units.',
  fields: [{ id: 'val', label: 'Area', value: 1 }, { id: 'unit', label: 'Unit', type: 'select', value: 'cent', options: [['sqft', 'Square feet'], ['sqm', 'Square metres'], ['sqyd', 'Square yards'], ['cent', 'Cent'], ['ground', 'Ground'], ['guntha', 'Guntha'], ['acre', 'Acre'], ['hectare', 'Hectare']] }],
  results: { sqft: 'Square feet', sqm: 'Square metres', sqyd: 'Square yards', cent: 'Cent', ground: 'Ground', guntha: 'Guntha', acre: 'Acre', hectare: 'Hectare' },
  compute(v, f) {
    if (!(v.val >= 0) || !Number.isFinite(v.val)) return null;
    const sq = { sqft: 1, sqm: 10.7639, sqyd: 9, cent: 435.6, ground: 2400, guntha: 1089, acre: 43560, hectare: 107639.1 }; // square feet per unit
    const ft = v.val * sq[v.unit], out = {};
    Object.keys(sq).forEach((k) => { out[k] = f.num(ft / sq[k], 4); });
    return out;
  },
  how: 'Every value is converted through square feet: 1 cent = 435.6 sq ft, 1 ground = 2,400 sq ft, 1 guntha = 1,089 sq ft, 1 acre = 43,560 sq ft (100 cents), 1 sq yard = 9 sq ft, 1 sq m = 10.7639 sq ft and 1 hectare = 107,639 sq ft. Local units such as kani, kuzhi or bigha vary by region, so they are not included.',
  faqs: [['How many sq ft is one cent?', 'One cent is 435.6 sq ft, and 100 cents make one acre.'], ['How many sq ft is one ground?', 'One ground is 2,400 sq ft in Tamil Nadu and Chennai.']]
},
{
  slug: 'brick-calculator', cat: 'home-construction', title: 'Brick Calculator', h1: 'Brick Calculator (Number of Bricks for a Wall)',
  desc: 'Calculate how many bricks you need for a wall, deducting doors and windows, with wastage and total brick cost.',
  intro: 'Find the number of bricks and cost for a wall of any size.',
  fields: [{ id: 'l', label: 'Wall length (ft)', value: 40 }, { id: 'h', label: 'Wall height (ft)', value: 10 },
    { id: 'thk', label: 'Wall thickness', type: 'select', value: 4.5, options: [[4.5, '4.5 inch (half brick)'], [9, '9 inch (full brick)']] },
    { id: 'open', label: 'Doors & windows area to deduct (sq ft)', value: 40 }, { id: 'waste', label: 'Wastage (%)', value: 5 }, { id: 'price', label: 'Price per brick (₹)', value: 8 }],
  results: { area: 'Net wall area', bricks: 'Bricks required', cost: 'Estimated brick cost' },
  compute(v, f) {
    if (![v.l, v.h, v.open, v.waste, v.price].every(N)) return null;
    const area = Math.max(v.l * v.h - v.open, 0), vol = area * 0.092903 * v.thk * 0.0254;
    const bricks = Math.ceil(vol * 500 * (1 + v.waste / 100)); // 500 standard bricks (with mortar) per m3
    return { area: f.num(area, 0) + ' sq ft', bricks: f.num(bricks, 0), cost: f.inr(bricks * v.price) };
  },
  how: 'Wall volume × 500 bricks per m³ (a standard 190×90×90 mm brick with mortar joints). Add wastage for breakage. Mortar and labour are not included.',
  faqs: [['How many bricks per square foot?', 'About 5 to 5.5 bricks per sq ft for a 4.5 inch wall.'], ['How much mortar is needed?', 'Roughly 25–30% of the wall volume for a 1:6 cement mortar; use the cement calculator for quantities.']]
},
{
  slug: 'steel-calculator', cat: 'home-construction', title: 'Steel Calculator', h1: 'TMT Steel Weight Calculator',
  desc: 'Calculate the weight and cost of TMT steel bars by diameter, length and quantity using the d²/162 formula.',
  intro: 'Find the weight and cost of reinforcement bars.',
  fields: [{ id: 'd', label: 'Bar diameter', type: 'select', value: 12, options: [[8, '8 mm'], [10, '10 mm'], [12, '12 mm'], [16, '16 mm'], [20, '20 mm'], [25, '25 mm']] },
    { id: 'len', label: 'Length of each bar (m)', value: 12 }, { id: 'qty', label: 'Number of bars', value: 100, step: 1 }, { id: 'price', label: 'Price per kg (₹)', value: 65 }],
  results: { perm: 'Weight per metre', bar: 'Weight per bar', total: 'Total weight', cost: 'Estimated cost' },
  compute(v, f) {
    if (![v.d, v.len, v.qty, v.price].every(N)) return null;
    const perm = v.d * v.d / 162; // kg per metre
    return { perm: f.num(perm, 3) + ' kg', bar: f.num(perm * v.len, 2) + ' kg', total: f.num(perm * v.len * v.qty, 1) + ' kg', cost: f.inr(perm * v.len * v.qty * v.price) };
  },
  how: 'Weight per metre = d² ÷ 162 (d in mm), derived from steel’s density of 7850 kg/m³. Standard TMT bars come in 12 m lengths. Rates change daily, so use your supplier’s current price.',
  faqs: [['Why divide by 162?', 'The formula comes from the cross-sectional area of a round bar multiplied by steel density, simplified for diameters in millimetres.'], ['Which TMT grade is common?', 'Fe500 and Fe500D are the most common grades for houses in India.']]
},
{
  slug: 'eb-bill-calculator', cat: 'personal-lifestyle', title: 'EB Bill Calculator (TNEB)', h1: 'EB Bill Calculator (Tamil Nadu Electricity Bill)',
  desc: 'Estimate your Tamil Nadu (TNEB / TNPDCL) domestic electricity bill from units consumed in the two-month billing cycle, with free units and editable slab rates.',
  intro: 'Estimate your two-monthly domestic EB bill from the units shown on your meter.',
  fields: [{ id: 'units', label: 'Units consumed in the bill (2 months)', value: 400 }, { id: 'fixed', label: 'Fixed charge per bill (₹)', value: 0, adv: true },
    { id: 'r0', label: 'Rate: first 100 units, only above 500 units (₹/unit)', value: 2.25, step: 0.01, adv: true },
    { id: 'r1', label: 'Rate: 101–200 units (₹/unit)', value: 2.35, step: 0.01, adv: true }, { id: 'r2', label: 'Rate: 201–400 units (₹/unit)', value: 4.7, step: 0.01, adv: true },
    { id: 'r3', label: 'Rate: 401–500 units (₹/unit)', value: 6.3, step: 0.01, adv: true }, { id: 'r4', label: 'Rate: 501–600 units (₹/unit)', value: 8.4, step: 0.01, adv: true },
    { id: 'r5', label: 'Rate: 601–800 units (₹/unit)', value: 9.45, step: 0.01, adv: true }, { id: 'r6', label: 'Rate: 801–1000 units (₹/unit)', value: 10.5, step: 0.01, adv: true },
    { id: 'r7', label: 'Rate: above 1000 units (₹/unit)', value: 11.55, step: 0.01, adv: true }],
  results: { paid: 'Chargeable units', bill: 'Estimated bill', perUnit: 'Average cost per unit' },
  compute(v, f) {
    if (![v.units, v.fixed, v.r0, v.r1, v.r2, v.r3, v.r4, v.r5, v.r6, v.r7].every(N)) return null;
    const within = v.units <= 500; // the first 100 units are free only when consumption is within 500 units
    const edges = [100, 200, 400, 500, 600, 800, 1000, Infinity], rates = [within ? 0 : v.r0, v.r1, v.r2, v.r3, v.r4, v.r5, v.r6, v.r7];
    let lo = 0, bill = 0;
    edges.forEach((hi, i) => { if (v.units > lo) bill += (Math.min(v.units, hi) - lo) * rates[i]; lo = hi; });
    const freeUnits = within ? Math.min(100, v.units) : 0;
    bill += v.fixed;
    return { paid: f.num(v.units - freeUnits, 0) + ' of ' + f.num(v.units, 0), bill: f.inr(bill), perUnit: v.units > 0 ? '₹' + f.num(bill / v.units, 2) : '–' };
  },
  how: 'The bill is built slab by slab, each slab’s units multiplied by its rate. For consumption up to 500 units, the first 100 units are free for domestic consumers; above 500 units the free units no longer apply. Slab rates are revised periodically, and the defaults are sample rates, so compare with your latest bill and edit them under Advanced assumptions. Fixed charges, other levies and subsidies are not included unless you enter them.',
  faqs: [['How often is the EB bill generated?', 'Domestic consumers in Tamil Nadu are billed every two months, so enter the units for the full two-month cycle.'], ['Why does my bill differ from this estimate?', 'Slab rates, free-unit rules, fixed charges and adjustment charges change from time to time. Check your latest bill and edit the rates under Advanced assumptions.']]
},
{
  slug: 'gst-reverse-calculator', cat: 'business', title: 'GST Reverse Calculator', h1: 'GST Reverse Calculator (Remove GST from Price)',
  desc: 'Free GST reverse calculator for India. Enter a GST-inclusive price to find the original price, GST amount, CGST and SGST.',
  intro: 'Found a GST-inclusive price? Work backwards to the base price and the tax amount.',
  fields: [{ id: 'amt', label: 'GST-inclusive price (₹)', value: 11800 }, { id: 'rate', label: 'GST rate (%)', value: 18, step: 'any', list: [0, 3, 5, 12, 18, 28, 40] }],
  results: { base: 'Price before GST', gst: 'Total GST', cgst: 'CGST (half)', sgst: 'SGST (half)' },
  compute(v, f) {
    if (!(v.amt > 0) || !N(v.rate)) return null;
    const base = v.amt / (1 + v.rate / 100), gst = v.amt - base;
    return { base: f.inr(base), gst: f.inr(gst), cgst: f.inr(gst / 2), sgst: f.inr(gst / 2) };
  },
  how: 'Price before GST = inclusive price ÷ (1 + GST rate ÷ 100). GST = inclusive price − price before GST. For sales within a state the tax splits equally into CGST and SGST; for inter-state sales the whole amount is IGST. Check the GST rate that applies to your product or service.',
  faqs: [['Why not just subtract 18%?', 'GST is added on the base price, so it is 18% of the base price, not of the final price. Subtracting 18% of the final price removes too much.'], ['What are the current GST rates?', 'Common slabs are 0%, 5% and 18%, with 40% on a few items; 3% applies to gold and silver. Confirm the rate for your item with the GST rate schedule.']]
},
{
  slug: 'gold-savings-scheme-calculator', cat: 'finance', title: 'Gold Savings Scheme Calculator', h1: 'Gold Savings Scheme (Jewellery Chit) Calculator',
  desc: 'Free jewellery gold savings scheme calculator for India. See the bonus, total value, gold weight and effective yearly return of an 11+1 monthly scheme.',
  intro: 'Check how much a jeweller’s monthly savings scheme really gives you.',
  fields: [{ id: 'm', label: 'Monthly instalment (₹)', value: 5000 }, { id: 'n', label: 'Months you pay', value: 11, step: 1 }, { id: 'b', label: 'Bonus instalments added by the jeweller', value: 1, step: 1 },
    { id: 'rate', label: 'Gold rate at redemption (₹ per gram)', value: 7500 }],
  results: { paid: 'Total you pay', value: 'Redemption value', gold: 'Gold you can buy', bonus: 'Bonus gain', irr: 'Effective yearly return' },
  compute(v, f) {
    if (!(v.m > 0) || !(v.n >= 1) || !N(v.b) || !(v.rate > 0)) return null;
    const n = Math.round(v.n), paid = v.m * n, value = v.m * (n + v.b);
    // monthly rate r such that instalments paid at the start of each month grow to the redemption value n months later
    let lo = 0, hi = 1;
    for (let i = 0; i < 60; i++) {
      const r = (lo + hi) / 2; let fv = 0;
      for (let k = 0; k < n; k++) fv += v.m * Math.pow(1 + r, n - k);
      if (fv < value) lo = r; else hi = r;
    }
    return { paid: f.inr(paid), value: f.inr(value), gold: f.num(value / v.rate, 3) + ' g', bonus: f.inr(value - paid), irr: f.num((Math.pow(1 + lo, 12) - 1) * 100, 1) + '% a year' };
  },
  how: 'In an 11+1 style scheme you pay for n months and the jeweller adds bonus instalments, so you redeem (n + bonus) × instalment against jewellery. The effective return treats each instalment as paid at the start of a month and finds the monthly rate that grows them to the redemption value. Schemes usually apply only to jewellery purchases at the shop, may exclude making charges or have minimum purchase terms, so read the scheme rules and check the jeweller’s reputation.',
  faqs: [['Is a jewellery chit scheme safe?', 'It depends on the jeweller. Prefer established shops, get a written scheme card and receipts, and check what happens if you stop paying.'], ['Are making charges and GST included?', 'Usually not. The redemption value is a credit against the bill, and making charges and GST on the jewellery are extra unless the scheme says otherwise.']]
}
];
