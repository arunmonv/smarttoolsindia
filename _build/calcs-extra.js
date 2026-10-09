// Spare calculators not currently published (no matching icons in the icon pack). Add to calcs2.js to publish.
const N = (v) => Number.isFinite(v) && v >= 0;
module.exports = [
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
}
];
