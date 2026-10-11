// On-page educational content for the investment, tax and salary calculators (set D).
// Worked-example figures were computed with the same formulas as the calculators, using their default values.
module.exports = {
  'sip-calculator': { sections: [
    { h: 'What this calculator does', p: ['A SIP (systematic investment plan) invests a fixed amount in a mutual fund every month. This calculator estimates the value of those instalments at the end of your chosen period, assuming a steady annual return. It shows how much you put in, how much the investment may earn and the total maturity value.'] },
    { h: 'Worked example', p: ['A SIP of ₹5,000 a month for 10 years at an assumed 12% a year means 120 instalments and ₹6,00,000 invested. The estimated maturity value is about ₹11,61,695, so the estimated gain is about ₹5,61,695. Almost half of the final amount comes from compounding, which is why starting early matters.'] },
    { h: 'Tips and limits', p: ['- Use a conservative return for planning, such as 10%, and treat anything higher as a bonus.', '- Real fund returns rise and fall each year, so the actual value will differ from this steady-rate illustration.', '- Expense ratio, exit load and capital gains tax are not deducted here.'] }
  ] },
  'step-up-sip-calculator': { sections: [
    { h: 'What this calculator does', p: ['A step-up SIP raises your monthly instalment by a fixed percentage every year, so your investing grows with your salary. The calculator compares the result with a flat SIP of the starting amount so you can see what the step-up adds.'] },
    { h: 'Worked example', p: ['Start with ₹5,000 a month and raise it by 10% every year for 10 years at 12% a year. You invest about ₹9,56,245 in total and the estimated maturity value is about ₹16,87,163. The same ₹5,000 flat SIP would grow to about ₹11,61,695, so the yearly step-up adds roughly ₹5.25 lakh.'] },
    { h: 'Tips', p: ['- Match the step-up to your expected pay rise; 5–10% is a common starting point.', '- If a lender or platform steps up by a fixed rupee amount instead of a percentage, the result will differ slightly.'] }
  ] },
  'lumpsum-calculator': { sections: [
    { h: 'What this calculator does', p: ['This calculator estimates what a one-time investment can grow to when it earns a steady annual return, compounded yearly. Use it for a bonus, a maturity amount or any lump of money you plan to invest and leave untouched.'] },
    { h: 'Worked example', p: ['₹1,00,000 invested for 10 years at an assumed 12% a year grows to about ₹3,10,585, an estimated gain of ₹2,10,585. Changing only the period to 20 years takes it past ₹9.6 lakh, which shows the effect of time.'] },
    { h: 'Tips and limits', p: ['- Returns on market-linked investments are not guaranteed and are rarely steady.', '- Taxes and fund charges are not deducted. Check the tax rules for the fund type you hold.'] }
  ] },
  'fd-calculator': { sections: [
    { h: 'What this calculator does', p: ['A fixed deposit pays a fixed rate for a fixed period. This calculator shows the maturity amount and interest after compounding at your chosen frequency. Select the senior citizen option to add the usual 0.50% extra rate.'] },
    { h: 'Worked example', p: ['A ₹1,00,000 deposit at 7% for 5 years with quarterly compounding matures at about ₹1,41,478, earning ₹41,478 in interest. The same deposit compounded yearly would mature at ₹1,40,255, a little less.'] },
    { h: 'Tips and limits', p: ['- Interest is taxable and your bank may deduct TDS, so your net return is lower than shown.', '- Rates differ between banks and tenures. Enter the rate on your own deposit receipt or rate card.', '- Premature withdrawal usually reduces the rate; that is not modelled here.'] }
  ] },
  'rd-calculator': { sections: [
    { h: 'What this calculator does', p: ['A recurring deposit lets you deposit a fixed amount every month and earn interest like a fixed deposit. This calculator adds up each instalment with the interest it earns until maturity, using quarterly compounding.'] },
    { h: 'Worked example', p: ['Depositing ₹5,000 a month for 5 years at 6.5% means ₹3,00,000 deposited. The maturity amount is about ₹3,54,954, so the interest earned is about ₹54,954.'] },
    { h: 'Tips and limits', p: ['- Pay on time every month; late instalments attract a penalty.', '- Interest is taxable. Your bank’s maturity figure can differ by a few rupees from this estimate because of rounding rules.'] }
  ] },
  'ppf-calculator': { sections: [
    { h: 'What this calculator does', p: ['The Public Provident Fund is a government-backed savings scheme with a 15-year lock-in. Interest is set by the government, compounded yearly and is tax-free, and deposits qualify for deduction under Section 80C in the old tax regime. The calculator projects the maturity value for a fixed yearly deposit.'] },
    { h: 'Worked example', p: ['Depositing the maximum ₹1,50,000 every year for 15 years at 7.1% gives a total deposit of ₹22,50,000 and a maturity value of about ₹40,68,209, of which about ₹18,18,209 is tax-free interest.'] },
    { h: 'Tips and limits', p: ['- Deposit before the 5th of the month if you want that month’s interest; a lump sum before 5 April gives a full year’s interest.', '- The PPF rate is revised every quarter, so the final value will differ from a fixed-rate projection.', '- Deposits above ₹1.5 lakh in a year earn no interest, so the calculator caps the figure at that limit.'] }
  ] },
  'income-tax-calculator': { sections: [
    { h: 'What this calculator does', p: ['It calculates your income tax under both the old and the new regime for FY 2026-27 and tells you which one costs less. You enter your gross income, whether you are salaried, your age group, and the deductions you would claim in the old regime. The new regime allows only the standard deduction.'] },
    { h: 'Worked example', p: ['Take a salaried person under 60 with ₹15,00,000 of income, ₹1,50,000 under 80C and ₹25,000 under 80D. Old regime: taxable income ₹12,75,000, tax with cess about ₹2,02,800. New regime: taxable income ₹14,25,000, tax with cess about ₹97,500. The new regime saves about ₹1,05,300 here.', 'At ₹12,75,000 of salary the new regime tax is zero, because the standard deduction brings taxable income to ₹12,00,000 and the rebate wipes out the tax.'] },
    { h: 'Assumptions and limits', p: ['- Resident individuals only. Surcharge on income above ₹50 lakh is not included.', '- Capital gains, special-rate income and the marginal relief at the old-regime rebate limit are not modelled.', '- Salaried standard deduction: ₹75,000 (new) and ₹50,000 (old).', '- Slabs can change in future budgets. Check the Income Tax Department website before filing your return.'] }
  ] },
  'cagr-calculator': { sections: [
    { h: 'What this calculator does', p: ['CAGR turns the growth from a starting value to an ending value into one smooth yearly rate. It lets you compare investments held for different periods on equal terms.'] },
    { h: 'Worked example', p: ['₹1,00,000 that becomes ₹2,50,000 over 5 years has an absolute return of 150% and a CAGR of about 20.11% a year.'] },
    { h: 'Tips and limits', p: ['- CAGR ignores the ups and downs along the way; two investments with the same CAGR can have very different risk.', '- It assumes no money was added or withdrawn. For SIPs or irregular cash flows use XIRR.'] }
  ] },
  'simple-compound-interest-calculator': { sections: [
    { h: 'What this calculator does', p: ['It computes simple interest and compound interest on the same principal, rate and time, so the difference is visible straight away. Pick a compounding frequency for the compound result.'] },
    { h: 'Worked example', p: ['₹1,00,000 at 8% for 5 years earns simple interest of ₹40,000 (total ₹1,40,000). With yearly compounding it earns about ₹46,933 (total ₹1,46,933). The extra ₹6,933 is interest earned on interest, and the gap widens as the years increase.'] },
    { h: 'Tips', p: ['- Check whether a loan or deposit quotes a simple or compounded rate before comparing offers.', '- For monthly loan repayments, use the EMI calculator instead, since EMIs reduce the balance every month.'] }
  ] },
  'loan-prepayment-calculator': { sections: [
    { h: 'What this calculator does', p: ['It shows what happens when you pay part of your loan early. The EMI stays the same, the outstanding principal falls, and the loan closes sooner with less interest. You can enter a one-time part-payment, an extra amount every month, or both.'] },
    { h: 'Worked example', p: ['For a ₹50,00,000 loan at 8.75% over 20 years, the EMI is about ₹44,186. A one-time part-payment of ₹5,00,000 after the 24th EMI cuts the tenure from 20 years to about 16 years 3 months, saving about 3 years 9 months and roughly ₹15.3 lakh of interest.'] },
    { h: 'Tips and limits', p: ['- Prepay as early as possible; interest is highest in the first years of a loan.', '- Floating-rate home loans for individuals usually carry no prepayment charge, but fixed-rate and business loans may. Ask your lender.', '- The calculator keeps the rate constant; a floating rate that changes will alter the figures.'] }
  ] },
  'hra-exemption-calculator': { sections: [
    { h: 'What this calculator does', p: ['If you receive HRA and pay rent, part of the allowance can be tax-free under the old regime. The exemption is the least of three amounts: the HRA received, rent paid minus 10% of basic salary plus DA, and 50% or 40% of basic salary plus DA depending on the city. The calculator shows all three so you can see which one limits you.'] },
    { h: 'Worked example', p: ['With basic + DA of ₹40,000 a month, HRA of ₹20,000 and rent of ₹18,000 in a metro: HRA received is ₹2,40,000 a year; rent minus 10% of salary is ₹1,68,000; 50% of salary is ₹2,40,000. The least is ₹1,68,000, so that amount is exempt and ₹72,000 of HRA is taxable.'] },
    { h: 'Tips and limits', p: ['- Keep rent receipts and the rent agreement. Give the landlord’s PAN if yearly rent is above ₹1 lakh.', '- No HRA exemption is available under the new tax regime.', '- Rules on which cities count as metros changed from FY 2026-27, so choose the option that matches the year you are calculating for.'] }
  ] },
  'gratuity-calculator': { sections: [
    { h: 'What this calculator does', p: ['Gratuity is a lump sum an employer pays when you leave after long service. This calculator applies the standard formula for employees covered by the Payment of Gratuity Act and the variant for those who are not.'] },
    { h: 'Worked example', p: ['With a last drawn basic + DA of ₹50,000 and 8 years 4 months of service, 8 years are counted. Gratuity = 50,000 × 15 × 8 ÷ 26 = about ₹2,30,769. At 8 years 6 months, 9 years would be counted and the amount would rise to about ₹2,59,615.'] },
    { h: 'Tips and limits', p: ['- Gratuity is generally payable only after five years of continuous service; exceptions include death or disablement.', '- The amount is capped at ₹20 lakh. Check your offer letter or company policy for any better terms.', '- Rules for fixed-term employees are changing under the new labour codes; confirm with your HR team.'] }
  ] }
};
