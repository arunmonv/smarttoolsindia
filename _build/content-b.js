// On-page educational content, set B. Plain text only; '- ' prefix renders as a bullet.
module.exports = {

'gst-calculator': {
  replaceFaq: ['What are the GST slabs in India?', 'As of the September 2025 GST rate rationalisation, most goods and services fall under two main rates: 5% and 18%, with a higher 40% rate for certain sin and luxury goods. Special low rates of 0.25% (for example rough diamonds) and 3% (gold and silver) continue, and some items are exempt or taxed at 0%. Rates are changed by GST Council decisions and notifications, so always confirm the rate for your specific item or service, using its HSN or SAC code, on the latest notification. The rate field in this calculator accepts any value, so you can enter whatever rate applies.'],
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator works in two directions. In Add GST mode you enter a price that does not yet include tax, and it shows the GST amount and the final price a customer pays. In Remove GST mode you enter a price that already includes GST, for example an MRP or a bill total, and it works backwards to the original price before tax and the tax contained in it.',
      'It is useful for shopkeepers quoting prices, freelancers and small businesses preparing quotations, and ordinary buyers who want to know how much of a bill is tax. The result also shows the tax split into two equal halves, CGST and SGST, which applies to sales within one state. For a sale between states, the same total is charged as a single IGST amount, so you can read the Total GST line directly.'
    ] },
    { h: 'The formula explained', p: [
      'Adding GST is a simple percentage: GST = price × rate ÷ 100, and the final price = price + GST. Equivalently, final price = price × (1 + rate ÷ 100).',
      'Removing GST is where people often slip. If a price includes 18% GST, the tax is not 18% of that price. The inclusive price is 118% of the original, so the original = inclusive price ÷ 1.18. The GST is then the inclusive price minus the original. Subtracting 18% of the inclusive amount gives a wrong, slightly lower tax figure.',
      'For intra-state supply, the total GST is divided equally: half is CGST (Central) and half is SGST or UTGST (State or Union Territory). This calculator shows one of the two halves under CGST / SGST (each).'
    ] },
    { h: 'Worked example', p: [
      'Adding GST: a service costs ₹10,000 before tax and the rate is 18%. GST = 10,000 × 18 ÷ 100 = ₹1,800. The final price is ₹11,800. The CGST and SGST are ₹900 each.',
      'Removing GST: a product is billed at ₹2,100 including 5% GST. The price before GST = 2,100 ÷ 1.05 = ₹2,000, so the GST contained in the bill is ₹100 (₹50 CGST and ₹50 SGST). Note that 5% of ₹2,100 would be ₹105, which is not the correct tax amount.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Check whether the price you hold is inclusive or exclusive of GST before choosing the mode. MRPs printed on packaged goods are inclusive of tax.',
      '- Use the rate for the exact item or service, identified by its HSN or SAC code. Similar-looking products can fall in different rates.',
      '- Do not reverse a percentage by subtracting it. Always divide by (1 + rate ÷ 100).',
      '- Small rounding differences can occur between this tool and an invoice, because invoices round each line or the whole bill. The legal amount is what your invoice or accounting software records.',
      '- If you issue an invoice, use the Invoice Total Calculator on this site to handle quantity and discount together with GST.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The calculator applies one rate to one amount. It does not handle cess, composition-scheme tax, reverse charge, input tax credit or items with mixed rates in one bill. GST rates and rules change through GST Council decisions and government notifications, so treat the output as an arithmetic aid and confirm the applicable rate and treatment with the latest notification or your tax professional.'
    ] }
  ],
  faqs: [
    ['How do I calculate GST from an MRP?', 'Choose Remove GST, enter the MRP, and enter the rate for that product. The tool divides the MRP by (1 + rate ÷ 100) to get the pre-tax price and shows the tax contained in it.'],
    ['What is the difference between CGST, SGST and IGST?', 'CGST and SGST apply when the seller and the place of supply are in the same state, with each being half of the total GST. IGST is charged as one single tax on supplies between different states or on imports. The total tax rate is the same either way.'],
    ['Why does my invoice total differ by a few paise?', 'Invoices round at line level or at the total, and the order of rounding differs between software. The difference is usually a rupee at most. Follow the figures on the invoice you issue or receive.'],
    ['Can I use this for a 0%, exempt or special-rate item?', 'Yes. Type the rate in the field, for example 0, 0.25 or 3. For exempt or nil-rated items the GST amount will simply be zero. Check the latest notification to confirm the treatment of your item.']
  ]
},

'profit-margin-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'Enter what an item cost you and the price you sell it at, and the calculator shows three things: the profit in rupees, the profit margin and the markup. It is meant for shopkeepers, resellers, freelancers and anyone who wants to know whether a price actually leaves enough money after the cost of the goods.',
      'Margin and markup are often confused. Both describe the same profit, but measured against different bases. Seeing them side by side helps you read supplier quotes, compare your pricing with competitors and set realistic targets.'
    ] },
    { h: 'The formula explained', p: [
      '- Profit = selling price − cost price',
      '- Profit margin % = profit ÷ selling price × 100',
      '- Markup % = profit ÷ cost price × 100',
      'Margin uses revenue as its base, so it can never reach 100% unless the cost is zero. Markup uses cost as the base, so it can exceed 100%. For the same profit, markup is always the larger number. A product sold for twice its cost has a 100% markup but only a 50% margin.',
      'Here cost means the cost price you enter. If you want a true business margin, include everything that belongs to that item: purchase price, freight, packaging, and any payment gateway or platform fee. The calculator does not add these on its own.'
    ] },
    { h: 'Worked example', p: [
      'The default values: cost ₹800, selling price ₹1,000. Profit = ₹200. Margin = 200 ÷ 1,000 × 100 = 20%. Markup = 200 ÷ 800 × 100 = 25%.',
      'A second case: cost ₹1,250 and selling price ₹1,500. Profit = ₹250, margin = 250 ÷ 1,500 = 16.67%, and markup = 250 ÷ 1,250 = 20%.',
      'Going the other way, if you want a 20% margin on a cost of ₹800, the price is cost ÷ (1 − 0.20) = ₹1,000. Using a 20% markup instead would give only ₹960, which is a margin of just 16.67%.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Do not mix the two terms. If a supplier says 20% margin, divide cost by 0.8, not multiply by 1.2.',
      '- Enter prices on the same GST basis. Compare cost without GST to selling price without GST, otherwise tax inflates your apparent profit.',
      '- Remember that margin here is gross profit on the item. Rent, salaries, electricity and marketing still have to be paid from it.',
      '- A discount reduces margin faster than people expect. On a 20% margin, a 10% discount removes half of your profit.',
      '- Review margins when your costs change. A rise in cost with a fixed selling price quietly shrinks margin.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The calculator handles a single item with a single cost and price. It does not account for taxes, returns, bulk discounts, or overheads. A negative profit is shown if the selling price is below cost, which indicates a loss. For pricing from a target markup, use the Markup Calculator.'
    ] }
  ],
  faqs: [
    ['What is a good profit margin for a small business?', 'It depends heavily on the sector. Grocery and trading often work on single-digit to low double-digit gross margins, while services, software and branded products usually have higher ones. Compare against similar businesses in your line and make sure margin covers your overheads.'],
    ['Can margin be more than 100%?', 'No. Margin is profit divided by selling price, so it stays below 100% as long as there is some cost. Markup, which is divided by cost, can exceed 100%.'],
    ['Is this gross or net profit?', 'It is gross profit on the cost you enter. Net profit is what remains after all other business expenses and taxes.'],
    ['How do I convert markup to margin?', 'Margin = markup ÷ (100 + markup) × 100. For a 25% markup, 25 ÷ 125 = 20% margin.']
  ]
},

'markup-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'Many sellers fix a price by adding a percentage on top of what they paid. This calculator takes your cost price and your chosen markup percentage and returns the selling price, the profit in rupees and the resulting profit margin.',
      'It suits retailers, wholesalers, small manufacturers and freelancers pricing products or services. Because it also shows margin, you can see what share of every rupee of sales you are really keeping.'
    ] },
    { h: 'The formula explained', p: [
      'Selling price = cost × (1 + markup ÷ 100). Profit = selling price − cost. Margin = profit ÷ selling price × 100.',
      'Markup is measured against cost, margin against selling price. That is why a 25% markup produces only a 20% margin: the same profit is divided by a larger number. The relationship is margin = markup ÷ (100 + markup) × 100.',
      'The calculator uses the cost price you type as it is. If your cost has GST in it and you can claim input tax credit, use the cost without GST, and add GST to the selling price at the end.'
    ] },
    { h: 'Worked example', p: [
      'With the defaults, cost ₹800 and markup 25%: selling price = 800 × 1.25 = ₹1,000, profit = ₹200 and margin = 20%.',
      'Another case: cost ₹1,200 and markup 40%. Selling price = 1,200 × 1.40 = ₹1,680. Profit = ₹480. Margin = 480 ÷ 1,680 = 28.57%.',
      'A 100% markup on a ₹500 cost gives a ₹1,000 price and a 50% margin, which shows why markups above 100% are possible while margins never reach that level.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Decide first whether your target is expressed as markup or margin. Mixing them up is the most common pricing error.',
      '- Include all item-related costs in cost: transport, packaging, import duty and platform fees.',
      '- Check that the markup is enough to cover overheads such as rent and salaries, not just the product cost.',
      '- Compare the result with market prices. A markup that looks right on paper may still be above what customers will pay.',
      '- Add GST after calculating the selling price, not inside the markup.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The tool applies one markup to one cost. It does not include GST, discounts, returns or overheads. Use the GST Calculator to add tax to the final selling price, and the Discount Calculator to see how a promotion changes what you receive.'
    ] }
  ],
  faqs: [
    ['How do I find the markup I need for a target margin?', 'Markup = margin ÷ (100 − margin) × 100. For a 20% margin you need a 25% markup; for a 30% margin you need about 42.86%.'],
    ['Should markup be applied before or after GST?', 'Apply it to the cost without GST to get the selling price, then add GST on top. Markup on a GST-inclusive cost overstates your price.'],
    ['Can I use a markup of 0%?', 'Yes. The selling price then equals cost, with zero profit and zero margin.'],
    ['Is a higher markup always better?', 'Not necessarily. A high markup can reduce sales volume. Total profit depends on both profit per unit and the number of units sold.']
  ]
},

'discount-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator finds the price you pay after a discount, how many rupees you save and the effective discount percentage. It supports two discounts applied one after another, which is common in festive sales (for example, 20% off plus an extra 10% for a card or coupon).',
      'Shoppers can use it to compare offers, and sellers can use it to check what a promotion does to the price a customer sees.'
    ] },
    { h: 'The formula explained', p: [
      'Final price = original price × (1 − d1 ÷ 100) × (1 − d2 ÷ 100), where d1 is the first discount and d2 the additional one. You save the original price minus the final price, and the effective discount = savings ÷ original price × 100.',
      'Two discounts are not added together. The second percentage applies to the already reduced price, so the effective discount is always a little lower than the simple sum. Two discounts of 20% and 10% combine to 28%, not 30%.',
      'To work backwards from a sale price to the original price, divide by (1 − discount ÷ 100). For a single 20% discount, a sale price of ₹1,600 implies an original of 1,600 ÷ 0.80 = ₹2,000.'
    ] },
    { h: 'Worked example', p: [
      'An item is priced at ₹2,000. With only the 20% discount, the final price is ₹1,600 and you save ₹400.',
      'Now add a second 10% discount. The price after the first discount is ₹1,600, and 10% off that is ₹160, so the final price is ₹1,440. You save ₹560 in total, an effective discount of 28%.',
      'Reversing the order gives the same result, because multiplication does not depend on order: 2,000 × 0.90 × 0.80 is also ₹1,440.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Do not add discount percentages. Multiply the remaining fractions, or use this calculator.',
      '- Check whether a flat cashback or bank offer is a percentage of the original price or of the discounted price. It may also have a maximum cap in rupees, which this tool does not apply.',
      '- Compare final rupee prices, not percentages. A smaller percentage on a lower base price may be cheaper.',
      '- Confirm whether the displayed price includes GST. A discount is normally applied before GST on a tax invoice.',
      '- Beware of inflated original prices. A big discount from a price nobody pays is not a real saving.'
    ] },
    { h: 'Assumptions and limits', p: [
      'Discounts must be between 0% and 100%. The tool handles percentage discounts only, up to two in sequence. It does not model fixed-amount coupons, buy-one-get-one offers, delivery charges or caps on maximum discount.'
    ] }
  ],
  faqs: [
    ['How do I calculate a discount percentage from two prices?', 'Discount % = (original − sale price) ÷ original × 100. From ₹2,000 to ₹1,500, that is 500 ÷ 2,000 = 25%.'],
    ['Is a 50% + 50% discount a free item?', 'No. 50% off, then 50% off the remainder, equals a 75% total discount, so you still pay 25% of the original price.'],
    ['Is GST charged on the original or discounted price?', 'When the discount is shown on the invoice, GST is charged on the reduced value. Check your invoice to be sure how a particular seller has handled it.'],
    ['Does this work for increases as well?', 'The tool is built for discounts. For a price increase use the Percentage Calculator, or the Markup Calculator for pricing from cost.']
  ]
},

'invoice-generator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This tool computes the money columns of a GST invoice line. You enter the quantity, unit price, a discount percentage and the GST rate, and it shows the subtotal, discount, taxable value, GST amount and invoice total.',
      'It is helpful for small businesses, freelancers and traders who prepare quotations or bills by hand or in a spreadsheet and want a quick check. You can print or save the page for your records. It does not generate a legal tax invoice, and it does not store any data.'
    ] },
    { h: 'The formula explained', p: [
      '- Subtotal = quantity × unit price',
      '- Discount = subtotal × discount % ÷ 100',
      '- Taxable value = subtotal − discount',
      '- GST = taxable value × GST rate ÷ 100',
      '- Invoice total = taxable value + GST',
      'GST is calculated on the taxable value after the discount, not on the original subtotal. This matches the usual treatment where a trade discount is shown on the invoice itself.',
      'For a sale within one state, the GST amount is split equally into CGST and SGST. For sale to another state it appears as IGST. The total tax is the same either way.'
    ] },
    { h: 'Worked example', p: [
      'The defaults: 10 units at ₹500 each with a 5% discount and 18% GST.',
      'Subtotal = 10 × 500 = ₹5,000. Discount = 5% of 5,000 = ₹250. Taxable value = ₹4,750. GST = 18% of 4,750 = ₹855, which is ₹427.50 CGST plus ₹427.50 SGST. Invoice total = ₹5,605.',
      'Had GST been wrongly charged on the pre-discount subtotal, it would have been ₹900 and the customer would have been overcharged by ₹45.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- A real tax invoice needs more than amounts: supplier and buyer details, GSTIN where applicable, an invoice number and date, HSN or SAC code, place of supply and the tax split. Use accounting or billing software for the actual document.',
      '- Use the correct GST rate for each item. Where an invoice has several items with different rates, calculate each line separately and add them.',
      '- Keep the unit price free of GST. If your price already includes GST, remove it first using the GST Calculator.',
      '- Check how the document should be rounded. Invoices generally show the total rounded off with the rounding shown separately.',
      '- Keep copies of invoices for the period your records rules require.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The tool handles a single line item with one discount and one GST rate. It does not include shipping, cess, TCS or TDS, round-off, or multi-line totals. Confirm current invoicing requirements, including e-invoicing thresholds, with the GST portal or a tax professional.'
    ] }
  ],
  faqs: [
    ['Is the discount applied before or after GST?', 'Before. This calculator reduces the subtotal by the discount, then charges GST on the remaining taxable value.'],
    ['Can I use this for an invoice with several items?', 'Calculate each line separately and add the totals by hand. Only items at the same rate can share one GST calculation.'],
    ['What if my price already includes GST?', 'Divide it by (1 + rate ÷ 100) to get the pre-tax unit price, or use the Remove GST mode in the GST Calculator, then enter that unit price here.'],
    ['Does this tool make my invoice legally valid?', 'No. It only calculates amounts. A valid GST invoice must contain the particulars required by GST rules and should be issued from your billing or accounting system.']
  ]
},

'break-even-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'The break-even point is the sales volume at which your total income exactly equals your total costs, so you make neither profit nor loss. This calculator takes your fixed costs, selling price per unit and variable cost per unit, and returns the contribution per unit, the number of units you must sell and the revenue that represents.',
      'It is useful when launching a shop, product or service, deciding whether a price makes sense, or checking how risky a new fixed commitment such as a larger rent or a new loan EMI would be.'
    ] },
    { h: 'The formula explained', p: [
      'Contribution per unit = selling price − variable cost per unit. This is the amount each sale contributes toward paying fixed costs.',
      'Break-even units = fixed costs ÷ contribution per unit, rounded up to the next whole unit, because you cannot sell a fraction and still cover the cost fully. Break-even revenue = break-even units × selling price.',
      'Fixed costs stay the same whatever you sell in the period, such as rent, salaries, insurance and loan EMIs. Variable costs rise with each unit, such as raw materials, packaging, commission and delivery. If the selling price is not above the variable cost, no sales volume will ever cover fixed costs, and the calculator returns no result.'
    ] },
    { h: 'Worked example', p: [
      'The defaults: fixed costs ₹1,00,000 per month, selling price ₹500 and variable cost ₹300 per unit.',
      'Contribution = 500 − 300 = ₹200. Break-even units = 1,00,000 ÷ 200 = 500 units. Break-even revenue = 500 × 500 = ₹2,50,000.',
      'A second case with a fractional answer: fixed costs ₹1,20,000, price ₹450 and variable cost ₹270. Contribution = ₹180. Units = 1,20,000 ÷ 180 = 666.67, rounded up to 667. Revenue = 667 × 450 = ₹3,00,150. Every unit sold beyond 667 adds ₹180 to profit.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Use the same period for fixed costs and for the answer. Monthly fixed costs give monthly break-even units.',
      '- Do not put a cost in the wrong bucket. A salary that stays the same is fixed, but sales commission is variable.',
      '- Include all variable costs: packaging, payment fees, delivery and returns, not just raw materials.',
      '- Compare the break-even number to what you can realistically sell. If it is more than your likely monthly demand, change the price or cost structure first.',
      '- Re-run the calculation with a lower price, a lower variable cost and a different fixed cost, to see which lever matters most.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The model assumes one product, a constant selling price and a constant variable cost per unit. Real businesses may have several products, volume discounts and costs that step up with scale. Prices should be entered without GST, since GST collected is not your revenue. The result is a planning aid, not a forecast.'
    ] }
  ],
  faqs: [
    ['How can I lower my break-even point?', 'Reduce fixed costs, reduce variable cost per unit, or raise the selling price. Each increases contribution or shrinks the amount that contribution must cover.'],
    ['What is the margin of safety?', 'It is how far your expected sales exceed break-even sales. If you expect 800 units and break-even is 500, you have a cushion of 300 units, or 37.5% of expected sales.'],
    ['Should I include my own salary as a fixed cost?', 'If you want the business to support you, yes. Leaving it out gives a lower break-even that does not cover your living costs.'],
    ['How do I find the units needed for a target profit?', 'Add the target profit to the fixed costs and divide by contribution per unit. For ₹50,000 profit in the default example, (1,00,000 + 50,000) ÷ 200 = 750 units.']
  ]
},

'marriage-budget-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'A wedding involves many vendors and many small payments, and totals tend to grow. This calculator adds up the main cost heads: catering (guests × cost per plate), venue, decoration, attire and jewellery, photography and video, and other costs. It then adds a contingency buffer and shows the total budget and the cost per guest.',
      'It is meant for early planning, so a family can see the order of magnitude of the spend and test what happens if the guest list or the catering rate changes before booking anything.'
    ] },
    { h: 'The formula explained', p: [
      '- Catering = number of guests × cost per plate',
      '- Subtotal = catering + venue + decoration + attire and jewellery + photography + other costs',
      '- Contingency buffer = subtotal × buffer % ÷ 100',
      '- Total budget = subtotal + buffer',
      '- Cost per guest = total budget ÷ number of guests',
      'The buffer default is 10%, and you can edit it under the advanced settings. It is applied to the whole subtotal, so it covers extra guests, price increases, last-minute purchases and anything forgotten.'
    ] },
    { h: 'Worked example', p: [
      'The defaults: 300 guests at ₹600 a plate, venue ₹1,50,000, decoration ₹1,00,000, attire and jewellery ₹2,50,000, photography ₹80,000 and other costs ₹50,000.',
      'Catering = 300 × 600 = ₹1,80,000. Subtotal = 1,80,000 + 1,50,000 + 1,00,000 + 2,50,000 + 80,000 + 50,000 = ₹8,10,000. Buffer at 10% = ₹81,000. Total budget = ₹8,91,000. Cost per guest = 8,91,000 ÷ 300 = ₹2,970.',
      'If the guest list rises to 400, catering becomes ₹2,40,000 and the subtotal ₹8,70,000, so the total with buffer is ₹9,57,000. Guest count influences the total more than most other items, because it multiplies the per-plate cost.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Fix the guest count early, and count children and vendors who will also eat. Catering is the most flexible and the largest line.',
      '- Ask for written quotations that state what is included. Taxes, service charges, power backup, overtime and clean-up are frequent surprises.',
      '- Use the Other costs box for items such as invitations, gifts, travel, accommodation for guests, priest or officiant, music and make-up.',
      '- Wedding costs are seasonal. Peak dates and popular venues cost more, and booking early may help with the price.',
      '- Track the real payments against this plan as you go, and keep the buffer for emergencies rather than for upgrades.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The default figures are placeholders, not average market prices. Costs vary greatly by city, community, season and scale. Multiple events such as engagement, mehendi and reception should be added to the relevant lines or to Other costs. The calculator does not model financing, loans or tax and does not include gifts received.'
    ] }
  ],
  faqs: [
    ['Which wedding cost is usually the biggest?', 'For most families it is catering and venue combined, followed by attire and jewellery. Because catering scales with guests, the guest list is the main control on your total.'],
    ['Should I borrow for a wedding?', 'That is a personal decision this tool does not advise on. If you do plan to borrow, compare the EMI and total interest with your income using an EMI calculator before committing.'],
    ['How do I split the budget between two families?', 'Agree the categories each side will pay for, then total those lines separately. You can run the calculator once per side with only their items entered.'],
    ['What cost per plate should I enter?', 'Use the per-plate quote from your caterer, and confirm whether it includes taxes, service charges, live counters and extra dishes.']
  ]
},

'budget-planner': {
  sections: [
    { h: 'What this calculator does', p: [
      'This planner splits your monthly take-home income into three groups: needs, wants and savings. It is built around the 50/30/20 rule, which suggests 50% of income for needs, 30% for wants and 20% for savings and investments, but you can type your own percentages.',
      'Use it at the start of the month or when your income changes. It gives you a spending ceiling for each group and a savings target in rupees, which is easier to follow than a vague intention to save more.'
    ] },
    { h: 'The formula explained', p: [
      'You enter the percentages for needs and wants. Savings are whatever is left: savings % = 100 − needs % − wants %. Each amount = monthly income × percentage ÷ 100.',
      'Use take-home income, meaning the amount that actually reaches your bank account after PF, tax and other deductions. If your income varies, use a conservative average or your lowest typical month.',
      'Needs are costs you must meet: rent or home loan EMI, groceries, utilities, transport, insurance premiums, school fees and minimum loan payments. Wants are discretionary: dining out, subscriptions, travel, shopping and entertainment. Savings include emergency fund contributions, SIPs, retirement contributions and extra loan prepayment.'
    ] },
    { h: 'Worked example', p: [
      'Take a monthly take-home income of ₹60,000 and the default 50/30/20 split.',
      'Needs = 60,000 × 50% = ₹30,000. Wants = 60,000 × 30% = ₹18,000. Savings = 60,000 × 20% = ₹12,000, which is a 20% savings rate.',
      'Suppose rent and EMIs in a large city push needs to 60%. With wants kept at 25%, savings drop to 15%, or ₹9,000. The calculator makes the trade-off visible, so you can decide whether to cut wants, raise income or accept a lower savings rate for a period.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Treat the rule as a starting point. A high-rent city, dependants or a loan may call for a different split.',
      '- Build an emergency fund first. Many planners suggest several months of essential expenses held in an easily accessible place.',
      '- Place savings into a separate account or SIP on salary day, rather than saving whatever is left at month end.',
      '- Do not classify wants as needs. Check your last three months of bank statements and sort each spend honestly.',
      '- Revisit the percentages after salary increments. Keeping lifestyle spending steady while income rises raises your savings rate.'
    ] },
    { h: 'Assumptions and limits', p: [
      'Needs plus wants must not exceed 100%. The tool does not read your actual spending, track categories over time or give investment advice. It shows a target allocation only. Irregular costs such as annual insurance premiums or school fees should be divided by twelve and included in needs.'
    ] }
  ],
  faqs: [
    ['Should I use gross or take-home income?', 'Use take-home income, since you can only spend and save what you actually receive. Our Salary Take-home Calculator can estimate it from gross pay.'],
    ['Where do EMIs fit in the 50/30/20 rule?', 'Minimum payments on loans count as needs. Extra prepayments beyond the minimum are usually counted under savings, as they reduce debt.'],
    ['What if my needs are already above 50%?', 'Then reduce wants first and keep some savings going, even a small one. Over time, aim to bring needs down or income up. Adjust the percentages in the tool to match your real situation.'],
    ['How much should I save each month?', 'There is no single answer. Twenty percent is a common target, but the right amount depends on your goals, age, dependants and existing savings.']
  ]
},

'education-cost-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator helps parents plan for a future education expense such as a degree, professional course or study abroad. You enter what the education costs today, the number of years until you will need the money, an assumed yearly rate of education inflation and the return you expect from your investments.',
      'It gives two numbers: what the education may cost when you need to pay for it, and the monthly amount you would need to invest, through an SIP-style plan, to reach that figure.'
    ] },
    { h: 'The formula explained', p: [
      'Step 1 is inflation: future cost = cost today × (1 + inflation ÷ 100)^years. Education costs have often risen faster than general prices, which is why inflation is a separate input.',
      'Step 2 is the monthly investment. With monthly return r = annual return ÷ 12 and n = years × 12 months, the calculator treats each instalment as paid at the start of the month. The required monthly amount = future cost × r ÷ (((1 + r)^n − 1) × (1 + r)). If the return is zero, it simply divides the future cost by the number of months.',
      'Higher inflation raises the target, and a higher expected return lowers the monthly amount. A longer time period helps a lot, because compounding has more months to work.'
    ] },
    { h: 'Worked example', p: [
      'The defaults: cost today ₹20,00,000, needed after 12 years, inflation 8% a year and expected return 10% a year.',
      'Future cost = 20,00,000 × 1.08^12 = about ₹50,36,340. The monthly return is 10 ÷ 12 = 0.8333%, over 144 months. The monthly saving required comes to about ₹18,068.',
      'To test sensitivity, lower the expected return to 8%. The target is unchanged at roughly ₹50.36 lakh, but the monthly amount rises to about ₹20,802. A two-point fall in returns therefore costs around ₹2,700 more every month, which shows why a cushion is wise.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Start with a realistic cost today. Include tuition, hostel, books, exam fees and living costs, not just the headline fee.',
      '- Be cautious about the return. Market-linked returns are not guaranteed, and equity can fall in the short term, so goals close to the date usually need safer instruments. Seek advice that suits your own situation.',
      '- Start early. Beginning the SIP five years sooner can lower the monthly amount dramatically.',
      '- Increase your SIP when your income grows. This calculator assumes a flat monthly amount.',
      '- Keep education savings separate from retirement and emergency money, and track progress once a year.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The calculator assumes a single lump-sum cost at the end of the period, constant inflation and a constant return. In reality, fees are usually paid over several years, rates vary, and taxes, fund charges and exchange rates (for overseas study) are not included. Treat the output as an estimate for planning, not a guarantee of returns.'
    ] }
  ],
  faqs: [
    ['What education inflation should I assume?', 'There is no fixed figure. Many people use 8 to 10% as a cautious assumption, but actual fee rises differ by course, institution and country. Review the estimate every year.'],
    ['Can I use this for overseas education?', 'Yes, by entering today’s cost in rupees. Remember that currency changes can raise the rupee cost further than inflation, so consider adding a margin.'],
    ['Does the monthly amount include a step-up each year?', 'No, it assumes the same amount every month. If you can raise your SIP annually, the starting amount can be lower.'],
    ['What if I already have some savings for this goal?', 'Reduce the future cost by what your existing savings will grow to, or reduce the cost today by an equivalent amount, and re-run the calculation.']
  ]
},

'salary-take-home-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator estimates your monthly in-hand salary from your annual gross pay. Your gross is what your employer states as total salary before deductions. What reaches your bank account is lower, because of the employee Provident Fund contribution, professional tax and income tax deducted at source.',
      'It is useful when comparing job offers, checking a payslip or planning a budget. It is an estimate only, since each employer structures pay differently.'
    ] },
    { h: 'The formula explained', p: [
      'Take-home = gross − employee PF − income tax − professional tax. Each part works as follows.',
      '- Employee PF = basic pay × PF rate (default 12%). Basic is entered as a percentage of gross (default 40%). The calculator caps the yearly PF at ₹21,600 by default, which corresponds to 12% of a ₹15,000 monthly wage ceiling. Set the cap to 0 if your PF is on full basic.',
      '- Professional tax is a state levy, entered as a monthly amount (default ₹200, charged for 12 months). States differ in whether and how much they charge.',
      '- Taxable income = gross − standard deduction (default ₹75,000) − other deductions you enter.',
      '- Income tax is computed on taxable income using the slabs for the chosen regime, with a rebate under Section 87A when taxable income is within the limit (default ₹12,00,000), marginal relief just above it in the new regime, then 4% cess.',
      'The new regime option uses the FY 2025-26 slabs built into the tool: nil to ₹4 lakh, then 5%, 10%, 15%, 20%, 25% and 30% in ₹4 lakh steps. The old regime option uses nil to ₹2.5 lakh, 5% to ₹5 lakh, 20% to ₹10 lakh and 30% above, and needs your deductions entered manually.'
    ] },
    { h: 'Worked example', p: [
      'Annual gross ₹9,00,000, basic 40%, professional tax ₹200 a month, new regime with defaults.',
      'Basic is ₹3,60,000, and 12% would be ₹43,200, but the cap limits PF to ₹21,600. Taxable income = 9,00,000 − 75,000 = ₹8,25,000, which is within the ₹12,00,000 rebate limit, so income tax is nil. Professional tax is ₹2,400 a year. Yearly take-home = 9,00,000 − 21,600 − 2,400 = ₹8,76,000, or ₹73,000 a month.',
      'A higher salary of ₹18,00,000 gives taxable income of ₹17,25,000. Slab tax is ₹1,45,000, and with 4% cess income tax is ₹1,50,800. Yearly take-home is ₹16,25,200, or about ₹1,35,433 a month.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Match the assumptions to your payslip. If your PF is calculated on a different basic or has no cap, edit those fields in the advanced section.',
      '- Do not confuse CTC with gross. CTC can include employer PF, gratuity, insurance and bonuses that never reach your account monthly.',
      '- Tax slabs, standard deduction and rebate limits change with Union Budgets. Check the latest rules on the Income Tax Department website before relying on the figures.',
      '- For the old regime, enter your 80C, HRA, home loan interest and other deductions as one figure in other deductions, set the standard deduction and rebate limit to the old-regime values and verify them.',
      '- Compare both regimes with your own numbers, and consider asking your employer or a tax professional which fits you.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The tool assumes salary is paid evenly over twelve months and that tax is spread evenly. It ignores bonuses, variable pay, employer contributions, NPS, insurance premiums, HRA exemption rules, surcharge for very high incomes, TDS timing and tax on other income. Your actual payslip can therefore differ.'
    ] }
  ],
  faqs: [
    ['Why is my payslip different from this estimate?', 'Employers split gross into basic, HRA, allowances and bonuses in their own way, and may deduct items such as insurance, loans or NPS. Adjust the basic percentage and PF fields to resemble your structure.'],
    ['Is PF a loss to me?', 'No. Employee PF is a forced saving that is credited to your PF account with interest and is returned on withdrawal subject to rules, although it reduces your monthly in-hand pay.'],
    ['Does this include employer PF?', 'No. Only the employee share is deducted here. The employer contribution is generally part of CTC, not of take-home.'],
    ['Why is tax zero at a salary of nine lakh?', 'Under the defaults, taxable income after the standard deduction falls within the Section 87A rebate limit, so tax is nil. If rules or limits change, update the advanced fields accordingly.']
  ]
}

};
