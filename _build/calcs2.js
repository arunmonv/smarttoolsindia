// Calculator definitions (set 2). Each compute() must be self-contained: it is serialised into the page.
const N = (v) => Number.isFinite(v) && v >= 0;

module.exports = [
// ---------------- FINANCE ----------------
{
  slug: 'emi-calculator', cat: 'finance', title: 'EMI Calculator', h1: 'EMI Calculator',
  desc: 'Free EMI calculator for India. Enter loan amount, interest rate and tenure to get your monthly EMI, total interest and total payment instantly.',
  intro: 'Work out your monthly loan instalment, total interest and total repayment for home, car or personal loans.',
  fields: [{ id: 'amount', label: 'Loan amount (₹)', value: 1000000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 9, step: 0.01 }, { id: 'years', label: 'Tenure (years)', value: 10, step: 0.5 }],
  results: { emi: 'Monthly EMI', interest: 'Total interest', total: 'Total payment' },
  compute(v, f) {
    if (!(v.amount > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const r = v.rate / 1200, n = v.years * 12;
    const emi = r === 0 ? v.amount / n : v.amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return { emi: f.inr(emi), interest: f.inr(emi * n - v.amount), total: f.inr(emi * n) };
  },
  how: 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1), where P is the loan amount, r the monthly interest rate (annual rate ÷ 12 ÷ 100) and n the number of monthly instalments.',
  faqs: [['How is EMI calculated?', 'EMI = P × r × (1+r)^n ÷ ((1+r)^n − 1), based on loan amount, monthly interest rate and number of months.'], ['Does a longer tenure reduce EMI?', 'Yes, a longer tenure lowers the monthly EMI but increases the total interest you pay.']]
},
{
  slug: 'personal-loan-calculator', cat: 'finance', title: 'Personal Loan Calculator', h1: 'Personal Loan EMI Calculator',
  desc: 'Calculate personal loan EMI, total interest and the processing fee impact. Free personal loan calculator for India.',
  intro: 'See your personal loan EMI and the true cost including the processing fee.',
  fields: [{ id: 'amount', label: 'Loan amount (₹)', value: 500000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 12, step: 0.01 }, { id: 'years', label: 'Tenure (years)', value: 3, step: 0.5 }, { id: 'feep', label: 'Processing fee (% of loan)', value: 2, step: 0.1 }, { id: 'gstFee', label: 'GST on processing fee (%)', value: 18, step: 0.1, adv: true }],
  results: { emi: 'Monthly EMI', interest: 'Total interest', fee: 'Processing fee (incl. GST)', total: 'Total cost of loan' },
  compute(v, f) {
    if (!(v.amount > 0) || !(v.years > 0) || !N(v.rate) || !N(v.feep) || !N(v.gstFee)) return null;
    const r = v.rate / 1200, n = v.years * 12;
    const emi = r === 0 ? v.amount / n : v.amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const fee = v.amount * v.feep / 100 * (1 + v.gstFee / 100);
    return { emi: f.inr(emi), interest: f.inr(emi * n - v.amount), fee: f.inr(fee), total: f.inr(emi * n + fee) };
  },
  how: 'EMI uses the standard reducing-balance formula. Processing fees are charged on the loan amount plus GST (default 18%, editable). Personal loans are unsecured, so rates are usually higher than home or car loans.',
  faqs: [['What affects my personal loan interest rate?', 'Your credit score, income, employer category and the lender’s policy.'], ['Can I prepay a personal loan?', 'Usually yes, but some lenders charge a foreclosure fee. Check your loan agreement.']]
},
{
  slug: 'home-loan-calculator', cat: 'finance', title: 'Home Loan Calculator', h1: 'Home Loan EMI Calculator',
  desc: 'Calculate home loan EMI, total interest and total payment. Includes the down payment on the property price. Free for India.',
  intro: 'Plan your home loan: enter the property price, down payment, rate and tenure.',
  fields: [{ id: 'price', label: 'Property price (₹)', value: 5000000 }, { id: 'down', label: 'Down payment (%)', value: 20, step: 1 }, { id: 'rate', label: 'Interest rate (% per year)', value: 8.75, step: 0.01 }, { id: 'years', label: 'Tenure (years)', value: 20, step: 1 }],
  results: { loan: 'Loan amount', emi: 'Monthly EMI', interest: 'Total interest', total: 'Total payment (incl. down payment)' },
  compute(v, f) {
    if (!(v.price > 0) || !(v.years > 0) || !N(v.rate) || !N(v.down) || v.down >= 100) return null;
    const P = v.price * (1 - v.down / 100), r = v.rate / 1200, n = v.years * 12;
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return { loan: f.inr(P), emi: f.inr(emi), interest: f.inr(emi * n - P), total: f.inr(emi * n + v.price - P) };
  },
  how: 'Loan = price × (1 − down payment %). EMI uses the reducing-balance formula. Under the old tax regime, principal repayment can qualify under Section 80C (up to ₹1.5 lakh) and interest under Section 24(b) (up to ₹2 lakh for a self-occupied home). Tax rules change, so verify the current limits.',
  faqs: [['How much down payment is needed for a home loan?', 'Lenders typically finance up to 75–90% of the property value, so you need to pay at least 10–25% yourself.'], ['Should I choose a longer tenure?', 'A longer tenure lowers the EMI but increases total interest. Choose the shortest tenure you can comfortably afford.']]
},
{
  slug: 'car-bike-loan-calculator', cat: 'finance', title: 'Car & Bike Loan Calculator', h1: 'Car & Bike Loan EMI Calculator',
  desc: 'Calculate car or two-wheeler loan EMI from vehicle price, down payment, interest rate and tenure. Free for India.',
  intro: 'Check the EMI and total cost of a car or bike loan before you visit the showroom.',
  fields: [{ id: 'price', label: 'On-road price (₹)', value: 800000 }, { id: 'down', label: 'Down payment (%)', value: 20, step: 1 }, { id: 'rate', label: 'Interest rate (% per year)', value: 9.5, step: 0.01 }, { id: 'years', label: 'Tenure (years)', value: 5, step: 0.5 }],
  results: { loan: 'Loan amount', emi: 'Monthly EMI', interest: 'Total interest', total: 'Total cost (incl. down payment)' },
  compute(v, f) {
    if (!(v.price > 0) || !(v.years > 0) || !N(v.rate) || !N(v.down) || v.down >= 100) return null;
    const P = v.price * (1 - v.down / 100), r = v.rate / 1200, n = v.years * 12;
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return { loan: f.inr(P), emi: f.inr(emi), interest: f.inr(emi * n - P), total: f.inr(emi * n + v.price - P) };
  },
  how: 'Loan = on-road price × (1 − down payment %). EMI uses the reducing-balance formula. Vehicle loans are usually 3–7 years; two-wheeler loans often have higher rates.',
  faqs: [['What is on-road price?', 'Ex-showroom price plus registration, road tax, insurance and other charges.'], ['Is it better to pay a larger down payment?', 'Yes. A larger down payment lowers the loan, EMI and total interest.']]
},
{
  slug: 'savings-calculator', cat: 'finance', title: 'Savings Calculator', h1: 'Savings & SIP Maturity Calculator',
  desc: 'Calculate how much your monthly savings or SIP will grow to with compound interest. Free savings calculator for India.',
  intro: 'See how regular monthly savings, plus an optional lump sum, grow over time.',
  fields: [{ id: 'monthly', label: 'Monthly savings (₹)', value: 10000 }, { id: 'lump', label: 'Initial lump sum (₹)', value: 0 }, { id: 'rate', label: 'Expected return (% per year)', value: 8, step: 0.1 }, { id: 'years', label: 'Period (years)', value: 10, step: 0.5 }, { id: 'timing', label: 'Deposit timing', type: 'select', value: 'start', options: [['start', 'Start of each month'], ['end', 'End of each month']], adv: true }],
  results: { invested: 'Total invested', gain: 'Estimated returns', maturity: 'Maturity value' },
  compute(v, f) {
    if (![v.monthly, v.lump, v.rate, v.years].every(N)) return null;
    const r = v.rate / 1200, n = v.years * 12;
    const fv = v.lump * Math.pow(1 + r, n) + (r === 0 ? v.monthly * n : v.monthly * (Math.pow(1 + r, n) - 1) / r * (v.timing === 'end' ? 1 : 1 + r)); // annuity-due unless deposits fall at month end
    const inv = v.lump + v.monthly * n;
    return { invested: f.inr(inv), gain: f.inr(fv - inv), maturity: f.inr(fv) };
  },
  how: 'Maturity = lump sum × (1+r)^n + monthly × ((1+r)^n − 1) ÷ r × (1+r), with r the monthly rate and n the number of months. Returns from market-linked investments are not guaranteed.',
  faqs: [['Is the return guaranteed?', 'No. The figure assumes a constant return; actual market returns vary.'], ['Why does starting early matter?', 'Compounding works on earlier gains, so the same monthly amount grows far more over a longer period.']]
},
{
  slug: 'loan-comparison-calculator', cat: 'finance', title: 'Loan Comparison Calculator', h1: 'Loan Comparison Calculator',
  desc: 'Compare two loans side by side: EMI, total interest and total payment for different interest rates and tenures.',
  intro: 'Compare two loan offers for the same amount to see which costs less overall.',
  fields: [{ id: 'amount', label: 'Loan amount (₹)', value: 2000000 }, { id: 'rateA', label: 'Loan A rate (% per year)', value: 8.5, step: 0.01 }, { id: 'yearsA', label: 'Loan A tenure (years)', value: 20, step: 0.5 }, { id: 'rateB', label: 'Loan B rate (% per year)', value: 9.25, step: 0.01 }, { id: 'yearsB', label: 'Loan B tenure (years)', value: 15, step: 0.5 }],
  results: { emiA: 'Loan A – monthly EMI', intA: 'Loan A – total interest', emiB: 'Loan B – monthly EMI', intB: 'Loan B – total interest', diff: 'Result' },
  compute(v, f) {
    if (!(v.amount > 0) || !(v.yearsA > 0) || !(v.yearsB > 0) || !N(v.rateA) || !N(v.rateB)) return null;
    const calc = (rate, years) => { const r = rate / 1200, n = years * 12; const e = r === 0 ? v.amount / n : v.amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1); return [e, e * n - v.amount]; };
    const a = calc(v.rateA, v.yearsA), b = calc(v.rateB, v.yearsB), d = a[1] - b[1];
    return { emiA: f.inr(a[0]), intA: f.inr(a[1]), emiB: f.inr(b[0]), intB: f.inr(b[1]), diff: Math.abs(d) < 1 ? 'Same total interest' : (d > 0 ? 'Loan B saves ' : 'Loan A saves ') + f.inr(Math.abs(d)) + ' in interest' };
  },
  how: 'Each loan’s EMI uses the reducing-balance formula. The cheaper loan overall is the one with lower total interest, though a lower EMI may suit your monthly budget better.',
  faqs: [['Is a lower EMI always better?', 'Not necessarily. A longer tenure lowers the EMI but usually costs more in total interest.'], ['What else should I compare?', 'Processing fees, prepayment charges and whether the rate is fixed or floating.']]
},
// ---------------- HOME & CONSTRUCTION ----------------
{
  slug: 'cement-calculator', cat: 'home-construction', title: 'Cement Calculator', h1: 'Cement, Sand & Aggregate Calculator',
  desc: 'Calculate cement bags, sand and aggregate needed for a concrete slab or floor for M10, M15, M20 and M25 mixes.',
  intro: 'Estimate the cement, sand and aggregate for a slab, floor or foundation.',
  fields: [{ id: 'l', label: 'Length (ft)', value: 20 }, { id: 'w', label: 'Width (ft)', value: 15 }, { id: 't', label: 'Thickness (inches)', value: 5 },
    { id: 'mix', label: 'Concrete grade (cement : sand : aggregate)', type: 'select', value: '1,1.5,3', options: [['1,3,6', 'M10 (1 : 3 : 6)'], ['1,2,4', 'M15 (1 : 2 : 4)'], ['1,1.5,3', 'M20 (1 : 1.5 : 3)'], ['1,1,2', 'M25 (1 : 1 : 2)']] },
    { id: 'dry', label: 'Dry volume factor', value: 1.54, step: 0.01, adv: true }, { id: 'bag', label: 'Volume of one cement bag (m³)', value: 0.035, step: 0.001, adv: true }],
  results: { vol: 'Concrete volume', bags: 'Cement (50 kg bags)', sand: 'Sand', agg: 'Aggregate' },
  compute(v, f) {
    if (![v.l, v.w, v.t].every(N) || !(v.dry > 0) || !(v.bag > 0)) return null;
    const vol = v.l * v.w * (v.t / 12) * 0.0283168; // cubic feet to m3
    const p = v.mix.split(',').map(Number), sum = p[0] + p[1] + p[2], dry = vol * v.dry; // dry volume factor
    return { vol: f.num(vol, 2) + ' m³', bags: f.num(Math.ceil(dry * p[0] / sum / v.bag), 0) + ' bags', sand: f.num(dry * p[1] / sum * 35.3147, 1) + ' cft', agg: f.num(dry * p[2] / sum * 35.3147, 1) + ' cft' };
  },
  how: 'Wet volume = length × width × thickness. Dry volume = wet volume × a dry-volume factor (default 1.54). Each material = dry volume × its share of the mix ratio. One 50 kg cement bag is about 0.035 m³ (both values are editable under Advanced assumptions). Add 5–10% for wastage.',
  faqs: [['Which concrete grade for a house slab?', 'M20 is the common choice for residential slabs and beams; M15 for plain floors and M25 for heavier loads.'], ['Does this include steel?', 'No. Use the steel calculator for reinforcement weight.']]
},
{
  slug: 'concrete-calculator', cat: 'home-construction', title: 'Concrete Calculator', h1: 'Concrete Volume & Cost Calculator',
  desc: 'Calculate the concrete volume in cubic metres and cubic feet for a slab, footing or floor, plus ready-mix cost with wastage.',
  intro: 'Find how much concrete to order for a slab, footing or floor.',
  fields: [{ id: 'l', label: 'Length (ft)', value: 20 }, { id: 'w', label: 'Width (ft)', value: 15 }, { id: 't', label: 'Thickness (inches)', value: 5 }, { id: 'waste', label: 'Wastage (%)', value: 5 }, { id: 'rate', label: 'Ready-mix rate (₹ per m³)', value: 6000 }],
  results: { cft: 'Volume', m3: 'Volume (cubic metres)', order: 'Order quantity (with wastage)', cost: 'Estimated ready-mix cost' },
  compute(v, f) {
    if (![v.l, v.w, v.t, v.waste, v.rate].every(N)) return null;
    const cft = v.l * v.w * v.t / 12, m3 = cft * 0.0283168, order = m3 * (1 + v.waste / 100);
    return { cft: f.num(cft, 1) + ' cft', m3: f.num(m3, 2) + ' m³', order: f.num(order, 2) + ' m³', cost: f.inr(order * v.rate) };
  },
  how: 'Volume = length × width × thickness. Order quantity adds a wastage allowance for spillage and uneven sub-base. One cubic metre equals about 35.31 cubic feet. For the cement, sand and aggregate needed to mix it yourself, use the cement calculator.',
  faqs: [['How much extra concrete should I order?', 'Add 5–10% to cover spillage and variations in the sub-base.'], ['What is ready-mix concrete?', 'Concrete mixed at a plant and delivered by transit mixer, priced per cubic metre by grade.']]
},
{
  slug: 'flooring-calculator', cat: 'home-construction', title: 'Flooring Calculator', h1: 'Flooring Cost Calculator',
  desc: 'Estimate flooring cost for a room including wastage, material rate per sq ft and labour charges.',
  intro: 'Get a quick flooring budget for marble, granite, vitrified tiles, wood or any other material.',
  fields: [{ id: 'l', label: 'Room length (ft)', value: 14 }, { id: 'w', label: 'Room width (ft)', value: 12 }, { id: 'waste', label: 'Wastage (%)', value: 10 }, { id: 'rate', label: 'Material rate (₹ per sq ft)', value: 80 }, { id: 'labour', label: 'Labour (₹ per sq ft)', value: 25 }],
  results: { area: 'Floor area', buy: 'Material to buy (with wastage)', mat: 'Material cost', lab: 'Labour cost', total: 'Total flooring cost' },
  compute(v, f) {
    if (![v.l, v.w, v.waste, v.rate, v.labour].every(N)) return null;
    const area = v.l * v.w, buy = area * (1 + v.waste / 100);
    return { area: f.num(area, 1) + ' sq ft', buy: f.num(buy, 1) + ' sq ft', mat: f.inr(buy * v.rate), lab: f.inr(area * v.labour), total: f.inr(buy * v.rate + area * v.labour) };
  },
  how: 'Material to buy = area × (1 + wastage %). Material cost uses the buy quantity; labour is charged on the actual floor area.',
  faqs: [['How much wastage should I allow?', '5–10% for straight layouts; up to 15% for diagonal or patterned layouts.'], ['Are skirting and polishing included?', 'No, add them separately.']]
},
{
  slug: 'renovation-cost-calculator', cat: 'home-construction', title: 'Renovation Cost Calculator', h1: 'Home Renovation Cost Calculator',
  desc: 'Estimate home renovation cost in India by area and scope of work, with a contingency allowance.',
  intro: 'Get a quick budget for repainting, repairs or a full remodel.',
  fields: [{ id: 'area', label: 'Area to renovate (sq ft)', value: 1000 }, { id: 'rate', label: 'Renovation rate (₹ per sq ft)', value: 800, step: 'any', list: [400, 800, 1500] }, { id: 'cont', label: 'Contingency (%)', value: 10 }],
  results: { base: 'Base estimate', buffer: 'Contingency', total: 'Total renovation budget' },
  compute(v, f) {
    if (![v.area, v.rate, v.cont].every(N)) return null;
    const base = v.area * v.rate, buf = base * v.cont / 100;
    return { base: f.inr(base), buffer: f.inr(buf), total: f.inr(base + buf) };
  },
  how: 'Base estimate = area × your rate per sq ft (typically about ₹400 for light work such as painting, ₹800 for standard work, ₹1,500 or more for a full remodel). Contingency covers surprises such as hidden damage. The per-sq-ft rates are rough averages; get quotes from local contractors.',
  faqs: [['Why keep a contingency?', 'Renovations often uncover hidden issues such as damp or wiring problems, so 10–15% extra is prudent.'], ['Are furniture and appliances included?', 'No, only the renovation work.']]
},
// ---------------- BUSINESS ----------------
{
  slug: 'markup-calculator', cat: 'business', title: 'Markup Calculator', h1: 'Markup Calculator',
  desc: 'Calculate selling price, profit and margin from cost price and markup percentage. Free business calculator for India.',
  intro: 'Set your selling price by adding a markup to your cost.',
  fields: [{ id: 'cost', label: 'Cost price (₹)', value: 800 }, { id: 'mk', label: 'Markup (%)', value: 25, step: 0.1 }],
  results: { price: 'Selling price', profit: 'Profit', margin: 'Profit margin' },
  compute(v, f) {
    if (!(v.cost > 0) || !N(v.mk)) return null;
    const price = v.cost * (1 + v.mk / 100);
    return { price: f.inr(price), profit: f.inr(price - v.cost), margin: f.num((price - v.cost) / price * 100) + '%' };
  },
  how: 'Selling price = cost × (1 + markup ÷ 100). Margin = profit ÷ selling price × 100. A 25% markup gives a 20% margin.',
  faqs: [['Markup vs margin?', 'Markup is profit over cost; margin is profit over selling price. Margin is always lower than markup for the same profit.'], ['Does this include GST?', 'No. Add GST separately using the GST calculator.']]
},
{
  slug: 'discount-calculator', cat: 'business', title: 'Discount Calculator', h1: 'Discount Calculator',
  desc: 'Calculate the final price after a discount, including an additional second discount. See how much you save.',
  intro: 'Find the sale price after one or two successive discounts.',
  fields: [{ id: 'price', label: 'Original price (₹)', value: 2000 }, { id: 'd1', label: 'Discount (%)', value: 20, step: 0.1 }, { id: 'd2', label: 'Additional discount (%)', value: 0, step: 0.1 }],
  results: { final: 'Final price', save: 'You save', eff: 'Effective discount' },
  compute(v, f) {
    if (![v.price, v.d1, v.d2].every(N) || v.d1 > 100 || v.d2 > 100) return null;
    const fin = v.price * (1 - v.d1 / 100) * (1 - v.d2 / 100);
    return { final: f.inr(fin), save: f.inr(v.price - fin), eff: f.num(v.price > 0 ? (v.price - fin) / v.price * 100 : 0) + '%' };
  },
  how: 'Final price = price × (1 − d1 ÷ 100) × (1 − d2 ÷ 100). Two discounts are applied one after the other, so 20% + 10% is a 28% total discount, not 30%.',
  faqs: [['Why is 20% + 10% not 30%?', 'The second discount applies to the already discounted price.'], ['How do I find the original price?', 'Divide the sale price by (1 − discount ÷ 100).']]
},
{
  slug: 'invoice-generator', cat: 'business', title: 'Invoice Calculator', h1: 'Invoice Total Calculator (with GST)',
  desc: 'Calculate invoice subtotal, discount, GST and grand total from quantity and unit price. Free GST invoice calculator for India.',
  intro: 'Work out the amounts for a GST invoice line, then print or save the page for your records.',
  fields: [{ id: 'qty', label: 'Quantity', value: 10, step: 'any' }, { id: 'price', label: 'Unit price (₹)', value: 500 }, { id: 'discp', label: 'Discount (%)', value: 5, step: 0.1 }, { id: 'gstp', label: 'GST rate (%)', value: 18, step: 'any', list: [0, 5, 12, 18, 28] }],
  results: { sub: 'Subtotal', disc: 'Discount', taxable: 'Taxable value', gst: 'GST amount', total: 'Invoice total' },
  compute(v, f) {
    if (![v.qty, v.price, v.discp, v.gstp].every(N) || v.discp > 100) return null;
    const sub = v.qty * v.price, disc = sub * v.discp / 100, tax = sub - disc, gst = tax * v.gstp / 100;
    return { sub: f.inr(sub), disc: f.inr(disc), taxable: f.inr(tax), gst: f.inr(gst), total: f.inr(tax + gst) };
  },
  how: 'Taxable value = quantity × unit price − discount. GST = taxable value × rate. Invoice total = taxable value + GST. This tool calculates the amounts only; it does not create a legal tax invoice.',
  faqs: [['What must a GST invoice contain?', 'Supplier and buyer details, GSTIN, invoice number and date, HSN/SAC codes, taxable value, GST rate and amount.'], ['Is the discount before GST?', 'Yes. GST is charged on the value after a discount shown on the invoice.']]
},
{
  slug: 'break-even-calculator', cat: 'business', title: 'Break-even Calculator', h1: 'Break-even Point Calculator',
  desc: 'Calculate the break-even point in units and revenue from fixed costs, selling price and variable cost per unit.',
  intro: 'Find how many units you must sell to cover all your costs.',
  fields: [{ id: 'fixed', label: 'Total fixed costs (₹)', value: 100000 }, { id: 'price', label: 'Selling price per unit (₹)', value: 500 }, { id: 'vc', label: 'Variable cost per unit (₹)', value: 300 }],
  results: { cm: 'Contribution per unit', units: 'Break-even units', rev: 'Break-even revenue' },
  compute(v, f) {
    if (![v.fixed, v.price, v.vc].every(N) || v.price <= v.vc) return null;
    const cm = v.price - v.vc, units = Math.ceil(v.fixed / cm);
    return { cm: f.inr(cm), units: f.num(units, 0) + ' units', rev: f.inr(units * v.price) };
  },
  how: 'Break-even units = fixed costs ÷ (selling price − variable cost per unit). Selling price must exceed variable cost, otherwise you never break even.',
  faqs: [['What are fixed costs?', 'Costs that do not change with sales volume, such as rent, salaries and loan EMIs.'], ['How can I lower my break-even point?', 'Cut fixed costs, reduce variable costs or raise your selling price.']]
},
{
  slug: 'roi-calculator', cat: 'business', title: 'ROI Calculator', h1: 'ROI & CAGR Calculator',
  desc: 'Calculate return on investment (ROI), net profit and annualised return (CAGR) for any investment.',
  intro: 'Measure how well an investment performed in total and per year.',
  fields: [{ id: 'inv', label: 'Amount invested (₹)', value: 100000 }, { id: 'fin', label: 'Final value (₹)', value: 150000 }, { id: 'years', label: 'Holding period (years)', value: 3, step: 0.1 }],
  results: { profit: 'Net profit', roi: 'Total ROI', cagr: 'Annualised return (CAGR)' },
  compute(v, f) {
    if (!(v.inv > 0) || !(v.fin >= 0) || !(v.years > 0)) return null;
    return { profit: f.inr(v.fin - v.inv), roi: f.num((v.fin - v.inv) / v.inv * 100) + '%', cagr: f.num((Math.pow(v.fin / v.inv, 1 / v.years) - 1) * 100) + '%' };
  },
  how: 'ROI = (final value − invested) ÷ invested × 100. CAGR = (final ÷ invested)^(1 ÷ years) − 1, which smooths returns into a yearly rate.',
  faqs: [['ROI vs CAGR?', 'ROI is the total return; CAGR is the equivalent yearly return, so it lets you compare investments held for different periods.'], ['Does this include taxes?', 'No. Deduct taxes and fees separately.']]
},
// ---------------- PERSONAL & LIFESTYLE ----------------
{
  slug: 'marriage-budget-calculator', cat: 'personal-lifestyle', title: 'Marriage Budget Calculator', h1: 'Wedding Budget Calculator',
  desc: 'Plan your wedding budget in India: catering per plate, venue, decoration, attire, photography and a contingency buffer.',
  intro: 'Add up the main wedding costs and keep a safety buffer.',
  fields: [{ id: 'guests', label: 'Number of guests', value: 300, step: 1 }, { id: 'plate', label: 'Catering cost per plate (₹)', value: 600 }, { id: 'venue', label: 'Venue (₹)', value: 150000 }, { id: 'decor', label: 'Decoration (₹)', value: 100000 }, { id: 'attire', label: 'Attire & jewellery (₹)', value: 250000 }, { id: 'photo', label: 'Photography & video (₹)', value: 80000 }, { id: 'other', label: 'Other costs (₹)', value: 50000 }, { id: 'bufPct', label: 'Contingency buffer (%)', value: 10, step: 0.5, adv: true }],
  results: { food: 'Catering', sub: 'Subtotal', buffer: 'Contingency buffer', total: 'Total wedding budget', per: 'Cost per guest' },
  compute(v, f) {
    if (![v.guests, v.plate, v.venue, v.decor, v.attire, v.photo, v.other, v.bufPct].every(N)) return null;
    const food = v.guests * v.plate, sub = food + v.venue + v.decor + v.attire + v.photo + v.other, buf = sub * v.bufPct / 100, total = sub + buf;
    return { food: f.inr(food), sub: f.inr(sub), buffer: f.inr(buf), total: f.inr(total), per: v.guests > 0 ? f.inr(total / v.guests) : '–' };
  },
  how: 'Catering = guests × cost per plate. The subtotal adds every category, and a contingency (default 10%, editable) covers last-minute extras. Costs vary widely by city and season.',
  faqs: [['How much buffer should I keep?', '10% is a sensible minimum; 15% if you are booking many vendors.'], ['Where do weddings usually overspend?', 'Guest count and catering have the biggest impact on the total.']]
},
{
  slug: 'budget-planner', cat: 'personal-lifestyle', title: 'Budget Planner', h1: 'Monthly Budget Planner (50/30/20)',
  desc: 'Split your monthly income into needs, wants and savings with the 50/30/20 rule or your own percentages.',
  intro: 'Enter your take-home income and see how to divide it.',
  fields: [{ id: 'income', label: 'Monthly take-home income (₹)', value: 60000 }, { id: 'needs', label: 'Needs (%)', value: 50, step: 1 }, { id: 'wants', label: 'Wants (%)', value: 30, step: 1 }],
  results: { n: 'Needs (rent, food, bills, EMIs)', w: 'Wants (dining, travel, shopping)', s: 'Savings & investments', sp: 'Savings rate' },
  compute(v, f) {
    if (![v.income, v.needs, v.wants].every(N) || v.needs + v.wants > 100) return null;
    const sp = 100 - v.needs - v.wants;
    return { n: f.inr(v.income * v.needs / 100), w: f.inr(v.income * v.wants / 100), s: f.inr(v.income * sp / 100), sp: f.num(sp, 0) + '%' };
  },
  how: 'The 50/30/20 rule gives 50% to needs, 30% to wants and 20% to savings. Savings = whatever remains after needs and wants.',
  faqs: [['Is 50/30/20 right for everyone?', 'It is a starting point. If your rent is high, adjust the percentages and keep savings as high as you can.'], ['What counts as a need?', 'Rent, groceries, utilities, insurance, transport and minimum loan payments.']]
},
{
  slug: 'education-cost-calculator', cat: 'personal-lifestyle', title: 'Education Cost Calculator', h1: 'Education Cost & Savings Planner',
  desc: 'Estimate the future cost of education after inflation and the monthly savings needed to reach it.',
  intro: 'Plan for your child’s education by estimating the future cost and the monthly amount to save.',
  fields: [{ id: 'cost', label: 'Cost today (₹)', value: 2000000 }, { id: 'years', label: 'Years until needed', value: 12, step: 1 }, { id: 'infl', label: 'Education inflation (% per year)', value: 8, step: 0.1 }, { id: 'ret', label: 'Expected investment return (% per year)', value: 10, step: 0.1 }],
  results: { future: 'Cost when needed', monthly: 'Monthly savings required' },
  compute(v, f) {
    if (![v.cost, v.infl, v.ret].every(N) || !(v.years > 0)) return null;
    const fut = v.cost * Math.pow(1 + v.infl / 100, v.years), r = v.ret / 1200, n = v.years * 12;
    const m = r === 0 ? fut / n : fut * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
    return { future: f.inr(fut), monthly: f.inr(m) };
  },
  how: 'Future cost = today’s cost × (1 + inflation)^years. Monthly savings are the SIP amount needed to reach that future cost at the expected return. Returns are not guaranteed.',
  faqs: [['What inflation should I assume?', 'Education costs have often risen faster than general inflation; 8–10% is a cautious assumption.'], ['What if returns are lower?', 'Lower returns mean you need to save more each month. Try a lower return rate to test.']]
},
// ---------------- CONVERTERS & UTILITIES ----------------
{
  slug: 'unit-converter', cat: 'converters-utilities', title: 'Unit Converter', h1: 'Unit Converter (Length, Area, Weight)',
  desc: 'Convert length, area and weight units including Indian units: sq ft, cent, gunta, acre, ground, tola and quintal.',
  intro: 'Convert between units of the same type, including Indian land and weight units.',
  fields: [{ id: 'value', label: 'Value', value: 1000, step: 'any' },
    { id: 'from', label: 'From', type: 'select', value: 'A|0.09290304', options: [
      ['L|1', 'Length – metre (m)'], ['L|0.01', 'Length – centimetre (cm)'], ['L|1000', 'Length – kilometre (km)'], ['L|0.3048', 'Length – foot (ft)'], ['L|0.0254', 'Length – inch (in)'], ['L|0.9144', 'Length – yard (yd)'], ['L|1609.344', 'Length – mile'],
      ['A|1', 'Area – square metre (sq m)'], ['A|0.09290304', 'Area – square foot (sq ft)'], ['A|0.83612736', 'Area – square yard (sq yd)'], ['A|40.468564224', 'Area – cent'], ['A|101.17141056', 'Area – gunta'], ['A|222.967296', 'Area – ground'], ['A|4046.8564224', 'Area – acre'], ['A|10000', 'Area – hectare'],
      ['W|1', 'Weight – kilogram (kg)'], ['W|0.001', 'Weight – gram (g)'], ['W|0.011664', 'Weight – tola'], ['W|0.45359237', 'Weight – pound (lb)'], ['W|0.028349523', 'Weight – ounce (oz)'], ['W|100', 'Weight – quintal'], ['W|1000', 'Weight – tonne']] },
    { id: 'to', label: 'To', type: 'select', value: 'A|40.468564224', options: [
      ['L|1', 'Length – metre (m)'], ['L|0.01', 'Length – centimetre (cm)'], ['L|1000', 'Length – kilometre (km)'], ['L|0.3048', 'Length – foot (ft)'], ['L|0.0254', 'Length – inch (in)'], ['L|0.9144', 'Length – yard (yd)'], ['L|1609.344', 'Length – mile'],
      ['A|1', 'Area – square metre (sq m)'], ['A|0.09290304', 'Area – square foot (sq ft)'], ['A|0.83612736', 'Area – square yard (sq yd)'], ['A|40.468564224', 'Area – cent'], ['A|101.17141056', 'Area – gunta'], ['A|222.967296', 'Area – ground'], ['A|4046.8564224', 'Area – acre'], ['A|10000', 'Area – hectare'],
      ['W|1', 'Weight – kilogram (kg)'], ['W|0.001', 'Weight – gram (g)'], ['W|0.011664', 'Weight – tola'], ['W|0.45359237', 'Weight – pound (lb)'], ['W|0.028349523', 'Weight – ounce (oz)'], ['W|100', 'Weight – quintal'], ['W|1000', 'Weight – tonne']] }],
  results: { out: 'Converted value', note: 'Multiply by' },
  compute(v, f) {
    if (!Number.isFinite(v.value)) return null;
    const a = v.from.split('|'), b = v.to.split('|');
    if (a[0] !== b[0]) return { out: 'Pick the same type', note: 'Length, area and weight cannot be mixed' };
    const k = a[1] / b[1];
    return { out: f.num(v.value * k, 6), note: f.num(k, 8) };
  },
  how: 'Every unit is converted to a base unit (metre, square metre or kilogram) and then to the target unit. Regional land units vary: here 1 cent = 435.6 sq ft, 1 gunta = 1,089 sq ft, 1 ground = 2,400 sq ft and 1 acre = 43,560 sq ft.',
  faqs: [['How many sq ft are in a cent?', 'One cent is about 435.6 sq ft; 100 cents make one acre.'], ['How many sq ft in an acre?', '43,560 sq ft.']]
},
{
  slug: 'date-calculator', cat: 'converters-utilities', title: 'Date Calculator', h1: 'Date Difference Calculator',
  desc: 'Calculate the number of days, weeks, months and years between two dates. Free date calculator.',
  intro: 'Find how long it is between two dates.',
  fields: [{ id: 'start', label: 'Start date', type: 'date', value: '2026-01-01' }, { id: 'end', label: 'End date', type: 'date', value: '2026-12-31' }],
  results: { days: 'Total days', weeks: 'In weeks', ymd: 'In years, months & days' },
  compute(v, f) {
    if (!v.start || !v.end) return null;
    let a = new Date(v.start + 'T00:00:00'), b = new Date(v.end + 'T00:00:00');
    if (b < a) { const t = a; a = b; b = t; } // order does not matter
    const days = Math.round((b - a) / 864e5);
    let y = b.getFullYear() - a.getFullYear(), m = b.getMonth() - a.getMonth(), d = b.getDate() - a.getDate();
    if (d < 0) { m--; d += new Date(b.getFullYear(), b.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    return { days: f.num(days, 0) + ' days', weeks: Math.floor(days / 7) + ' weeks ' + (days % 7) + ' days', ymd: y + ' years, ' + m + ' months, ' + d + ' days' };
  },
  how: 'The tool counts the whole days between the two dates (the end date is not counted twice) and then breaks the span into years, months and days.',
  faqs: [['Is the end date included?', 'No. The count is the difference between the dates, so 1 Jan to 2 Jan is 1 day.'], ['Does it handle leap years?', 'Yes, it uses real calendar dates.']]
},
{
  slug: 'age-calculator', cat: 'converters-utilities', title: 'Age Calculator', h1: 'Age Calculator',
  desc: 'Calculate exact age in years, months and days from a date of birth, plus days until the next birthday.',
  intro: 'Enter a date of birth to get an exact age. Leave “as on” blank to use today.',
  fields: [{ id: 'dob', label: 'Date of birth', type: 'date', value: '1995-06-15' }, { id: 'asOn', label: 'Age as on (blank = today)', type: 'date', value: '' }],
  results: { age: 'Age', days: 'Total days lived', next: 'Next birthday in' },
  compute(v, f) {
    if (!v.dob) return null;
    const dob = new Date(v.dob + 'T00:00:00'), on = v.asOn ? new Date(v.asOn + 'T00:00:00') : new Date();
    const t = new Date(on.getFullYear(), on.getMonth(), on.getDate());
    if (t < dob) return null;
    let y = t.getFullYear() - dob.getFullYear(), m = t.getMonth() - dob.getMonth(), d = t.getDate() - dob.getDate();
    if (d < 0) { m--; d += new Date(t.getFullYear(), t.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    let nb = new Date(t.getFullYear(), dob.getMonth(), dob.getDate());
    if (nb < t) nb = new Date(t.getFullYear() + 1, dob.getMonth(), dob.getDate());
    const left = Math.round((nb - t) / 864e5);
    return { age: y + ' years, ' + m + ' months, ' + d + ' days', days: f.num(Math.round((t - dob) / 864e5), 0) + ' days', next: left === 0 ? 'Today – happy birthday!' : left + ' days' };
  },
  how: 'Age is the calendar difference between your date of birth and the chosen date, expressed in years, months and days.',
  faqs: [['How is age calculated for official forms?', 'Most Indian forms use completed years as on a cut-off date. Enter that date in “Age as on”.'], ['What if I was born on 29 February?', 'The calculator uses real calendar dates; in non-leap years the birthday falls on 1 March.']]
}
];
