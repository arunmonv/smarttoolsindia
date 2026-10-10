// On-page educational content for finance calculators (set A).
// Worked-example figures were computed with the same formulas as the calculators.
module.exports = {
  'emi-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `An EMI (equated monthly instalment) is the fixed amount you pay your lender every month until a loan is cleared. Each EMI contains two parts: interest on the outstanding balance and a repayment of the principal. This calculator takes a loan amount, an annual interest rate and a tenure, and returns the monthly EMI, the total interest you will pay over the loan, and the total amount repaid.`,
        `It works for any standard reducing-balance loan, whether it is a home loan, car loan, education loan or personal loan. Use it before you apply, to check whether an EMI fits your monthly budget, and again when a lender quotes you a different rate or tenure, so that you can see what the change really costs.`
      ] },
      { h: 'The formula explained', p: [
        `The calculator uses the standard reducing-balance formula: EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1).`,
        `- P is the principal, the amount you borrow, in rupees.`,
        `- r is the monthly interest rate. It is the annual rate divided by 12 and then by 100. A 9% annual rate becomes 0.0075 per month.`,
        `- n is the number of monthly instalments. A 10-year loan has 120 instalments.`,
        `Because interest is charged only on the balance still owed, the early EMIs are mostly interest and the later ones are mostly principal. Total interest is simply EMI × n minus the original principal. If the rate is entered as 0, the calculator divides the principal equally across all months.`
      ] },
      { h: 'Worked example', p: [
        `Take the default values: a loan of ₹10,00,000 at 9% per year for 10 years.`,
        `Monthly rate r = 9 ÷ 12 ÷ 100 = 0.0075, and n = 10 × 12 = 120 instalments. Putting these into the formula gives an EMI of about ₹12,668 per month.`,
        `Over 120 months you repay 120 × ₹12,668, which is about ₹15,20,109. Subtracting the ₹10,00,000 principal leaves total interest of about ₹5,20,109.`,
        `Now change only the tenure. At 5 years the EMI rises to about ₹20,758, but total interest falls to about ₹2,45,501. At 15 years the EMI drops to about ₹10,143, but total interest climbs to about ₹8,25,680. The same loan can therefore cost anywhere from roughly ₹2.5 lakh to ₹8.3 lakh in interest, depending only on how long you take to repay it.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Do not judge a loan only by its EMI. A low EMI usually means a long tenure and a much higher total interest bill.`,
        `- Enter the rate as an annual percentage, not a monthly one. Typing 0.75 instead of 9 will understate your EMI heavily.`,
        `- Many lenders suggest keeping total EMIs across all your loans within a moderate share of your monthly take-home income. Check what your own lender uses when assessing eligibility.`,
        `- If your loan has a floating rate, the EMI or the tenure can change when the lender revises its benchmark rate. Run the calculator again with a slightly higher rate to see how much room you have.`,
        `- Part-prepayments reduce the outstanding principal, so they cut future interest. Use the lower tenure or lower EMI option your lender offers and compare both.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The result assumes a fixed rate for the entire tenure, equal monthly payments, and that the first EMI falls one month after disbursal. It does not include processing fees, GST on fees, insurance premiums, pre-EMI interest during construction, or prepayment charges. Banks may also round the EMI or compute interest by days, so your sanction letter can differ by a small amount. Treat the output as an estimate and confirm the repayment schedule with your lender.`
      ] }
    ],
    faqs: [
      ['What is the difference between a flat rate and a reducing-balance rate?', 'A flat rate charges interest on the original loan amount for the entire tenure, while a reducing-balance rate charges interest only on what is still outstanding. A flat rate looks lower but is effectively much higher. This calculator uses the reducing-balance method, so convert any flat rate quote before comparing.'],
      ['Why is most of my early EMI interest?', 'Interest is calculated on the full outstanding balance, which is highest at the start. As you repay principal, the balance and the monthly interest fall, so a growing share of each fixed EMI goes to principal.'],
      ['Will prepaying a loan reduce my EMI?', 'It can reduce either the EMI or the remaining tenure, depending on what your lender allows. Reducing the tenure usually saves more total interest. Ask your lender about prepayment rules and any charges before paying a lump sum.'],
      ['Does this calculator work for a loan with a moratorium or pre-EMI period?', 'Not directly. It assumes repayment starts immediately in equal instalments. For loans with a moratorium, interest may accumulate before the first full EMI, so the real cost can be higher than shown.']
    ]
  },

  'personal-loan-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `A personal loan is an unsecured loan, which means you do not pledge any asset as security. Because the lender carries more risk, interest rates are usually higher than for home or car loans, and a processing fee is normally charged upfront. This calculator shows your monthly EMI, the total interest, the processing fee including GST, and the total cost of the loan once the fee is added.`,
        `It is useful when you are comparing offers from banks and NBFCs, because the advertised rate alone does not show the full cost. Two loans with the same interest rate can differ noticeably once fees are counted.`
      ] },
      { h: 'The formula explained', p: [
        `The EMI uses the reducing-balance formula: EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is the number of months.`,
        `The processing fee is calculated as: loan amount × fee percentage × (1 + GST rate). The default GST on the fee is 18%, and you can edit it under the advanced assumptions if the rule changes. The total cost of the loan is the sum of all EMIs plus this fee.`,
        `Inputs: loan amount in rupees, annual interest rate, tenure in years (you can use half years, such as 2.5), processing fee as a percentage of the loan, and GST on the fee.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: a loan of ₹5,00,000 at 12% per year for 3 years, with a 2% processing fee and 18% GST on the fee.`,
        `Monthly rate = 12 ÷ 12 ÷ 100 = 0.01 and n = 36. The EMI works out to about ₹16,607.`,
        `Total repayment over 36 months is 36 × ₹16,607, about ₹5,97,858, so interest is about ₹97,858.`,
        `Processing fee: ₹5,00,000 × 2% = ₹10,000, plus 18% GST of ₹1,800, which is ₹11,800.`,
        `Total cost of the loan = ₹5,97,858 + ₹11,800 = about ₹6,09,658. In other words, you pay roughly ₹1.1 lakh above the amount borrowed. Note also that if the fee is deducted from the disbursed amount, you actually receive about ₹4,88,200 while still paying EMI on ₹5,00,000. Ask your lender how the fee is collected.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Compare the total cost, not just the rate. Add the processing fee, GST and any insurance bundled with the loan.`,
        `- Borrow only what you need. Because personal loans are costly, each extra ₹1 lakh adds noticeable interest.`,
        `- Check the prepayment and foreclosure terms before signing. Some lenders allow free part-payments after a few EMIs, others charge a percentage of the outstanding amount.`,
        `- Your credit score influences the rate you are offered. A higher score generally gives you more room to negotiate, so check your credit report for errors before applying.`,
        `- Avoid taking a personal loan to fund investments or to repay another loan without comparing costs. The interest you pay may exceed what you can expect to earn.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator assumes a fixed rate, equal monthly instalments and a single upfront fee. It does not include late payment charges, loan insurance, stamp duty, cheque bounce fees, or a foreclosure charge. Actual offers depend on the lender, your income and your credit profile. Check the key fact statement from your lender for the exact annual percentage rate and charges.`
      ] }
    ],
    faqs: [
      ['Is the processing fee refundable?', 'In most cases it is not refundable, even if you close the loan early or cancel after sanction. Confirm the lender’s policy in the loan agreement before paying.'],
      ['What is a good tenure for a personal loan?', 'There is no single right answer. A shorter tenure means a higher EMI but much lower interest. Choose the shortest tenure whose EMI you can pay comfortably after your regular expenses.'],
      ['Why does the total cost differ from total EMI payments?', 'Total EMI payments cover principal plus interest only. The total cost shown here also adds the processing fee and its GST, which are paid separately from the EMIs.'],
      ['Can I use this for a loan with a flat interest rate?', 'Not directly. Some lenders quote a flat rate, which is charged on the original amount. Ask for the equivalent reducing-balance rate, or the annual percentage rate, and enter that figure here.']
    ]
  },

  'home-loan-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `A home loan is usually the biggest debt a household takes on, and the repayment runs for 15 to 30 years. This calculator starts from the property price and your down payment percentage, works out the loan you would need, and then gives the monthly EMI, total interest and total outflow, including the down payment.`,
        `Use it to test different down payments, rates and tenures before approaching a bank or housing finance company. It helps you see how much of the cost is the house and how much is interest.`
      ] },
      { h: 'The formula explained', p: [
        `Loan amount = property price × (1 − down payment % ÷ 100).`,
        `EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is the number of months.`,
        `Total interest = EMI × n − loan amount. The total payment shown adds the down payment back, so it represents everything you spend on the property financing, excluding registration, stamp duty and other charges.`,
        `Inputs: property price in rupees, down payment as a percentage, annual interest rate, and tenure in years.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: property price ₹50,00,000, down payment 20%, rate 8.75% per year, tenure 20 years.`,
        `Down payment = ₹10,00,000, so the loan is ₹40,00,000. Monthly rate = 8.75 ÷ 1200 = 0.0072917 and n = 240.`,
        `The EMI comes to about ₹35,348. Over 240 months you repay about ₹84,83,623, which means total interest is about ₹44,83,623. Adding the ₹10,00,000 down payment, the total outflow is about ₹94,83,623.`,
        `In this example the interest is more than the amount borrowed. If you shorten the tenure to 15 years, the EMI rises to about ₹39,978, but total interest falls to about ₹31,96,030, a saving of roughly ₹12.9 lakh for an extra ₹4,630 per month.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Budget for costs beyond the down payment: stamp duty, registration, GST on under-construction property where applicable, brokerage, legal checks and the lender's processing fee. These can add a meaningful percentage to the price.`,
        `- Home loan rates are mostly floating. A rise of even 0.5% in the rate changes the EMI or tenure, so test a higher rate before committing.`,
        `- Regular part-prepayments, especially in the first half of the loan, cut interest sharply because the balance is high early on. Floating-rate home loans for individuals generally do not carry a prepayment penalty, but confirm with your lender.`,
        `- If you are buying with a co-applicant, check how income, tax benefits and liability are shared.`,
        `- Under the old tax regime, principal repayment may qualify for a deduction under Section 80C and interest under Section 24(b), subject to limits. Tax rules change, so check the latest limits and which regime you have chosen.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator assumes one fixed rate for the whole tenure, whereas most home loans have a floating rate that changes over time. It does not include pre-EMI interest on part-disbursed loans, loan insurance, processing fees, or property taxes and maintenance. The maximum loan a lender offers depends on its loan-to-value limits, your income and credit score. Use the figures for planning, and ask your lender for an amortisation schedule before you commit.`
      ] }
    ],
    faqs: [
      ['What is pre-EMI interest?', 'For an under-construction property, the lender releases money in stages. Until full disbursal, you usually pay interest only on the amount released, called pre-EMI interest. Full EMIs begin later. This calculator does not include that phase.'],
      ['How do I reduce the total interest on a home loan?', 'Choose the shortest tenure you can afford, make a larger down payment, and put surplus money into part-prepayments. Also compare rates periodically, as some lenders allow a rate reduction or balance transfer.'],
      ['Is a higher down payment always better?', 'It lowers the loan and interest, but it also uses up your savings. Keep an emergency fund and money for registration and moving costs before deciding how much to put down.'],
      ['Why does the total payment look so large?', 'Over 20 years the interest accumulates on a large balance. The total payment is the property price portion plus all interest, so it can be nearly double the price. This is why shorter tenures and prepayments matter.']
    ]
  },

  'car-bike-loan-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `Vehicle loans are shorter and smaller than home loans, but the cost of interest still adds up. This calculator takes the on-road price of a car or two-wheeler, your down payment percentage, the loan interest rate and tenure, and gives the loan amount, monthly EMI, total interest and the total cost including the down payment.`,
        `Use it before visiting the showroom, so that you know what EMI you can afford and can compare the dealer's finance offer with an offer from your own bank.`
      ] },
      { h: 'The formula explained', p: [
        `Loan amount = on-road price × (1 − down payment % ÷ 100).`,
        `EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is the number of months (tenure in years × 12).`,
        `Total interest = EMI × n − loan amount, and total cost = EMI × n + down payment.`,
        `The on-road price is the ex-showroom price plus registration, road tax, insurance and other charges such as handling or extended warranty. Use the on-road figure, because that is what you actually pay.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: on-road price ₹8,00,000, down payment 20%, interest rate 9.5% per year, tenure 5 years.`,
        `Down payment = ₹1,60,000, so the loan is ₹6,40,000. Monthly rate = 9.5 ÷ 1200 = 0.0079167 and n = 60.`,
        `The EMI is about ₹13,441. Total repayment is 60 × ₹13,441, about ₹8,06,471, so interest is about ₹1,66,471. Adding the down payment, the total cost of owning the vehicle on finance is about ₹9,66,471, which is about ₹1.66 lakh above the sticker price.`,
        `If you choose a 3-year tenure instead, the EMI is about ₹20,501 and total interest drops to about ₹98,039, saving roughly ₹68,000 in interest.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Calculate on the on-road price, not the ex-showroom price. Using the lower figure understates the loan you will need.`,
        `- Vehicles lose value over time, unlike property. A very long tenure can leave you owing more than the vehicle is worth, so a shorter tenure is generally safer.`,
        `- Check whether the dealer's quoted rate is flat or reducing-balance. A flat rate that looks low can equal a much higher reducing-balance rate.`,
        `- Ask whether insurance, extended warranty or accessories are being added to the loan amount. Financing them raises your interest cost.`,
        `- Compare at least two or three lenders, including your own bank, and ask about processing fees and foreclosure charges.`,
        `- Remember running costs: fuel, insurance renewals, servicing and parking are separate from the EMI.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The result assumes a fixed rate, equal monthly instalments and no processing fee, documentation charges or foreclosure charges. The maximum loan available depends on the lender's rules for the vehicle type, and many lenders finance only a share of the vehicle's price. Two-wheeler loans often carry higher rates than car loans. Treat the numbers as an estimate and confirm the exact terms in the lender's sanction letter.`
      ] }
    ],
    faqs: [
      ['Can I get 100% finance on a car or bike?', 'Some lenders offer very high finance on specific models, but policies vary and a higher loan usually means a higher cost. Ask the lender for the maximum loan-to-value they allow for your vehicle and profile.'],
      ['Is a used vehicle loan calculated differently?', 'The EMI formula is the same, but rates are often higher and tenures shorter for used vehicles. Enter the rate and tenure offered by your lender for a second-hand loan.'],
      ['Should I take a longer tenure to get a lower EMI?', 'A longer tenure lowers the EMI but increases the total interest, and the vehicle depreciates meanwhile. Pick the shortest tenure that keeps your EMI comfortable.'],
      ['Does the calculator include hypothecation or insurance costs?', 'No. Insurance and registration are normally part of the on-road price you enter, but extra charges such as hypothecation endorsement, processing fees or a loan protection plan are not included.']
    ]
  },

  'savings-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `This calculator estimates how much a regular monthly saving, with or without an initial lump sum, can grow to over a period of time at an assumed annual return. It is suited to planning with a recurring deposit, a mutual fund SIP, a Public Provident Fund contribution or any similar monthly investing habit.`,
        `It shows three numbers: the total amount you invest, the estimated returns, and the maturity value. Use it to set a savings target, such as a down payment, a child's education fund or a retirement corpus, and to see how time and the monthly amount affect the outcome.`
      ] },
      { h: 'The formula explained', p: [
        `The calculator treats the return as compounded monthly. With r as the monthly rate (annual rate ÷ 12 ÷ 100) and n as the number of months:`,
        `Maturity value = lump sum × (1 + r)^n + monthly saving × ((1 + r)^n − 1) ÷ r × (1 + r).`,
        `The final (1 + r) factor applies when each deposit is made at the start of the month, which is the default. If you choose end-of-month deposits under the advanced setting, that factor is dropped and each deposit earns one month less interest. If the rate is 0, the maturity value is simply the sum of all deposits.`,
        `Inputs: monthly savings in rupees, an optional initial lump sum, the expected annual return in percent, the period in years, and the deposit timing.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: ₹10,000 per month, no lump sum, 8% expected return per year, 10 years, deposits at the start of each month.`,
        `Monthly rate = 8 ÷ 1200 = 0.0066667 and n = 120. Total invested = 120 × ₹10,000 = ₹12,00,000.`,
        `The estimated maturity value is about ₹18,41,657, so estimated returns are about ₹6,41,657. If deposits are made at month end instead, the maturity value is about ₹18,29,460.`,
        `Now extend the period to 20 years with the same monthly amount and rate. You invest ₹24,00,000 but the estimated value is about ₹59,29,472. Doubling the time more than triples the final amount, because the early deposits keep compounding. This is the effect of starting early.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- The return you enter is an assumption, not a promise. Market-linked investments such as equity mutual funds move up and down, and actual results can be lower or higher than the figure used here.`,
        `- Use a realistic rate. Fixed products such as recurring deposits have a stated rate, whereas equity returns vary by period. Avoid entering an optimistic number just to see a bigger result.`,
        `- Inflation reduces what a rupee buys in future. A corpus of ₹18 lakh in ten years will not have the purchasing power of ₹18 lakh today.`,
        `- Taxes and charges are not deducted. Interest from deposits and gains from investments may be taxable, and funds have expense ratios, so net returns are lower. Check the latest tax rules for your product.`,
        `- Increase your monthly amount when your income rises. Even a modest yearly step-up makes a visible difference over long periods.`,
        `- Keep an emergency fund separate, so you are not forced to withdraw long-term investments early.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator assumes a constant return, fixed monthly deposits and monthly compounding for the whole period. Real investments rarely behave this way. It does not model step-up contributions, withdrawals, taxes, exit loads, inflation, or the different compounding rules of products such as PPF or bank deposits. It is a planning aid and not a forecast or investment advice.`
      ] }
    ],
    faqs: [
      ['What is the difference between a SIP and a recurring deposit?', 'Both involve fixed monthly investments. A recurring deposit earns a fixed interest rate set by the bank, while a SIP invests in a market-linked fund, so its value can fall as well as rise. This calculator applies one assumed rate to either.'],
      ['Which expected return should I enter?', 'Use the stated rate for fixed products. For market-linked products, use a conservative assumption and try a few values, such as a lower and a higher case, to see the range of outcomes.'],
      ['Why is the maturity value different from my bank or fund statement?', 'Banks may compound quarterly rather than monthly, funds may have charges, and real returns vary every month. The calculator uses one rate compounded monthly, so small to large differences are normal.'],
      ['Can I include a lump sum I already have?', 'Yes. Enter it in the initial lump sum field. It grows for the whole period at the same assumed rate, in addition to the monthly savings.']
    ]
  },

  'loan-comparison-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `When two lenders quote different interest rates and tenures for the same loan amount, it is hard to tell which offer is cheaper. This calculator lines up two loans side by side and shows the monthly EMI and total interest for each, then states which one saves more interest and by how much.`,
        `It is helpful when choosing between banks, deciding whether a slightly higher rate with a shorter tenure is worth it, or checking if a balance transfer to a new lender makes sense for a new loan of the same size.`
      ] },
      { h: 'The formula explained', p: [
        `For each loan, the EMI is calculated with the reducing-balance formula: EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1). Here P is the common loan amount, r is the monthly rate (annual rate ÷ 12 ÷ 100) and n is that loan's number of months.`,
        `Total interest = EMI × n − P. The difference between the two interest totals is shown as the result. A loan with a lower EMI is not necessarily cheaper, because a longer tenure collects interest for more months.`,
        `Inputs: the loan amount shared by both loans, and the annual rate and tenure for each of Loan A and Loan B.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: loan of ₹20,00,000. Loan A is 8.5% for 20 years. Loan B is 9.25% for 15 years.`,
        `Loan A: monthly rate 0.0070833, n = 240, EMI about ₹17,356. Total repayment is about ₹41,65,552, so interest is about ₹21,65,552.`,
        `Loan B: monthly rate 0.0077083, n = 180, EMI about ₹20,584. Total repayment is about ₹37,05,092, so interest is about ₹17,05,092.`,
        `Although Loan B has the higher rate, its shorter tenure makes it cheaper overall: Loan B saves about ₹4,60,460 in interest. The trade-off is a monthly EMI that is about ₹3,228 higher.`,
        `To isolate the effect of the rate, put Loan B on a 20-year tenure as well. Its EMI becomes about ₹18,317 and its interest about ₹23,96,161, which is about ₹2,30,609 more than Loan A. So at the same tenure the lower rate wins clearly. The best choice depends on which EMI you can sustain.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Compare like with like. To judge rates fairly, use the same tenure for both loans. To judge tenures, use the same rate.`,
        `- Do not choose only on the lowest EMI. Check the total interest line as well.`,
        `- Add fees yourself. Processing fees, legal charges and insurance are not included, and a lender with a lower rate may charge more upfront.`,
        `- Check whether each rate is fixed or floating and how often it resets. A floating rate can move during the loan, which changes the comparison.`,
        `- Ask about prepayment terms. A loan you can prepay freely may be better than a cheaper one that penalises early closure.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator assumes both loans have the same principal, fixed rates and equal monthly instalments. It does not account for fees, taxes or tax benefits, rate changes, prepayments or the time value of money. A rupee saved in the future is worth less than a rupee today, so a modest interest saving over many years may matter less than it looks. Use the result as one input to your decision, and read each lender's offer document in full.`
      ] }
    ],
    faqs: [
      ['Can I compare loans with different amounts?', 'This tool uses one common loan amount for both loans. To compare different amounts, run each loan in the EMI calculator separately and compare total cost and EMI against your budget.'],
      ['Should I switch lenders if another bank offers a lower rate?', 'Compare the saving in interest against switching costs such as processing fees, legal charges and any foreclosure fee on the old loan. Ask your current lender whether it will match the offer.'],
      ['Why does the shorter loan with a higher rate cost less?', 'Interest is charged on the balance for every month it remains outstanding. A shorter tenure clears the principal sooner, so interest accrues for fewer months, which can outweigh a somewhat higher rate.'],
      ['What if the result says the total interest is the same?', 'It means the two loans cost the same in interest under these inputs. Then your choice depends on EMI affordability, fees, and flexibility such as prepayment and rate type.']
    ]
  },

  'gold-jewellery-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `The price on a gold jewellery bill is more than weight multiplied by the day's rate. Jewellers add a wastage charge, making charges, and GST. This calculator breaks the bill into its parts so that you can check an estimate before you shop, or verify a quote you have received.`,
        `It shows the gold value, the wastage amount, the making charges, the GST on gold and making, and the final price. It is useful for comparing jewellers, since some quote a high making charge with low wastage and others the reverse.`
      ] },
      { h: 'The formula explained', p: [
        `The calculator works in this order:`,
        `- Gold value = weight in grams × gold rate per gram for your purity (for example the 22K rate).`,
        `- Wastage = gold value × wastage %. Wastage covers gold lost during crafting and is charged on top.`,
        `- Making charges = (gold value + wastage) × making %. The making charge is applied on the value after wastage in this calculator.`,
        `- GST = (gold value + wastage) × GST on gold, plus making charges × GST on making. The defaults are 3% on gold and 5% on making, and both can be edited under advanced assumptions.`,
        `- Final price = gold value + wastage + making + GST.`,
        `Enter the rate for the purity you are buying. Do not enter the 24K rate for 22K jewellery, or your estimate will be too high.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: 10 grams, a rate of ₹7,000 per gram, 8% wastage, 12% making charges, 3% GST on gold and 5% GST on making.`,
        `Gold value = 10 × ₹7,000 = ₹70,000. Wastage = 8% of ₹70,000 = ₹5,600, so gold plus wastage is ₹75,600.`,
        `Making charges = 12% of ₹75,600 = ₹9,072.`,
        `GST on gold and wastage = 3% of ₹75,600 = ₹2,268. GST on making = 5% of ₹9,072 = ₹453.60. Total GST is about ₹2,722.`,
        `Final price = ₹75,600 + ₹9,072 + ₹2,722 = about ₹87,394. The jewellery therefore costs about ₹17,394, or nearly 25%, more than the raw gold value of ₹70,000.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Ask the jeweller how making charges are calculated: a percentage of gold value, a fixed amount per gram or a flat amount per piece. The result can differ greatly, and this calculator uses a percentage.`,
        `- Use the correct purity rate. 22K gold is 91.6% pure and 24K is 99.9%, so their rates per gram differ.`,
        `- Stone, enamel or diamond weight is not gold. Ask for the net gold weight and a separate price for stones, and do not enter gross weight.`,
        `- Compare the final price from at least two jewellers, not just the making charge.`,
        `- Ask for a bill showing purity, net weight, rate, making charges and GST. Look for BIS hallmarking on the piece.`,
        `- Understand the buyback and exchange policy in advance, since resale value usually excludes making charges and may deduct wastage.`
      ] },
      { h: 'Assumptions and limits', p: [
        `Jewellers use different methods. Some charge wastage and making on different bases, some offer discounts on making, and some add hallmarking fees. Gold rates also change through the day, and local rates differ by city. GST rates can be revised, so check the current rate on gold and on making charges. The calculator gives an estimate to compare against a quote, not a binding price.`
      ] }
    ],
    faqs: [
      ['What is the difference between 22K and 24K gold?', '24K is nearly pure gold and is too soft for most ornaments. 22K contains about 91.6% gold mixed with other metals for strength, so it is the common choice for jewellery and is priced lower per gram.'],
      ['Why do making charges differ between jewellers?', 'Making charges depend on design complexity, whether the piece is handmade or machine-made, and the jeweller’s pricing policy. Intricate designs usually have higher charges, and these are often negotiable.'],
      ['Do I get back the making charges when I sell the jewellery?', 'Usually not. When selling, jewellers generally pay for the gold content based on purity and the current rate, and making charges and often wastage are not refunded. Confirm the exchange policy before buying.'],
      ['What is BIS hallmarking and why does it matter?', 'Hallmarking is a purity certification mark by the Bureau of Indian Standards. It helps verify the stated carat of the jewellery. Check the current hallmarking rules and look for the mark on your piece.']
    ]
  },

  'gold-loan-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `A gold loan lets you borrow against gold ornaments or coins, which the lender keeps as security until you repay. Approval is quick and the interest rate is generally lower than that of an unsecured personal loan. This calculator estimates how much you could be offered, based on your gold's weight and purity, and what the loan will cost.`,
        `It shows the value of your gold, the eligible loan amount, the interest payable and the total you must repay. Use it to compare how much different lenders could lend and what you will owe at the end of the term.`
      ] },
      { h: 'The formula explained', p: [
        `- Gold value = weight in grams × 24K rate per gram × (carat ÷ 24). A 22K item is worth 22/24 of the 24K rate, so enter the 24K rate and select the purity.`,
        `- Loan amount = gold value × loan-to-value (LTV) %. LTV is the share of the gold's value the lender is willing to finance. The calculator caps LTV at 100%.`,
        `- Interest = loan × annual rate ÷ 100 × months ÷ 12. This is simple interest with a single repayment of principal and interest at the end (bullet repayment).`,
        `- Total to repay = loan amount + interest.`,
        `Lenders may pay on the net weight of pure gold only, excluding stones and other deductions, so use the net gold weight. RBI sets limits on LTV for gold loans and these can change, so check the latest rule from your lender or RBI.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: 50 grams of 22K gold, a 24K rate of ₹7,500 per gram, LTV 75%, interest 10% per year, tenure 12 months.`,
        `Gold value = 50 × ₹7,500 × 22 ÷ 24 = about ₹3,43,750.`,
        `Eligible loan = 75% of ₹3,43,750 = about ₹2,57,813.`,
        `Interest for 12 months = ₹2,57,813 × 10% = about ₹25,781.`,
        `Total to repay = ₹2,57,813 + ₹25,781 = about ₹2,83,594 at the end of one year.`,
        `If the tenure were 6 months at the same rate, the interest would be about ₹12,891, because simple interest scales with time. In practice lenders may charge monthly, require interest to be paid regularly, or use a different slab, so compare your lender's actual scheme.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Use net gold weight. Stones, enamel and hallmarking may be excluded, and the lender will assess only the gold content.`,
        `- Compare lenders on the total cost. Look at the interest rate, processing fee, valuation charges, and any penalty for early or late closure.`,
        `- Understand the repayment type. Some schemes allow monthly interest with principal at the end, others use EMIs or a one-time bullet payment.`,
        `- Gold prices move. If the price falls sharply while LTV is high, a lender can ask for more security or may auction the gold if you default. Do not borrow the maximum if you are unsure of repayment.`,
        `- Confirm how the gold is stored and insured and obtain a written receipt listing the items and weights.`,
        `- Avoid unregulated lenders. Choose banks and RBI-regulated NBFCs and read the loan agreement.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator uses the rate you enter, not a live market price, and applies simple interest with a single repayment at the end. It does not include processing or valuation fees, GST on fees, penal interest, or slab-based rates that change with the tenure. Lenders may apply their own gold valuation, deductions and LTV limits, so the actual offer can be lower than shown. Check the latest rules and charges with your lender.`
      ] }
    ],
    faqs: [
      ['What happens if I cannot repay a gold loan?', 'The lender typically sends notices and, if the loan stays unpaid, may auction the gold to recover dues, following its policy and applicable regulations. Any surplus after recovery should be returned to you. Speak to the lender early if you expect difficulty.'],
      ['Can I repay a gold loan before the tenure ends?', 'Many lenders allow early repayment, and some charge a fee or minimum interest period. Check the terms before signing, since early closure can save interest if there is no penalty.'],
      ['Why is the loan amount less than the value of my gold?', 'Lenders keep a safety margin against price falls. The loan-to-value ratio limits the loan to a percentage of the gold’s value, so you receive less than the full amount.'],
      ['Does gold loan interest differ from a bank EMI loan?', 'Yes, often. Many gold loans accrue interest on the outstanding amount for the actual number of days and may have bullet or monthly-interest repayment. This calculator uses simple interest for the full tenure, so treat it as an approximation.']
    ]
  },

  'roi-calculator': {
    sections: [
      { h: 'What this calculator does', p: [
        `Return on investment (ROI) tells you how much you gained or lost compared with what you put in. This calculator takes the amount invested, the final value and the holding period, and returns the net profit, the total ROI, and the annualised return, also called CAGR (compound annual growth rate).`,
        `It can be used for any investment where you know the start and end values, such as shares, mutual fund units, property, gold, a business project, or equipment purchase. The annualised figure helps you compare investments held for different lengths of time.`
      ] },
      { h: 'The formula explained', p: [
        `- Net profit = final value − amount invested.`,
        `- Total ROI (%) = (final value − amount invested) ÷ amount invested × 100.`,
        `- CAGR (%) = ((final value ÷ amount invested)^(1 ÷ years) − 1) × 100.`,
        `ROI is a simple total figure and ignores time. CAGR converts the total growth into the single steady yearly rate that would produce the same result, so a 50% gain over 3 years is not the same as 50% in 1 year. Holding period can be a fraction of a year, such as 2.5. A negative ROI shows a loss, and CAGR will be negative too.`
      ] },
      { h: 'Worked example', p: [
        `Default inputs: ₹1,00,000 invested, final value ₹1,50,000, held for 3 years.`,
        `Net profit = ₹1,50,000 − ₹1,00,000 = ₹50,000.`,
        `ROI = 50,000 ÷ 1,00,000 × 100 = 50%.`,
        `CAGR = (1.5)^(1/3) − 1 = about 14.47% per year.`,
        `Note the difference. Dividing the 50% by 3 would give 16.67% per year, which overstates the result because it ignores compounding. The CAGR of about 14.5% is the right way to express the yearly rate.`,
        `Compare a second investment: ₹1,00,000 growing to ₹2,00,000 in 10 years has an ROI of 100%, which looks better than 50%, but its CAGR is only about 7.18% per year. The first investment grew faster per year, even though its total ROI was lower.`
      ] },
      { h: 'Tips and common mistakes', p: [
        `- Always compare investments using CAGR when their holding periods differ. ROI alone can mislead.`,
        `- Include all costs in the amount invested: brokerage, stamp duty, registration, maintenance or repair costs. Include extra income such as rent or dividends in the final value if you want the full return.`,
        `- Do not use CAGR for investments with several deposits or withdrawals over time, such as a SIP. Those need an XIRR-type calculation, since the money was invested at different dates.`,
        `- Check the dates. A holding period of 18 months should be entered as 1.5 years.`,
        `- Past returns do not indicate future returns. A high CAGR from a short period can be an accident of timing.`,
        `- Think about risk. Two investments with the same CAGR can have very different volatility and chances of loss.`
      ] },
      { h: 'Assumptions and limits', p: [
        `The calculator assumes a single investment at the start and a single final value at the end. It does not adjust for inflation, taxes, exit loads or interim cash flows. Real returns after inflation and tax are lower than the figures shown. Taxes on capital gains depend on the asset type and holding period, so check the current rules or consult a tax professional. This is an arithmetic tool and not investment advice.`
      ] }
    ],
    faqs: [
      ['What is a good ROI?', 'There is no universal number. It depends on the risk, the time period and the alternatives available. Compare the annualised return with options such as fixed deposits, inflation and similar investments rather than judging the figure in isolation.'],
      ['Can ROI be negative?', 'Yes. If the final value is lower than the amount invested, the net profit and ROI are negative, which indicates a loss. The CAGR is negative as well.'],
      ['How do I account for inflation?', 'Subtract the average inflation rate from the CAGR for a rough real return, or adjust the final value to today’s money. For a precise figure use the compounded relationship between the nominal return and inflation.'],
      ['Why does CAGR differ from simple average return?', 'An average of yearly returns ignores compounding and the order of gains and losses. CAGR measures the steady yearly rate that links the starting and ending values, so it is the more accurate summary of long-term growth.']
    ]
  }
};
