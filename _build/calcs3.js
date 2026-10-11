// Calculator definitions (set 3): investment, tax and salary calculators. Each compute() must be self-contained: it is serialised into the page.
const N = (v) => Number.isFinite(v) && v >= 0;

module.exports = [
{
  slug: 'sip-calculator', cat: 'finance', title: 'SIP Calculator', h1: 'SIP Calculator (Mutual Fund Monthly Investment)',
  desc: 'Free SIP calculator for India. Enter monthly investment, expected return and years to see invested amount, estimated returns and maturity value.',
  intro: 'Estimate how much a monthly SIP in a mutual fund can grow to over time.',
  fields: [{ id: 'sip', label: 'Monthly SIP amount (₹)', value: 5000 }, { id: 'rate', label: 'Expected return (% per year)', value: 12, step: 0.1 }, { id: 'years', label: 'Investment period (years)', value: 10, step: 1 }],
  results: { invested: 'Amount invested', gain: 'Estimated returns', total: 'Maturity value' },
  compute(v, f) {
    if (!(v.sip > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const i = v.rate / 1200, n = Math.round(v.years * 12);
    const fv = i === 0 ? v.sip * n : v.sip * ((Math.pow(1 + i, n) - 1) / i) * (1 + i); // instalments at the start of each month
    return { invested: f.inr(v.sip * n), gain: f.inr(fv - v.sip * n), total: f.inr(fv) };
  },
  how: 'Maturity value = P × [((1 + i)^n − 1) ÷ i] × (1 + i), where P is the monthly instalment, i the monthly return (annual % ÷ 12 ÷ 100) and n the number of months. Instalments are assumed at the start of each month. Mutual fund returns are not guaranteed.',
  faqs: [['What return should I assume for a SIP?', 'Equity funds have historically delivered roughly 10–12% a year over long periods, but returns vary and are not guaranteed. A conservative figure is safer for planning.'], ['Is the result guaranteed?', 'No. SIPs in market-linked funds can gain or lose value. The calculator shows a steady-return illustration only.']]
},
{
  slug: 'step-up-sip-calculator', cat: 'finance', title: 'Step-up SIP Calculator', h1: 'Step-up SIP Calculator',
  desc: 'Free step-up SIP calculator for India. See how raising your SIP by a fixed percentage every year grows your maturity value.',
  intro: 'Increase your SIP every year in line with your salary and see the difference it makes.',
  fields: [{ id: 'sip', label: 'Starting monthly SIP (₹)', value: 5000 }, { id: 'step', label: 'Annual step-up (%)', value: 10, step: 0.5 }, { id: 'rate', label: 'Expected return (% per year)', value: 12, step: 0.1 }, { id: 'years', label: 'Investment period (years)', value: 10, step: 1 }],
  results: { invested: 'Amount invested', gain: 'Estimated returns', total: 'Maturity value', flat: 'Same SIP without step-up' },
  compute(v, f) {
    if (!(v.sip > 0) || !(v.years > 0) || !N(v.rate) || !N(v.step)) return null;
    const i = v.rate / 1200, n = Math.round(v.years * 12);
    let bal = 0, inv = 0, flat = 0;
    for (let m = 0; m < n; m++) {
      const amt = v.sip * Math.pow(1 + v.step / 100, Math.floor(m / 12)); // raised once every 12 months
      bal = (bal + amt) * (1 + i); inv += amt; flat = (flat + v.sip) * (1 + i);
    }
    return { invested: f.inr(inv), gain: f.inr(bal - inv), total: f.inr(bal), flat: f.inr(flat) };
  },
  how: 'Month by month, the instalment is added at the start of the month and the balance grows by the monthly return. The instalment itself rises by the step-up percentage at the start of each new year. The last result shows a flat SIP of the starting amount for comparison.',
  faqs: [['What is a step-up SIP?', 'A SIP whose instalment increases by a fixed percentage or amount every year, so your investment keeps pace with your income.'], ['How much step-up is reasonable?', 'Many investors choose 5–15% a year, close to their expected salary growth.']]
},
{
  slug: 'lumpsum-calculator', cat: 'finance', title: 'Lumpsum Calculator', h1: 'Lumpsum Investment Calculator (Mutual Fund Returns)',
  desc: 'Free lumpsum calculator for India. Find the future value of a one-time mutual fund or investment at your expected annual return.',
  intro: 'See what a one-time investment can grow to over the years.',
  fields: [{ id: 'amt', label: 'Investment amount (₹)', value: 100000 }, { id: 'rate', label: 'Expected return (% per year)', value: 12, step: 0.1 }, { id: 'years', label: 'Investment period (years)', value: 10, step: 0.5 }],
  results: { invested: 'Amount invested', gain: 'Estimated returns', total: 'Maturity value' },
  compute(v, f) {
    if (!(v.amt > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const fv = v.amt * Math.pow(1 + v.rate / 100, v.years);
    return { invested: f.inr(v.amt), gain: f.inr(fv - v.amt), total: f.inr(fv) };
  },
  how: 'Future value = P × (1 + r)^t, where P is the amount invested, r the annual return (as a decimal) and t the years. Returns are compounded yearly and assumed steady; real market returns vary.',
  faqs: [['Lumpsum or SIP – which is better?', 'A lumpsum puts all your money to work at once, while a SIP spreads it across market levels. SIP suits regular income; lumpsum suits a windfall.'], ['Are taxes included?', 'No. Capital gains tax on mutual funds depends on the fund type and holding period and is not deducted here.']]
},
{
  slug: 'fd-calculator', cat: 'finance', title: 'FD Calculator', h1: 'Fixed Deposit (FD) Calculator',
  desc: 'Free FD calculator for India. Maturity amount and interest on a fixed deposit with quarterly, monthly or yearly compounding and senior citizen rates.',
  intro: 'Work out the maturity value and interest on a bank or post office fixed deposit.',
  fields: [{ id: 'amt', label: 'Deposit amount (₹)', value: 100000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 7, step: 0.05 }, { id: 'years', label: 'Tenure (years)', value: 5, step: 0.25 },
    { id: 'm', label: 'Compounding', type: 'select', value: 4, options: [[4, 'Quarterly (most banks)'], [12, 'Monthly'], [2, 'Half-yearly'], [1, 'Yearly']] },
    { id: 'senior', label: 'Senior citizen (age 60+)', type: 'select', value: 0, options: [[0, 'No'], [0.5, 'Yes (adds 0.50% to the rate)']] }],
  results: { rate: 'Rate applied', interest: 'Interest earned', total: 'Maturity amount' },
  compute(v, f) {
    if (!(v.amt > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const r = v.rate + v.senior, fv = v.amt * Math.pow(1 + r / 100 / v.m, v.m * v.years);
    return { rate: f.num(r, 2) + '% p.a.', interest: f.inr(fv - v.amt), total: f.inr(fv) };
  },
  how: 'Maturity = P × (1 + r ÷ m)^(m × t), where m is the number of compounding periods per year. Most banks compound FD interest quarterly. Senior citizens typically get about 0.50% extra, but the exact premium varies by bank, so check your bank’s rate card. TDS, if any, is not deducted here.',
  faqs: [['Is FD interest taxable?', 'Yes, it is added to your income and taxed at your slab rate. Banks deduct TDS when interest crosses the threshold set by the tax rules.'], ['Does quarterly compounding earn more than yearly?', 'Slightly, because interest is added to the principal more often.']]
},
{
  slug: 'rd-calculator', cat: 'finance', title: 'RD Calculator', h1: 'Recurring Deposit (RD) Calculator',
  desc: 'Free RD calculator for India. Maturity value and interest on a monthly recurring deposit with quarterly compounding.',
  intro: 'Find what a monthly recurring deposit will be worth at maturity.',
  fields: [{ id: 'dep', label: 'Monthly deposit (₹)', value: 5000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 6.5, step: 0.05 }, { id: 'years', label: 'Tenure (years)', value: 5, step: 0.25 }],
  results: { invested: 'Total deposited', interest: 'Interest earned', total: 'Maturity amount' },
  compute(v, f) {
    if (!(v.dep > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const n = Math.round(v.years * 12);
    let fv = 0;
    // each monthly deposit earns quarterly-compounded interest for its remaining months
    for (let k = 1; k <= n; k++) fv += v.dep * Math.pow(1 + v.rate / 400, 4 * (n - k + 1) / 12);
    return { invested: f.inr(v.dep * n), interest: f.inr(fv - v.dep * n), total: f.inr(fv) };
  },
  how: 'Each monthly deposit earns interest, compounded quarterly, for the months left until maturity, and the results are added up. This is the method most Indian banks use. Your bank’s figure can differ by a few rupees because of rounding.',
  faqs: [['What is the difference between FD and RD?', 'An FD is a one-time deposit; an RD is a fixed monthly deposit, which suits people who save from a regular salary.'], ['What if I miss an instalment?', 'Banks usually charge a small penalty, and repeated misses can close the RD early.']]
},
{
  slug: 'ppf-calculator', cat: 'finance', title: 'PPF Calculator', h1: 'PPF Calculator (Public Provident Fund)',
  desc: 'Free PPF calculator for India. Maturity value of your Public Provident Fund for a yearly deposit up to ₹1.5 lakh over 15 years or more.',
  intro: 'Estimate your PPF maturity amount and tax-free interest.',
  fields: [{ id: 'dep', label: 'Yearly deposit (₹, max 1,50,000)', value: 150000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 7.1, step: 0.05 },
    { id: 'years', label: 'Period', type: 'select', value: 15, options: [[15, '15 years (standard)'], [20, '20 years (1 extension)'], [25, '25 years (2 extensions)'], [30, '30 years (3 extensions)']] }],
  results: { used: 'Yearly deposit considered', invested: 'Total deposited', interest: 'Interest earned', total: 'Maturity value' },
  compute(v, f) {
    if (!(v.dep > 0) || !N(v.rate)) return null;
    const d = Math.min(v.dep, 150000); // PPF allows at most ₹1.5 lakh per financial year
    let bal = 0;
    for (let y = 0; y < v.years; y++) bal = (bal + d) * (1 + v.rate / 100); // deposit made early in the year, interest credited yearly
    return { used: f.inr(d), invested: f.inr(d * v.years), interest: f.inr(bal - d * v.years), total: f.inr(bal) };
  },
  how: 'Each year the deposit is added to the balance and the year’s interest is credited, so the balance grows as (balance + deposit) × (1 + rate). The calculator assumes you deposit before the 5th of April so every year earns a full year’s interest. The PPF rate is set by the government every quarter. Interest and maturity are tax-free.',
  faqs: [['What is the PPF lock-in?', '15 years, extendable in blocks of 5 years with or without further deposits.'], ['What is the maximum PPF deposit?', '₹1.5 lakh per financial year. Amounts above this earn no interest and get no deduction.']]
},
{
  slug: 'income-tax-calculator', cat: 'finance', title: 'Income Tax Calculator', h1: 'Income Tax Calculator (Old vs New Regime)',
  desc: 'Free income tax calculator for India, FY 2026-27 (AY 2027-28). Compare old and new tax regimes with deductions, rebate and cess.',
  intro: 'Compare your tax under the old and new regimes and see which one saves more.',
  fields: [{ id: 'inc', label: 'Gross annual income (₹)', value: 1500000 },
    { id: 'sal', label: 'Income type', type: 'select', value: 1, options: [[1, 'Salaried / pensioner (standard deduction)'], [0, 'Business / other']] },
    { id: 'age', label: 'Age', type: 'select', value: 0, options: [[0, 'Below 60'], [60, '60 to 79 (senior)'], [80, '80 and above (super senior)']] },
    { id: 'd80c', label: 'Old regime: 80C investments (₹, max 1,50,000)', value: 150000 }, { id: 'd80d', label: 'Old regime: 80D health insurance (₹)', value: 25000 },
    { id: 'dother', label: 'Old regime: other deductions – HRA, home loan interest, NPS (₹)', value: 0 }],
  results: { oldTaxable: 'Taxable income (old regime)', oldTax: 'Tax (old regime, with cess)', newTaxable: 'Taxable income (new regime)', newTax: 'Tax (new regime, with cess)', better: 'Better option' },
  compute(v, f) {
    if (!N(v.inc) || !N(v.d80c) || !N(v.d80d) || !N(v.dother)) return null;
    const L = 100000;
    // old regime: basic exemption depends on age; 80C capped at ₹1.5 lakh; standard deduction ₹50,000
    const oldTi = Math.max(0, v.inc - (v.sal ? 50000 : 0) - Math.min(v.d80c, 150000) - v.d80d - v.dother);
    const ex = v.age >= 80 ? 5 * L : v.age >= 60 ? 3 * L : 2.5 * L;
    let ot = 0;
    if (oldTi > ex) ot += (Math.min(oldTi, 5 * L) - ex) * 0.05;
    if (oldTi > 5 * L) ot += (Math.min(oldTi, 10 * L) - 5 * L) * 0.2;
    if (oldTi > 10 * L) ot += (oldTi - 10 * L) * 0.3;
    if (oldTi <= 5 * L) ot = 0; // section 87A rebate
    // new regime: standard deduction ₹75,000, no other deductions
    const newTi = Math.max(0, v.inc - (v.sal ? 75000 : 0));
    const sl = [[4 * L, 8 * L, 0.05], [8 * L, 12 * L, 0.1], [12 * L, 16 * L, 0.15], [16 * L, 20 * L, 0.2], [20 * L, 24 * L, 0.25], [24 * L, Infinity, 0.3]];
    let nt = 0;
    sl.forEach((s) => { if (newTi > s[0]) nt += (Math.min(newTi, s[1]) - s[0]) * s[2]; });
    if (newTi <= 12 * L) nt = 0; else nt = Math.min(nt, newTi - 12 * L); // 87A rebate with marginal relief
    const oldTax = ot * 1.04, newTax = nt * 1.04; // 4% health & education cess
    const diff = Math.abs(oldTax - newTax);
    const better = diff < 1 ? 'Both are equal' : oldTax < newTax ? 'Old regime saves ' + f.inr(diff) : 'New regime saves ' + f.inr(diff);
    return { oldTaxable: f.inr(oldTi), oldTax: f.inr(oldTax), newTaxable: f.inr(newTi), newTax: f.inr(newTax), better };
  },
  how: 'New regime slabs: nil up to ₹4 lakh, then 5%, 10%, 15%, 20%, 25% and 30% in ₹4 lakh steps above it, with a ₹75,000 standard deduction and a rebate that makes income up to ₹12 lakh tax-free. Old regime: 5% from ₹2.5 lakh, 20% from ₹5 lakh, 30% above ₹10 lakh (higher exemption for seniors), with a ₹50,000 standard deduction, deductions such as 80C and 80D, and a rebate up to ₹5 lakh. A 4% cess is added. Surcharge for income above ₹50 lakh is not included.',
  faqs: [['Which regime is better for me?', 'The new regime usually wins unless your old-regime deductions (80C, 80D, HRA, home loan interest) are large. Enter your own figures above to compare.'], ['Are these the latest slabs?', 'They match the slabs announced for FY 2026-27, which left the earlier slabs unchanged. Tax laws can change, so check the Income Tax Department website before filing.']]
},
{
  slug: 'cagr-calculator', cat: 'finance', title: 'CAGR Calculator', h1: 'CAGR Calculator (Compound Annual Growth Rate)',
  desc: 'Free CAGR calculator. Find the compound annual growth rate and absolute return of an investment from its start value, end value and years.',
  intro: 'Find the yearly growth rate that turned your starting value into the ending value.',
  fields: [{ id: 'start', label: 'Beginning value (₹)', value: 100000 }, { id: 'end', label: 'Ending value (₹)', value: 250000 }, { id: 'years', label: 'Period (years)', value: 5, step: 0.25 }],
  results: { cagr: 'CAGR', abs: 'Absolute return', gain: 'Total gain / loss' },
  compute(v, f) {
    if (!(v.start > 0) || !(v.end > 0) || !(v.years > 0)) return null;
    return { cagr: f.num((Math.pow(v.end / v.start, 1 / v.years) - 1) * 100, 2) + '%', abs: f.num((v.end / v.start - 1) * 100, 2) + '%', gain: f.inr(v.end - v.start) };
  },
  how: 'CAGR = (ending value ÷ beginning value)^(1 ÷ years) − 1. It smooths uneven yearly returns into one steady annual rate. It suits a single investment with no extra deposits or withdrawals; for SIPs, use XIRR instead.',
  faqs: [['What is a good CAGR?', 'Compare it with the alternatives: FDs near 7%, inflation near 5–6%, and long-term equity funds in the low teens in good periods. Past returns do not guarantee future ones.'], ['Can CAGR be negative?', 'Yes, when the ending value is lower than the beginning value, the CAGR is negative. This calculator needs a positive ending value.']]
},
{
  slug: 'simple-compound-interest-calculator', cat: 'finance', title: 'Simple & Compound Interest Calculator', h1: 'Simple & Compound Interest Calculator',
  desc: 'Free simple interest and compound interest calculator. Compare interest and maturity amount side by side for any principal, rate and time.',
  intro: 'See how simple and compound interest differ on the same principal.',
  fields: [{ id: 'p', label: 'Principal (₹)', value: 100000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 8, step: 0.05 }, { id: 'years', label: 'Time (years)', value: 5, step: 0.25 },
    { id: 'm', label: 'Compounding', type: 'select', value: 1, options: [[1, 'Yearly'], [2, 'Half-yearly'], [4, 'Quarterly'], [12, 'Monthly']] }],
  results: { si: 'Simple interest', siTotal: 'Total with simple interest', ci: 'Compound interest', ciTotal: 'Total with compound interest' },
  compute(v, f) {
    if (!(v.p > 0) || !(v.years > 0) || !N(v.rate)) return null;
    const si = v.p * v.rate * v.years / 100, tot = v.p * Math.pow(1 + v.rate / 100 / v.m, v.m * v.years);
    return { si: f.inr(si), siTotal: f.inr(v.p + si), ci: f.inr(tot - v.p), ciTotal: f.inr(tot) };
  },
  how: 'Simple interest = P × r × t. Compound interest: A = P × (1 + r ÷ m)^(m × t), and the interest is A − P, where m is the compounding frequency per year. Simple interest is charged only on the original principal; compound interest is charged on principal plus interest already earned.',
  faqs: [['What is the difference between simple and compound interest?', 'Simple interest stays fixed on the principal. Compound interest grows each period because it is earned on earlier interest too.'], ['Which do loans and FDs use?', 'Most bank FDs and loans use compounding or reducing balances. Some informal loans and a few schemes use simple interest.']]
},
{
  slug: 'loan-prepayment-calculator', cat: 'finance', title: 'Loan Prepayment Calculator', h1: 'Loan Prepayment Calculator (Part-payment Savings)',
  desc: 'Free loan prepayment calculator for India. See how much interest and tenure you save with a one-time part-payment or extra monthly payment.',
  intro: 'Find out how much interest and how many months a part-payment saves on your home, car or personal loan.',
  fields: [{ id: 'amount', label: 'Loan amount (₹)', value: 5000000 }, { id: 'rate', label: 'Interest rate (% per year)', value: 8.75, step: 0.01 }, { id: 'years', label: 'Tenure (years)', value: 20, step: 1 },
    { id: 'lump', label: 'One-time part-payment (₹)', value: 500000 }, { id: 'lumpAt', label: 'Paid after EMI number', value: 24, step: 1 }, { id: 'extra', label: 'Extra payment every month (₹)', value: 0 }],
  results: { emi: 'Monthly EMI (unchanged)', saved: 'Interest saved', newInt: 'Total interest after prepayment', newTenure: 'New tenure', cut: 'Time saved' },
  compute(v, f) {
    if (!(v.amount > 0) || !(v.years > 0) || !N(v.rate) || !N(v.lump) || !N(v.lumpAt) || !N(v.extra)) return null;
    const r = v.rate / 1200, n = Math.round(v.years * 12);
    const emi = r === 0 ? v.amount / n : v.amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    let bal = v.amount, paidInt = 0, m = 0;
    while (bal > 0.5 && m < 1200) { // keep the EMI the same, so the loan closes sooner
      m++;
      const intr = bal * r, pay = Math.min(emi + v.extra, bal + intr);
      bal = bal + intr - pay; paidInt += intr;
      if (m === Math.round(v.lumpAt)) bal -= Math.min(v.lump, bal);
    }
    const t = (k) => Math.floor(k / 12) + ' yr ' + (k % 12) + ' mo', cut = Math.max(n - m, 0);
    return { emi: f.inr(emi), saved: f.inr(Math.max(emi * n - v.amount - paidInt, 0)), newInt: f.inr(paidInt), newTenure: t(m), cut: t(cut) };
  },
  how: 'The loan is run month by month at the same EMI: interest is charged on the outstanding balance, the EMI (plus any extra amount) reduces it, and the one-time part-payment is deducted after the EMI number you choose. Because the EMI stays the same, the loan ends earlier. Compare the interest with and without prepayment to see the saving. Some lenders charge a prepayment fee on fixed-rate loans.',
  faqs: [['Should I reduce the EMI or the tenure?', 'Reducing the tenure usually saves more interest overall. Reducing the EMI eases monthly cash flow. This calculator shows the shorter-tenure option.'], ['When is prepayment most effective?', 'Early in the loan, when most of each EMI is interest. The same amount prepaid in year 2 saves far more than in year 15.']]
},
{
  slug: 'hra-exemption-calculator', cat: 'finance', title: 'HRA Exemption Calculator', h1: 'HRA Exemption Calculator (Section 10(13A))',
  desc: 'Free HRA exemption calculator for India. Find your tax-exempt House Rent Allowance as the least of HRA received, rent minus 10% of salary, and 50% or 40% of salary.',
  intro: 'Work out how much of your HRA is tax-free if you pay rent (old tax regime).',
  fields: [{ id: 'basic', label: 'Monthly basic salary + DA (₹)', value: 40000 }, { id: 'hra', label: 'Monthly HRA received (₹)', value: 20000 }, { id: 'rent', label: 'Monthly rent paid (₹)', value: 18000 },
    { id: 'city', label: 'City of residence', type: 'select', value: 0.5, options: [[0.5, 'Metro: Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune, Ahmedabad (50%)'], [0.4, 'Other cities (40%)']] }],
  results: { a: '1. HRA received (yearly)', b: '2. Rent paid − 10% of salary (yearly)', c: '3. 50% / 40% of salary (yearly)', exempt: 'Tax-exempt HRA (yearly)', taxable: 'Taxable HRA (yearly)' },
  compute(v, f) {
    if (!N(v.basic) || !N(v.hra) || !N(v.rent)) return null;
    const a = v.hra * 12, b = Math.max(v.rent * 12 - 0.1 * v.basic * 12, 0), c = v.city * v.basic * 12, ex = Math.min(a, b, c);
    return { a: f.inr(a), b: f.inr(b), c: f.inr(c), exempt: f.inr(ex), taxable: f.inr(a - ex) };
  },
  how: 'The exempt HRA is the least of: (1) the HRA you actually receive, (2) rent paid minus 10% of basic salary plus DA, and (3) 50% of that salary in a metro or 40% elsewhere. The rest of the HRA is taxable. This exemption is available only in the old tax regime. The 50% limit applies to the eight metros from FY 2026-27 (earlier it applied to Delhi, Mumbai, Kolkata and Chennai only), so choose the 40% option for an earlier year in Bengaluru, Hyderabad, Pune or Ahmedabad.',
  faqs: [['Do I need rent receipts?', 'Keep rent receipts and a rent agreement. If yearly rent exceeds ₹1 lakh, your employer will usually ask for your landlord’s PAN.'], ['Can I claim HRA in the new regime?', 'No. HRA exemption, like most deductions, is available only under the old regime.']]
},
{
  slug: 'gratuity-calculator', cat: 'finance', title: 'Gratuity Calculator', h1: 'Gratuity Calculator',
  desc: 'Free gratuity calculator for India. Find your gratuity from last drawn basic salary plus DA and years of service using the (basic × 15 × years) ÷ 26 formula.',
  intro: 'Estimate the gratuity you will receive when you leave a job after five or more years.',
  fields: [{ id: 'basic', label: 'Last drawn monthly basic + DA (₹)', value: 50000 }, { id: 'yrs', label: 'Years of service', value: 8, step: 1 }, { id: 'mon', label: 'Extra months of service', value: 4, step: 1 },
    { id: 'cov', label: 'Employer covered under Gratuity Act?', type: 'select', value: 26, options: [[26, 'Yes (÷ 26 days)'], [30, 'No (÷ 30 days)']] }],
  results: { counted: 'Years counted', gratuity: 'Gratuity payable', status: 'Eligibility' },
  compute(v, f) {
    if (!N(v.basic) || !N(v.yrs) || !N(v.mon)) return null;
    const total = v.yrs + v.mon / 12, counted = Math.floor(v.yrs + Math.floor(v.mon / 12)) + (v.mon % 12 >= 6 ? 1 : 0); // 6+ months rounds up
    const g = Math.min(v.basic * 15 / v.cov * counted, 2000000); // tax-free limit ₹20 lakh
    return { counted: counted + ' years', gratuity: f.inr(g), status: total >= 5 ? 'Eligible (5+ years)' : 'Usually needs 5 years of service' };
  },
  how: 'Gratuity = last drawn (basic + DA) × 15 × completed years ÷ 26 for employers covered by the Payment of Gratuity Act (÷ 30 otherwise). A part-year of six months or more counts as a full year. The result is capped at ₹20 lakh, the tax-free limit. Gratuity is normally payable after five years of continuous service; check your employment terms, since the new labour codes may allow earlier payment for fixed-term employees.',
  faqs: [['Why divide by 26?', 'A month is taken as 26 working days, and gratuity is 15 days’ wages for each year of service.'], ['Is gratuity taxable?', 'Gratuity for private employees covered by the Act is exempt up to ₹20 lakh; any amount above it is taxable.']]
}
];
