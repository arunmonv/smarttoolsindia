// Guide articles, batch 1 (plain text; "- " prefix = bullet). Figures verified with node.
module.exports = [
  {
    "slug": "how-emi-is-calculated",
    "title": "How EMI Is Calculated: Formula and Example",
    "desc": "Learn the EMI formula, how each instalment splits into interest and principal, and see a verified worked example for a ₹5 lakh loan.",
    "related": [
      "emi-calculator",
      "home-loan-calculator",
      "personal-loan-calculator"
    ],
    "intro": "An EMI (equated monthly instalment) is the fixed amount you pay every month until a loan is cleared. It looks like a single number, but it is built from three inputs: the amount borrowed, the interest rate and the tenure.",
    "sections": [
      {
        "h": "What an EMI actually contains",
        "p": [
          "Every EMI has two parts: interest on the balance you still owe, and a repayment of part of the principal. The total of the two stays the same each month, but the mix changes. Early on, most of the payment is interest because the outstanding balance is large. Later, as the balance falls, interest shrinks and more of the same EMI goes towards principal.",
          "This is why a loan feels slow to reduce in the first few years. It is not a trick; it is how interest on a reducing balance works."
        ]
      },
      {
        "h": "The EMI formula",
        "p": [
          "The standard formula used by banks and by most calculators is:",
          "EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)",
          "- P is the loan amount (principal).",
          "- r is the monthly interest rate, which is the annual rate divided by 12 and by 100. A 10% yearly rate becomes 10 ÷ 12 ÷ 100 = 0.008333.",
          "- n is the number of monthly instalments. A 5-year loan has n = 60.",
          "The formula finds the single fixed payment that, with interest charged each month on the remaining balance, brings the balance to exactly zero after n payments."
        ]
      },
      {
        "h": "A worked example",
        "p": [
          "Take a loan of ₹5,00,000 at 10% a year for 5 years (60 months). Here r = 0.008333 and n = 60. Putting these into the formula gives an EMI of about ₹10,624.",
          "Over 60 months you would pay 60 × ₹10,623.52 = about ₹6,37,411. Subtracting the ₹5,00,000 borrowed, the total interest is about ₹1,37,411, or roughly 27% of the amount borrowed.",
          "Now look at the first instalment. Interest for month one is ₹5,00,000 × 0.008333 = ₹4,167. The remaining ₹10,624 − ₹4,167 = ₹6,457 reduces the principal, leaving a balance of about ₹4,93,543. Month two charges interest on this smaller balance, so slightly more of the EMI goes to principal. This repeats until the last instalment."
        ]
      },
      {
        "h": "How tenure changes the cost",
        "p": [
          "A longer tenure lowers the EMI but raises the total interest, because you owe money for more months. A shorter tenure does the opposite. For the same ₹5,00,000 at 10%, stretching the loan from 5 years to 7 years reduces the monthly payment but adds interest for 24 more months.",
          "When choosing a tenure, look at two numbers together: the EMI you can comfortably pay each month, and the total interest over the life of the loan. A common check is to keep all your EMIs within a manageable share of monthly income, but the right level depends on your own expenses."
        ]
      },
      {
        "h": "Why the rate matters more on large loans",
        "p": [
          "On a long loan, a small difference in rate adds up. On a ₹50,00,000 home loan over 20 years, an interest rate of 8.5% gives an EMI of about ₹43,391, while 9% gives about ₹44,986. That is roughly ₹1,595 more every month, or close to ₹3.8 lakh over 240 months.",
          "Home loans are often linked to an external benchmark such as the repo rate, so your rate may change during the loan. When the rate changes, lenders usually adjust either your EMI or your tenure. Check which approach your lender follows."
        ]
      },
      {
        "h": "Points to remember",
        "p": [
          "- The formula assumes interest on a reducing balance and equal monthly payments. Some products, such as flat-rate loans, work differently.",
          "- Processing fees, insurance and other charges are not part of the EMI formula but do add to your total cost.",
          "- Actual lender schedules may differ slightly because of rounding, the number of days in a month or the date of your first instalment.",
          "- Confirm the final EMI, rate and charges in your sanction letter or the lender's loan schedule before you sign.",
          "You can test different amounts, rates and tenures with the EMI calculator on this site to see how the numbers move."
        ]
      },
      {
        "h": "Common mistakes when reading an EMI",
        "p": [
          "The first mistake is treating the monthly EMI as the cost of the loan. The cost is the total of all EMIs plus fees, minus the amount borrowed. A low EMI stretched over a long tenure can hide a large interest bill.",
          "The second is using the wrong rate. If a lender quotes a yearly rate, divide it by 12 for the monthly rate. Typing 10 instead of 0.8333 into a spreadsheet formula, or using the yearly rate with monthly periods, gives a wildly wrong answer.",
          "The third is ignoring the moratorium or pre-EMI period. In some loans, such as under-construction home loans, interest is charged on the amount disbursed so far, and full EMIs start only after the final disbursement. In that case your total cost depends on the disbursement schedule as well."
        ]
      }
    ]
  },
  {
    "slug": "gst-slabs-explained",
    "title": "GST Slabs in India Explained With Examples",
    "desc": "Understand GST slabs after the 2025 rationalisation, inclusive vs exclusive pricing, and how CGST, SGST and IGST apply, with worked examples.",
    "related": [
      "gst-calculator",
      "invoice-generator",
      "discount-calculator"
    ],
    "intro": "Goods and Services Tax (GST) is charged at a few fixed rates, and the rate on an item decides how much tax sits inside its price. This guide explains the slab structure, how to work out tax from a bill, and how the tax is split between the Centre and the states.",
    "sections": [
      {
        "h": "The slab structure",
        "p": [
          "India's GST has historically had several rates. As per the September 2025 rationalisation, the main slabs are 5% and 18%, with a higher 40% rate for certain sin and luxury goods. There are also special low rates of 0.25% (for items such as rough diamonds) and 3% (for gold and silver), and some goods and services are exempt, which means a 0% rate.",
          "Which item falls in which slab is set by official notifications, and these can be amended. Do not rely on memory or on a general guide, including this one, for a specific product. Confirm the rate for your item on the official GST portal or the latest CBIC notification, or ask your tax professional."
        ]
      },
      {
        "h": "GST-exclusive and GST-inclusive prices",
        "p": [
          "A price can be quoted before tax (exclusive) or with tax already included (inclusive). Mixing these up is the most common billing error.",
          "To add GST to an exclusive price: GST = price × rate ÷ 100. For ₹10,000 at 18%, GST is ₹1,800 and the total is ₹11,800.",
          "To take GST out of an inclusive price: base price = total ÷ (1 + rate ÷ 100). For a ₹11,800 total at 18%, the base is ₹11,800 ÷ 1.18 = ₹10,000, and the GST inside it is ₹1,800.",
          "Note that the GST inside an inclusive price is not 18% of the total. 18% of ₹11,800 would be ₹2,124, which is wrong. The rate always applies to the base price."
        ]
      },
      {
        "h": "CGST, SGST and IGST",
        "p": [
          "GST is collected under different heads depending on where the supply happens.",
          "- Within one state (intra-state), the tax is split equally into CGST (Central GST) and SGST (State GST), or UTGST in a Union Territory without a legislature.",
          "- Between states (inter-state), and for imports, a single IGST (Integrated GST) is charged and shared between the Centre and the destination state.",
          "The total tax rate is the same either way. Only the heads on the invoice change."
        ]
      },
      {
        "h": "Worked example: intra-state and inter-state",
        "p": [
          "A trader in Pune sells goods with a taxable value of ₹10,000 at 18% GST.",
          "If the buyer is also in Maharashtra, the invoice shows CGST at 9% = ₹900 and SGST at 9% = ₹900, so the total payable is ₹11,800.",
          "If the buyer is in Karnataka, the invoice shows IGST at 18% = ₹1,800, and the total is again ₹11,800.",
          "The buyer pays the same amount in both cases. The difference matters to the seller, who must report the correct heads in returns, and to the buyer, who claims input tax credit under the same heads."
        ]
      },
      {
        "h": "Discounts and GST",
        "p": [
          "GST is normally charged on the transaction value after a discount that is shown on the invoice. If a product is listed at ₹10,000 and you give a 10% discount, the taxable value is ₹9,000. GST at 18% is ₹1,620 and the final total is ₹10,620.",
          "Some discounts, such as those given after the sale under certain conditions, follow different rules, so check the GST law or consult an accountant for complicated schemes."
        ]
      },
      {
        "h": "Practical tips for small businesses",
        "p": [
          "- Show the taxable value, rate and tax amount separately on every invoice, along with the GSTIN, invoice number and date.",
          "- Decide whether your displayed prices are inclusive or exclusive and say so clearly to customers.",
          "- Keep the correct HSN or SAC code for each item, since the rate depends on classification.",
          "- Check whether you must register under GST. Thresholds and rules depend on the type of supply and the state, so verify them with the official portal.",
          "This site's GST calculator handles both inclusive and exclusive calculations, and the invoice generator can prepare an invoice with the tax split shown."
        ]
      },
      {
        "h": "Input tax credit in brief",
        "p": [
          "Businesses registered under GST can usually offset the GST they pay on purchases against the GST they collect on sales. This is called input tax credit (ITC). It is why GST is described as a tax on value added: each business pays tax only on the margin it adds.",
          "For example, a shop buys goods for ₹10,000 plus ₹1,800 GST and sells them for ₹12,000 plus ₹2,160 GST. It collects ₹2,160, claims credit for ₹1,800 and deposits the balance of ₹360 with the government. Credit is allowed only if conditions are met, such as a valid tax invoice and the supplier having filed returns, and some items are blocked from credit. Ask your accountant about eligibility for your case."
        ]
      }
    ]
  },
  {
    "slug": "how-gold-loan-value-is-decided",
    "title": "How a Gold Loan Amount Is Decided",
    "desc": "See how lenders value gold using weight, purity, LTV and the day's rate, with a worked example and what affects the final loan amount.",
    "related": [
      "gold-loan-calculator",
      "gold-jewellery-calculator"
    ],
    "intro": "When you pledge gold, the lender does not lend its full market value. The amount depends on how much pure gold your ornaments contain, the gold rate used, and a loan-to-value limit.",
    "sections": [
      {
        "h": "Step 1: Weight and what is counted",
        "p": [
          "The lender first weighs the ornaments and then removes anything that is not gold. Stones, enamel, pearls, wax filling and other attachments are deducted, leaving the net weight of gold. A 50 g necklace with stone work may have a net gold weight well below 50 g, so always check the net weight figure on the valuation slip.",
          "Lenders generally accept jewellery and certain coins within their own purity limits. Rules on bars and bullion differ between lenders, so ask directly."
        ]
      },
      {
        "h": "Step 2: Purity",
        "p": [
          "Purity is measured in carats. 24K is nearly pure gold, 22K contains 22 parts gold out of 24 (about 91.6%), and 18K contains 18 out of 24 (75%). The lender tests the gold, often with a touchstone or an electronic tester, and values it at the tested purity, not the purity stated on the jewellery.",
          "The value of gold for the loan is calculated as: net weight × 24K rate per gram × carat ÷ 24."
        ]
      },
      {
        "h": "Step 3: The gold rate",
        "p": [
          "Lenders use a reference rate for the purity involved, often derived from an average of recent prices and not the retail price you see at a jeweller. This is usually lower than the price at which you would buy the same ornament, because the retail price includes making charges and tax, which have no resale value in a loan valuation.",
          "The rate changes daily, so the same ornaments can be worth a different amount on different days. The figure below uses ₹7,500 per gram for 24K purely as an illustration; check the current rate from your lender."
        ]
      },
      {
        "h": "Step 4: Loan-to-value (LTV)",
        "p": [
          "LTV is the percentage of gold value that the lender will finance. It is capped by RBI directions for regulated lenders, and the cap can depend on the loan size and the lender category. Lenders may also set a lower LTV of their own. Verify the current limit with the RBI directions or your lender, since these rules can be revised.",
          "The margin protects the lender if gold prices fall during the loan."
        ]
      },
      {
        "h": "A worked example",
        "p": [
          "Consider 50 g of 22K gold, a 24K rate of ₹7,500 per gram, 75% LTV, 10% yearly simple interest and 12 months of tenure.",
          "- Gold value = 50 × 7,500 × 22 ÷ 24 = ₹3,43,750.",
          "- Eligible loan = 75% of ₹3,43,750 = ₹2,57,813 (rounded).",
          "- Interest for one year at 10% on ₹2,57,812.50 = ₹25,781.",
          "- Total to repay at the end = about ₹2,83,594.",
          "This matches the method used by the gold loan calculator on this site, which assumes simple interest with a single repayment at the end. Your lender may instead charge monthly interest, use a different repayment structure or add processing and valuation fees."
        ]
      },
      {
        "h": "What to check before pledging",
        "p": [
          "- The interest rate and how it is charged: monthly, quarterly or at maturity.",
          "- Processing fee, valuation or storage charges, and any penalty for early closure.",
          "- What happens if the gold price falls sharply or you miss a payment. Lenders can issue notices and auction pledged gold after following their procedure.",
          "- That you receive a receipt listing the items, gross and net weight and purity, and that the locker or storage is insured.",
          "The calculator on this site gives an estimate only. The final amount is decided by the lender's own valuation on the day."
        ]
      },
      {
        "h": "Why the loan amount can differ from your estimate",
        "p": [
          "Even with the same inputs, two lenders can offer different amounts. One may use a lower reference rate, deduct more for impurities or round the weight down. Another may offer a lower LTV for larger loans or for certain schemes.",
          "If a lender quotes less than your calculation, ask for the valuation slip. It should show gross weight, deductions, net weight, purity and the rate applied. Comparing these lines against your own figures shows where the difference comes from.",
          "Also note that the calculator on this site uses a 24K rate per gram as the input. If you only know the 22K rate, convert it to 24K by dividing by 22 and multiplying by 24, or the result will be understated."
        ]
      }
    ]
  },
  {
    "slug": "gold-jewellery-price-making-charges-explained",
    "title": "Gold Jewellery Price: Making Charges Explained",
    "desc": "Understand how a jeweller arrives at the final price: gold rate, wastage, making charges and GST, with a verified worked example for 10 grams.",
    "related": [
      "gold-jewellery-calculator",
      "gst-calculator"
    ],
    "intro": "The price tag on a gold ornament is more than the weight multiplied by the day's rate. Wastage, making charges and GST are all added, and understanding each makes it easier to compare quotes from different jewellers.",
    "sections": [
      {
        "h": "The components of the price",
        "p": [
          "A jeweller's bill normally has these parts:",
          "- Gold value: weight of the ornament multiplied by the rate per gram for that purity (22K or 18K, for example).",
          "- Wastage (also called value addition): a percentage added for the gold lost while shaping the ornament.",
          "- Making charges: the craftsmanship fee, charged as a percentage or as a fixed amount per gram.",
          "- Stone or other component charges, if any.",
          "- GST on gold and GST on making charges.",
          "Not every jeweller uses every line. Some quote a single combined making charge and some show no separate wastage, so compare the final price instead of one line."
        ]
      },
      {
        "h": "A worked example",
        "p": [
          "Suppose a 10 g ornament, a rate of ₹7,000 per gram for its purity, 8% wastage, 12% making charges, GST of 3% on gold and 5% on making charges. These are the defaults used by the calculator on this site.",
          "- Gold value = 10 × 7,000 = ₹70,000.",
          "- Wastage = 8% of ₹70,000 = ₹5,600, so gold plus wastage = ₹75,600.",
          "- Making charges = 12% of ₹75,600 = ₹9,072.",
          "- GST on gold = 3% of ₹75,600 = ₹2,268.",
          "- GST on making = 5% of ₹9,072 = ₹453.60.",
          "- Final price = 75,600 + 9,072 + 2,268 + 453.60 = ₹87,393.60.",
          "In this example, wastage and making charges together add ₹14,672, about 21% over the gold value before tax. This is why the same weight of gold can cost very different amounts at different shops."
        ]
      },
      {
        "h": "Percentage versus per-gram making charges",
        "p": [
          "Making charges quoted as a percentage rise when the gold rate rises, while charges quoted per gram stay fixed. For 10 g, a flat ₹800 per gram would be ₹8,000, close to the ₹9,072 above, but it would not change if the gold rate moved.",
          "Also check what the percentage is applied to. Some jewellers apply it to the gold value only, others to gold plus wastage, as in the example. Applying it to a larger base gives a higher charge for the same stated percentage."
        ]
      },
      {
        "h": "GST on jewellery",
        "p": [
          "As per the current structure, gold carries a low GST rate of 3%, and making charges billed as a service attract a separate, higher rate, which this site assumes as 5%. GST rates and the way they apply to a bill are set by official notification and may change, so confirm them on the GST portal or ask the jeweller to show the tax lines separately.",
          "GST is charged on top of the amount before tax, so any error in the making charge is carried into the tax as well."
        ]
      },
      {
        "h": "Hallmark, purity and buyback",
        "p": [
          "- Look for the BIS hallmark with the purity mark and HUID, and verify the HUID on the BIS Care app or the BIS website.",
          "- Ask for a bill showing gross weight, stone weight, net gold weight, rate, purity and each charge.",
          "- Making charges and wastage are usually not recovered when you sell or exchange the item. Buyback rates are generally based on gold content, often with a deduction, so the resale value is lower than the purchase price.",
          "- Ask the jeweller about exchange policy and whether the charges are reduced on old gold exchange."
        ]
      },
      {
        "h": "How to compare quotes",
        "p": [
          "Ask for the same details from every jeweller: the rate used, net weight, wastage percentage, making charge and the total. Then compare the final amount for the same weight and purity. You can enter each quote into the gold jewellery calculator and use the GST calculator to check the tax lines. Treat the result as an estimate, since the bill depends on the jeweller's own method."
        ]
      },
      {
        "h": "Plain gold versus designer jewellery",
        "p": [
          "Making charges vary with the design. Machine-made chains and plain bangles usually carry lower charges, while handcrafted, antique or heavily detailed pieces carry higher ones, sometimes a much larger share of the total. Stones, meenakari and similar work are typically priced separately.",
          "Coins and bars have little or no making charge, though a small premium may apply. If your aim is to hold gold as a store of value, compare these against jewellery, keeping in mind that you may also have storage and safety to consider.",
          "Whatever you buy, the same arithmetic applies: higher percentages on a higher base make the final price climb faster than the gold content does."
        ]
      }
    ]
  },
  {
    "slug": "flat-vs-reducing-balance-interest",
    "title": "Flat vs Reducing Balance Interest Rates",
    "desc": "Flat and reducing-balance rates can look alike but cost very differently. See the real effective rate behind a 12% flat rate with worked figures.",
    "related": [
      "emi-calculator",
      "personal-loan-calculator",
      "loan-comparison-calculator"
    ],
    "intro": "Two lenders can both advertise 12% and charge very different amounts. The difference is whether interest is calculated on the original loan amount for the whole period (flat) or only on what you still owe (reducing balance).",
    "sections": [
      {
        "h": "How flat interest works",
        "p": [
          "In a flat-rate loan, interest is calculated on the original principal for the entire tenure, even though you repay part of the principal every month. Total interest = principal × rate × years. The total payable is divided by the number of months to get the EMI.",
          "Flat rates are often seen in some vehicle loans, consumer durable finance, and some small-ticket or informal loans."
        ]
      },
      {
        "h": "How reducing-balance interest works",
        "p": [
          "In a reducing-balance loan, interest each month is charged on the outstanding balance only. As you pay down principal, the interest portion falls. Home loans, most personal loans from banks, and credit-card EMI products are generally quoted this way, and the EMI formula uses this method.",
          "Because you are charged only on what you still owe, a reducing-balance rate is the fairer measure of cost for the same stated number."
        ]
      },
      {
        "h": "Worked comparison",
        "p": [
          "Take ₹1,00,000 borrowed for 3 years at 12%.",
          "Flat method: interest = 1,00,000 × 12% × 3 = ₹36,000. Total payable = ₹1,36,000. EMI = 1,36,000 ÷ 36 = about ₹3,778.",
          "Reducing-balance method: EMI = about ₹3,321. Total payable = about ₹1,19,572, so interest is about ₹19,572.",
          "The flat-rate loan costs about ₹16,400 more over the same period for the same quoted 12%."
        ]
      },
      {
        "h": "The effective rate of a flat loan",
        "p": [
          "To compare fairly, convert the flat loan into its reducing-balance equivalent. A flat loan with an EMI of ₹3,778 on ₹1,00,000 over 36 months works out to an annual rate of about 21.2% on a reducing basis. This is nearly double the 12% that was quoted.",
          "A rough rule of thumb is that the effective rate on a flat loan is close to 1.7 to 2 times the flat rate, depending on tenure. For exact figures, compute using the EMI, amount and number of months."
        ]
      },
      {
        "h": "Why the gap exists",
        "p": [
          "With a flat rate, you keep paying interest on the full ₹1,00,000 even after you have repaid half of it. By month 18, you owe about half the principal, yet you are still being charged as if you owe all of it. A reducing-balance rate removes this overcharge.",
          "The same effect means prepaying a flat-rate loan may save less than you expect, since the interest was fixed upfront. Check the foreclosure terms; some lenders use a formula that refunds only part of the unearned interest."
        ]
      },
      {
        "h": "What to do when comparing",
        "p": [
          "- Ask whether the quoted rate is flat or reducing. If the lender is unclear, ask for the EMI and compute the effective rate yourself.",
          "- Compare loans using EMI, total repayment and total cost including fees, not the headline rate alone.",
          "- Use the same tenure when comparing offers.",
          "- Lenders regulated by RBI are required to disclose the annualised rate and key facts in a standard statement. Ask for this before accepting an offer.",
          "The EMI calculator on this site uses the reducing-balance method. Put in your offered EMI details to see the difference."
        ]
      },
      {
        "h": "Checking a flat-rate offer yourself",
        "p": [
          "You can test any flat-rate quote in three steps. First, compute total interest as principal × flat rate × years. Second, add it to the principal and divide by the number of months to get the EMI. Third, enter the principal, the EMI and the tenure into a reducing-balance EMI calculator and adjust the rate until the EMI matches. That rate is the effective rate.",
          "For example, a 5-year flat rate of 8% on ₹1,00,000 gives interest of ₹40,000 and an EMI of ₹2,333. Matching that EMI on a reducing basis needs a rate of roughly 14.1%, which is far higher than the figure advertised. The longer the tenure, the wider the gap tends to become.",
          "Regulation also helps here. Banks and NBFCs are expected to disclose the annualised interest rate and all charges in a key fact statement before you sign. If a quote only mentions a flat rate, ask for the annualised figure in writing and compare that with other lenders."
        ]
      }
    ]
  },
  {
    "slug": "how-to-compare-loan-offers",
    "title": "How to Compare Loan Offers Properly",
    "desc": "Compare loans by total cost, not just the rate. Learn to weigh interest rate, tenure, processing fee and prepayment terms with a worked example.",
    "related": [
      "loan-comparison-calculator",
      "emi-calculator"
    ],
    "intro": "A lower interest rate does not always mean a cheaper loan. Fees, tenure and prepayment terms can change the total you pay, so offers should be compared on the same basis.",
    "sections": [
      {
        "h": "Start with the same loan amount and tenure",
        "p": [
          "Comparisons only work when the offers are for the same amount and the same number of months. A longer tenure shows a smaller EMI, which can make an offer look cheaper while costing more overall. Fix the amount and tenure first, and then compare what each lender charges."
        ]
      },
      {
        "h": "The five things to compare",
        "p": [
          "- Interest rate: and whether it is fixed or floating, and what it is linked to.",
          "- Tenure: which sets the EMI and the total interest.",
          "- Processing fee: usually a percentage of the loan, plus GST on it.",
          "- Total interest and total outflow: EMI × months, plus fees.",
          "- Prepayment and foreclosure terms: charges, minimum amounts and whether tenure or EMI is reduced.",
          "Other items worth checking are insurance that is bundled with the loan, documentation charges, late payment charges and any rate reset terms."
        ]
      },
      {
        "h": "A worked example",
        "p": [
          "Three offers for ₹10,00,000 over 36 months. Processing fees are shown as a percentage of the loan and GST on the fee is ignored here for simplicity.",
          "- Offer A: 11% with a 1% fee. EMI about ₹32,739. Interest about ₹1,78,594. Fee ₹10,000. Total cost about ₹1,88,594.",
          "- Offer B: 11.5% with no fee. EMI about ₹32,976. Interest about ₹1,87,136. Total cost about ₹1,87,136.",
          "- Offer C: 10.75% with a 2.5% fee. EMI about ₹32,620. Interest about ₹1,74,336. Fee ₹25,000. Total cost about ₹1,99,336.",
          "Offer C has the lowest rate and the lowest EMI, yet it is the costliest overall because of its fee. Offer B has the highest rate and the lowest total cost. The ranking changes completely once fees are counted."
        ]
      },
      {
        "h": "Why the EMI alone can mislead",
        "p": [
          "The EMI in the example differs by only a few hundred rupees between offers, so it gives little guide to cost. The fee is paid upfront or deducted from the disbursed amount. If the fee is deducted, you receive less than ₹10,00,000 but still pay interest on the full amount, which raises the true cost further.",
          "A better test is the total repaid plus fees against the amount you actually receive in hand."
        ]
      },
      {
        "h": "Prepayment and flexibility",
        "p": [
          "If you may pay the loan off early, the terms matter as much as the rate. RBI rules generally bar prepayment charges on floating-rate loans to individual borrowers, while fixed-rate loans may carry them, and the rules differ by lender category and loan type. Verify the current position with the lender in writing.",
          "Also ask whether you can part-prepay, how many times, and whether the benefit comes as a lower EMI or a shorter tenure."
        ]
      },
      {
        "h": "Checklist before you decide",
        "p": [
          "- Get the key fact statement or sanction terms in writing from each lender.",
          "- Ask for the annualised rate (APR) that includes fees.",
          "- Confirm whether the rate is flat or reducing balance.",
          "- Read the clauses on late payment, rate changes and closure.",
          "- Do not choose purely on the lowest EMI; choose on total cost and terms you can live with.",
          "Enter each offer into the loan comparison calculator on this site to see total interest side by side, then confirm every figure with the lender, since the actual charges depend on your profile and the lender's policy."
        ]
      },
      {
        "h": "Fixed versus floating rates",
        "p": [
          "A fixed rate stays the same for a stated period, which makes your EMI predictable. A floating rate moves with a benchmark, so the EMI or the tenure can change over time. Floating rates are common in home loans, while many personal loans are fixed.",
          "A fixed-rate offer is not automatically better. It may start higher than a floating rate, and some fixed-rate loans reset after a set number of years. When you compare, ask how long the rate is fixed, what it is linked to if floating, and how often it can change. The comparison above uses one constant rate for each offer, so actual results on a floating-rate loan can differ.",
          "Finally, consider the lender itself. Look at how quickly it issues statements and closure letters, whether it offers a clear online account view, and how it handles grievances. These do not appear in a rate table but affect the experience over several years of repayment, and a registered lender must have a grievance process you can escalate under RBI rules."
        ]
      }
    ]
  },
  {
    "slug": "how-compound-interest-and-sip-growth-work",
    "title": "How Compound Interest and SIP Growth Work",
    "desc": "Understand compounding, the difference from simple interest, and how monthly SIP investments grow, with verified examples and honest caveats.",
    "related": [
      "savings-calculator",
      "roi-calculator"
    ],
    "intro": "Compounding means you earn returns on your earlier returns. It is the reason time matters more than most people expect, and it is the idea behind both fixed deposits and systematic investment plans (SIPs).",
    "sections": [
      {
        "h": "Simple versus compound interest",
        "p": [
          "With simple interest, you earn interest only on the original amount. With compound interest, each period's interest is added to the balance, and the next period's interest is calculated on the larger amount.",
          "The compound formula is: A = P × (1 + r ÷ n)^(n × t), where P is the starting amount, r the annual rate as a decimal, n the number of compounding periods per year and t the number of years.",
          "For ₹1,00,000 at 8% a year for 10 years, simple interest gives ₹1,80,000. Compounded yearly, it grows to about ₹2,15,892. The extra ₹35,892 is interest earned on interest."
        ]
      },
      {
        "h": "Compounding frequency and time",
        "p": [
          "How often interest is added changes the result a little. The same ₹1,00,000 at 8% for 10 years, compounded quarterly, becomes about ₹2,20,804. The effect of frequency is modest compared to the effect of time.",
          "Stretch the same investment to 20 years at 8% compounded yearly and it becomes about ₹4,66,096, more than double the 10-year value. Doubling the time more than doubled the growth.",
          "A quick estimate is the rule of 72: divide 72 by the annual rate to get the approximate years needed to double. At 8%, that is about 9 years."
        ]
      },
      {
        "h": "What a SIP is",
        "p": [
          "A SIP invests a fixed amount at regular intervals, usually monthly, into a mutual fund or similar product. Because each instalment is invested at a different time, the earliest instalments compound for the longest.",
          "The future value of a SIP is estimated as: FV = M × [((1 + i)^n − 1) ÷ i] × (1 + i), where M is the monthly amount, i the monthly rate (annual rate ÷ 12) and n the number of months. This version assumes each instalment is invested at the start of the month."
        ]
      },
      {
        "h": "A worked SIP example",
        "p": [
          "Suppose ₹5,000 a month for 10 years (120 instalments) and an assumed return of 12% a year.",
          "- Total invested = ₹6,00,000.",
          "- Estimated value = about ₹11,61,695.",
          "- Estimated gain = about ₹5,61,695.",
          "If the assumed return is 8% instead, the same SIP gives about ₹9,20,828. Extended to 20 years at 12%, it gives about ₹49,95,740 from ₹12,00,000 invested.",
          "These are mathematical illustrations, not forecasts. Market-linked investments do not earn a steady rate. Actual returns can be higher, lower or negative in any period, and past performance does not guarantee future results."
        ]
      },
      {
        "h": "What the numbers do not show",
        "p": [
          "- Inflation: a future amount buys less than the same amount today. A real return is the nominal return minus inflation, roughly.",
          "- Taxes: interest and capital gains are taxed under rules that change. Check the current treatment with the Income Tax Department or a tax professional.",
          "- Expense ratios and fees reduce the return of mutual funds.",
          "- Timing: a fixed rate assumption hides the ups and downs that real markets have. A fixed deposit, by contrast, has a contracted rate."
        ]
      },
      {
        "h": "How to use these calculations",
        "p": [
          "Use compounding calculators to understand the effect of starting early, raising the monthly amount and holding for longer, rather than to predict an exact outcome. Try a conservative return assumption as well as an optimistic one, and compare the range.",
          "The savings calculator and ROI calculator on this site let you test different amounts, rates and periods. For decisions about where to invest, read the scheme documents and consider speaking to a SEBI-registered adviser."
        ]
      },
      {
        "h": "Fixed deposits versus market-linked SIPs",
        "p": [
          "A bank fixed deposit pays a rate stated in advance, so compound interest on it can be computed exactly, subject to the bank's compounding frequency and the tenure you choose. Deposits up to a limit are covered by deposit insurance; check the current limit and terms with the bank or DICGC.",
          "A SIP in an equity or hybrid mutual fund does not promise any rate. Because you buy units each month, you buy more units when prices are low and fewer when high, which can smooth the average cost, but it does not remove the risk of loss. For goals within a few years, many people prefer products with lower volatility. Choose according to your time horizon and tolerance for risk, and read the scheme information document."
        ]
      }
    ]
  },
  {
    "slug": "home-loan-prepayment-and-tenure-explained",
    "title": "Home Loan Prepayment and Tenure Explained",
    "desc": "See how part-prepayment shortens a home loan or lowers EMI, with a verified ₹50 lakh example and what to check before prepaying.",
    "related": [
      "home-loan-calculator",
      "emi-calculator"
    ],
    "intro": "A home loan runs for many years, so even a single part-payment made early can remove a large amount of interest. This guide shows how prepayment works and the choices you have after making one.",
    "sections": [
      {
        "h": "Why early prepayment saves the most",
        "p": [
          "Interest is charged on the outstanding balance. In the early years, the balance is high and most of each EMI is interest. A prepayment reduces the principal immediately, so every future month's interest is calculated on a smaller balance. The earlier you prepay, the more months benefit.",
          "A prepayment late in the loan saves far less, because there are fewer months left and the interest component is already small."
        ]
      },
      {
        "h": "The base case",
        "p": [
          "Take a home loan of ₹50,00,000 at 8.5% a year for 20 years (240 months). The EMI is about ₹43,391. Over the full tenure you would pay about ₹1,04,13,879, of which about ₹54,13,879 is interest. In other words, the interest is slightly more than the amount borrowed."
        ]
      },
      {
        "h": "Option 1: Keep the EMI, shorten the tenure",
        "p": [
          "After 36 EMIs, the outstanding balance is about ₹46,74,300. Suppose you make a one-time prepayment of ₹5,00,000 and keep paying the same EMI of ₹43,391.",
          "- The loan ends after about 199 months instead of 240, which is roughly 41 months (about 3 years 5 months) earlier.",
          "- Total interest falls to about ₹40,94,240.",
          "- Interest saved is about ₹13,19,639.",
          "A ₹5 lakh payment saved over ₹13 lakh of interest in this example, because it worked for many years."
        ]
      },
      {
        "h": "Option 2: Keep the tenure, lower the EMI",
        "p": [
          "Instead of shortening the loan, you can ask the lender to reduce the EMI. With the balance reduced to about ₹41,74,300 and 204 months remaining, the new EMI would be about ₹38,750, a reduction of roughly ₹4,640 a month.",
          "This improves your monthly cash flow but saves less interest than Option 1, since you remain in debt for the full original period. If your goal is to reduce total cost, keeping the EMI unchanged is normally more effective. If your goal is monthly breathing room, lowering the EMI may suit you better."
        ]
      },
      {
        "h": "Increasing the EMI instead",
        "p": [
          "You can also raise the EMI without any lump sum. In the same example, paying 10% more each month (about ₹47,730) from the start closes the loan in about 192 months, 48 months early, and cuts interest to about ₹41,61,886. Regular small increases, such as stepping the EMI up each year as your income grows, can be as powerful as a one-time prepayment."
        ]
      },
      {
        "h": "What to check before prepaying",
        "p": [
          "- Prepayment charges: RBI rules generally do not allow prepayment penalties on floating-rate loans to individual borrowers, but fixed-rate loans can carry them. Verify the current rule and your loan agreement.",
          "- Minimum prepayment amount and whether part-prepayment is allowed at any time.",
          "- Whether the lender reduces the tenure or the EMI by default, and how to request the option you want.",
          "- Tax: home loan interest and principal deductions are subject to the rules in force. Check current provisions with the Income Tax Department or a tax professional before deciding.",
          "- Your emergency fund. Money put into a home loan cannot easily be taken back, so keep adequate liquid savings first.",
          "Use the home loan calculator and EMI calculator on this site to try different amounts and timings, and confirm the revised schedule with your lender after any prepayment."
        ]
      },
      {
        "h": "Prepay or invest the money?",
        "p": [
          "A common question is whether to prepay a loan or invest the same money elsewhere. Prepaying gives a certain, risk-free saving equal to your loan rate on the amount prepaid, adjusted for any tax benefit you may lose. Investing may earn more or less, with no guarantee, and the returns can be taxed.",
          "There is no single answer, since it depends on your loan rate, other debts, emergency savings and goals. A useful check is to clear any higher-interest debt, such as credit cards or personal loans, first. After that, compare your home loan rate with returns you can reasonably expect after tax and with the risk you are comfortable taking. For personalised advice, speak to a qualified financial adviser.",
          "Keep records of every prepayment, and ask for an updated repayment schedule and statement afterwards. Check that the amount was applied to principal on the date you paid and that the new tenure or EMI matches your request. Errors are easier to correct when caught early."
        ]
      }
    ]
  }
];
