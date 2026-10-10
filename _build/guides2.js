// Long-form guides (batch 2). Plain text only; a paragraph starting with '- ' renders as a bullet.
module.exports = [
{
  slug: 'profit-margin-vs-markup-explained',
  title: 'Profit Margin vs Markup: The Difference Explained',
  desc: 'Margin and markup both describe profit but use different bases. Learn the formulas, how to convert between them and how to price correctly.',
  related: ['profit-margin-calculator', 'markup-calculator', 'break-even-calculator'],
  intro: 'Many small business owners use "margin" and "markup" as if they meant the same thing. They do not, and mixing them up is one of the commonest reasons a shop quietly earns less than it planned to.',
  sections: [
    { h: 'Two ways of measuring the same profit', p: [
      'Profit is simply selling price minus cost. Margin and markup both express that profit as a percentage, but they divide it by different numbers.',
      '- Markup = profit divided by cost, multiplied by 100. It tells you how much you added on top of what you paid.',
      '- Margin = profit divided by selling price, multiplied by 100. It tells you how much of every rupee of sales you keep as profit.',
      'Because the selling price is always larger than the cost, margin is always a smaller percentage than markup for the same sale.'
    ] },
    { h: 'A worked example', p: [
      'Suppose you buy an item for Rs 800 and sell it for Rs 1,000. Profit is Rs 200.',
      '- Markup = 200 / 800 = 25%.',
      '- Margin = 200 / 1,000 = 20%.',
      'Same sale, same Rs 200, two different percentages. Neither is wrong; they answer different questions. Markup is convenient when you are setting a price from a known cost. Margin is what you compare against your expenses, because expenses are paid out of sales revenue.'
    ] },
    { h: 'Converting between the two', p: [
      'You can move between them with two short formulas. If markup is M (as a decimal, so 25% is 0.25), then margin = M / (1 + M). If margin is G, then markup = G / (1 - G).',
      'For example, a 50% markup gives a margin of 0.5 / 1.5, which is 33.3%. Going the other way, a 50% margin needs a markup of 0.5 / 0.5, which is 100%, meaning you must charge double your cost. Shopkeepers who say "I keep 50% profit" and then add 50% to the cost price are actually earning only a one-third margin.'
    ] },
    { h: 'Pricing for a target margin', p: [
      'If you need a 25% margin on that Rs 800 item, you cannot simply add 25% to the cost. That would give Rs 1,000, which is a 20% margin as shown above. The correct formula is selling price = cost / (1 - target margin). Here that is 800 / 0.75, or about Rs 1,067.',
      'If you prefer to think in markup, a 25% markup gives Rs 1,000. Decide first which measure your business plan uses, then stay consistent. Most accounting reports, lenders and comparison with competitors use margin.'
    ] },
    { h: 'What discounts do to your margin', p: [
      'Discounts hurt more than they appear. Take the Rs 1,000 item that cost Rs 800. A 10% discount brings the price to Rs 900, and profit falls from Rs 200 to Rs 100. That is a 50% fall in profit, and the margin drops from 20% to 11.1% (100 / 900).',
      'Before running an offer, work out how many extra units you must sell to earn the same total profit. Here you would need to sell twice as many units just to stand still. Many discounts do not bring in that much extra volume.'
    ] },
    { h: 'Gross margin, net margin and break-even', p: [
      'Gross margin counts only the direct cost of the goods sold. Net margin also subtracts rent, salaries, electricity, transport, interest and other overheads. A healthy-looking gross margin can still leave a thin net margin once overheads are paid.',
      'This is where break-even analysis helps. If your fixed costs are Rs 60,000 a month and each unit sells for Rs 500 with Rs 300 of variable cost, each unit contributes Rs 200 toward fixed costs. You need 60,000 / 200 = 300 units a month just to cover costs. Sales beyond that produce profit.',
      'If your business charges GST, do the margin calculation on the price excluding GST, since the tax is collected for the government and is not your revenue. Also remember that figures here are illustrations; your actual costs, taxes and competitive position will differ.'
    ] },
    { h: 'Practical checklist', p: [
      '- Write down whether each number you quote is margin or markup.',
      '- Include all costs you pay to get the goods to the shelf, such as freight and packaging, in the cost figure.',
      '- Check your net margin at least quarterly, not just the gross margin.',
      '- Test any discount against the extra volume it would need.',
      'The profit margin, markup and break-even calculators on this site let you test these figures quickly with your own numbers.'
    ] }
  ]
},
{
  slug: 'how-to-estimate-house-construction-cost-in-india',
  title: 'How to Estimate House Construction Cost in India',
  desc: 'A practical method to estimate home construction cost: built-up area, rate per sq ft, cost components, contingency and common budgeting mistakes.',
  related: ['house-construction-cost-calculator', 'renovation-cost-calculator', 'cement-calculator'],
  intro: 'A realistic budget is the difference between finishing your house calmly and running out of money at the plastering stage. This guide explains how rough estimates are made, what they usually leave out and how to build a margin for error.',
  sections: [
    { h: 'Start with built-up area, not plot size', p: [
      'Construction cost depends on the area you actually build, counted on every floor. A 1,200 sq ft plot with a ground floor and first floor covering most of the plot means roughly 2,000 to 2,400 sq ft of built-up area, not 1,200. Balconies, staircases, parking and the terrace parapet are normally included in the builder measurement, though contractors differ on how they count open areas, so clarify this in writing.'
    ] },
    { h: 'The rate-per-square-foot method', p: [
      'The usual quick estimate multiplies built-up area by a rate per square foot. In many Indian cities, typical all-in rates for a simple to mid-range house have commonly been quoted somewhere between Rs 1,800 and Rs 2,500 per sq ft, with premium finishes costing more. Treat these as rules of thumb only. Actual rates vary by city, labour availability, material prices, soil, the number of floors and your finish choices, and they change over time. Get current quotes from local contractors and an engineer.',
      'Example: for 1,200 sq ft built-up area, 1,200 x 1,800 = Rs 21.6 lakh, and 1,200 x 2,500 = Rs 30 lakh. The gap between those two figures is Rs 8.4 lakh, which shows how much your specification choices matter.'
    ] },
    { h: 'What the rate usually covers', p: [
      'A basic construction rate generally covers the structure (foundation, columns, beams, slabs, brickwork), plastering, standard flooring, simple plumbing and electrical work and ordinary paint. The split varies, but the structure and masonry often take around half or more of the total, with finishing, electrical, plumbing and carpentry sharing the rest.',
      'Items that are frequently outside a per-sq-ft quote include:',
      '- Boundary wall, gate, borewell, sump and septic tank.',
      '- Modular kitchen, wardrobes and other furniture.',
      '- Air conditioning, solar water heater, lifts and premium fixtures.',
      '- Architect and structural engineer fees, and municipal plan approval charges.',
      '- Electricity connection, water connection and security deposits.',
      '- Interest on a construction loan while the house is being built.'
    ] },
    { h: 'Estimating from quantities', p: [
      'A second method is to estimate materials and labour separately, which is closer to how a contractor prices a job. You calculate quantities of cement, sand, aggregate, steel, bricks, tiles and paint, multiply by local rates and add labour. This is more work but it shows you where the money goes and lets you compare quotes line by line.',
      'Even a single slab shows how quantities add up. A 20 ft x 15 ft slab at 5 inches thick has a volume of about 3.54 cubic metres (125 cubic feet). With the common M20 mix this needs roughly 29 bags of 50 kg cement, about 52 cubic feet of sand and 105 cubic feet of aggregate, using the standard dry-volume allowance. Multiply this by every slab, beam and column and the numbers get large quickly. Our cement and concrete calculators handle this arithmetic.'
    ] },
    { h: 'Add contingency and price rises', p: [
      'Almost every house exceeds its first estimate. Design changes, hidden soil problems, extra visits and material price movements all contribute. A contingency of 10 to 15 percent of the construction cost is a sensible planning habit. On a Rs 21.6 lakh estimate, 10 percent is Rs 2.16 lakh and on Rs 30 lakh it is Rs 3 lakh.',
      'If construction will stretch over a year or more, allow for price rises in steel, cement and labour. Buying materials in bulk early can help only if you have safe storage and the cash to spare.'
    ] },
    { h: 'Renovation is estimated differently', p: [
      'Rebuilding or repairing an existing house is harder to price than new construction, because demolition, hidden damage in plumbing or wiring and matching old finishes all add uncertainty. Renovation work is usually priced by room or by trade, and a larger contingency is wise. The renovation cost calculator gives a starting point, but a site visit by a contractor is essential for a firm quote.'
    ] },
    { h: 'Keeping control of the budget', p: [
      '- Fix the design and specification before construction starts; changes mid-way are the most expensive.',
      '- Take written, itemised quotes from at least two or three contractors and compare like with like.',
      '- Pay in stages linked to completed work, not in large advances.',
      '- Keep a running sheet of actual spending against the estimate.',
      '- Confirm local building rules, permitted floor area and approvals before you start.',
      'Use the house construction cost calculator here for a quick range, then refine it with local quotes and professional advice. None of the figures in this article are quotations or guarantees.'
    ] }
  ]
},
{
  slug: 'how-much-paint-do-you-need',
  title: 'How Much Paint Do You Need? A Room-by-Room Guide',
  desc: 'Work out wall area, deduct doors and windows, apply coverage and coats, and add wastage to buy the right litres of paint without overspending.',
  related: ['paint-calculator'],
  intro: 'Buying too little paint means a mismatched second batch, and buying too much locks up money in tins you will never use. A few minutes of measuring gets you close to the right quantity.',
  sections: [
    { h: 'Step 1: Measure the wall area', p: [
      'Paint is applied to wall surface, not floor area. For a rectangular room, add the length and width, double it to get the perimeter, then multiply by the wall height. In feet: wall area = 2 x (length + width) x height.',
      'For a 12 ft x 10 ft room with 10 ft high walls, the perimeter is 44 ft and the gross wall area is 440 sq ft. If the room is not a simple rectangle, measure each wall separately and add them up.'
    ] },
    { h: 'Step 2: Deduct doors and windows', p: [
      'Openings that will not be painted are subtracted. The paint calculator on this site assumes about 20 sq ft for a door and 15 sq ft for a window, which are reasonable averages for standard sizes. If yours are larger, such as a wide sliding window or a double door, measure them and enter the actual figures.',
      'In the 12 x 10 room with one door and two windows: 440 - 20 - (2 x 15) = 390 sq ft of paintable wall. Many painters ignore very small openings, which gives a little extra margin.'
    ] },
    { h: 'Step 3: Apply coverage and coats', p: [
      'Coverage is how many square feet one litre covers in a single coat. Many interior emulsions are quoted at roughly 90 to 120 sq ft per litre per coat, but the figure depends on the product, the wall texture and how the paint is applied. Always check the coverage printed on the tin or the product data sheet, and note that the tin figure is often a best case on smooth, primed surfaces.',
      'Two coats are the usual standard for walls. Using 100 sq ft per litre as a middle value:',
      '- Paint needed = area x coats / coverage = 390 x 2 / 100 = 7.8 litres.',
      'Rough, unplastered or very porous walls absorb more paint and need a lower coverage figure, which means more litres.'
    ] },
    { h: 'Step 4: Add wastage', p: [
      'Some paint is lost in the tray, on rollers and brushes, and in corners and touch-ups. Adding 5 to 10 percent is common. At 10 percent, 7.8 litres becomes about 8.6 litres. Since paint is sold in standard tin sizes such as 1, 4, 10 and 20 litres, you would round up to a combination that covers it, for example one 10-litre tin or a 4-litre plus a 4-litre plus a 1-litre pack, depending on price per litre.',
      'It is worth keeping a small leftover tin for future touch-ups. Colour matching after a year or two can be difficult, especially with tinted shades.'
    ] },
    { h: 'Ceilings, primer and putty', p: [
      'Ceilings are calculated separately and use the floor area. A 14 ft x 12 ft ceiling is 168 sq ft. Two coats at 100 sq ft per litre need about 3.4 litres.',
      'On new walls, the sequence is usually wall putty, primer, then two coats of paint. Primer and putty have their own coverage figures, which are normally different from the finish coat, so calculate them separately. Skipping primer on fresh plaster can raise the amount of paint absorbed and affect the finish.'
    ] },
    { h: 'Common mistakes', p: [
      '- Using floor area instead of wall area.',
      '- Forgetting that dark colours and colour changes may need an extra coat.',
      '- Trusting the best-case coverage on the tin for rough walls.',
      '- Buying different batches of the same shade for one wall. Mix tins together or buy enough in one go to keep the colour even.',
      '- Ignoring skirting, window grills, doors and wood or metal paint, which use different products.'
    ] },
    { h: 'Using the calculator', p: [
      'Our paint calculator follows the same steps: it computes wall area, subtracts doors and windows using editable sizes, multiplies by the number of coats and divides by coverage. Enter your own measurements and the coverage from your chosen brand. Treat the result as an estimate; your painter or dealer can confirm the quantity once they see the surface condition. Prices and coverage vary by brand and product, so check both before buying.'
    ] }
  ]
},
{
  slug: 'tile-estimation-guide-wastage-and-layout',
  title: 'Tile Estimation Guide: Wastage, Layout and Cost',
  desc: 'How to calculate the number of floor tiles for a room, how much wastage to allow for straight and diagonal layouts, and what else affects cost.',
  related: ['tile-calculator', 'flooring-calculator'],
  intro: 'Tiles from the same batch can differ slightly in shade and size, so running short and reordering later is a real problem. Estimating properly, with sensible wastage, avoids that.',
  sections: [
    { h: 'The basic calculation', p: [
      'Divide the area to be tiled by the area of one tile. Keep units consistent. A 24 inch x 24 inch tile is 576 square inches, which is 4 sq ft (576 / 144). A 12 ft x 10 ft room is 120 sq ft, so a straight layout needs 120 / 4 = 30 tiles before any wastage.',
      'For rooms that are not rectangles, split the floor into rectangles, calculate each and add them. Measure at the widest points and tile areas that continue into doorways, alcoves and balconies as well.'
    ] },
    { h: 'Why wastage is needed', p: [
      'You will never use exactly the calculated number of tiles. Tiles are cut along walls, around pillars and at the edges of the room. Some break during transport or fixing, and some may have chips or defects. The wastage allowance covers this.',
      'A widely used rule of thumb is 10 percent for a straight (grid) layout and about 15 percent for diagonal or patterned layouts, where more tiles are cut at angles. For the 30-tile room, 10 percent gives 33 tiles and 15 percent gives 35 (rounded up from 34.5). Very irregular rooms, large-format tiles and expensive natural stone may need more, while a plain, perfectly fitting layout may need less. Your tiler can advise after seeing the room.'
    ] },
    { h: 'Layout choices that change the count', p: [
      'The same room needs different numbers depending on layout:',
      '- Straight grid: least wastage and quickest to fix.',
      '- Diagonal: attractive in some rooms but uses more tiles and takes more labour.',
      '- Brick or offset pattern: common with wood-look planks, which need extra allowance for end cuts.',
      '- Large-format tiles (such as 2 x 4 ft): fewer joints, but more waste in small or awkward rooms, and they require a very level floor.',
      'Dry-lay a few rows before fixing begins. If the last row against a wall would be a thin sliver of less than half a tile, shift the starting line so that cuts are balanced on both sides. This costs nothing and looks much better.'
    ] },
    { h: 'Buying the tiles', p: [
      'Tiles are sold in boxes with a fixed number of pieces, so you buy whole boxes. If a box of 24 x 24 inch tiles holds 4 pieces, 33 tiles means 9 boxes (36 tiles). Check the box coverage in sq ft instead of counting pieces, and always round up.',
      'Buy everything from one batch. Check the batch or lot number and shade printed on each box, since tiles from different batches can vary in shade and size. Keep one or two spare boxes for future repairs, because the same design may be discontinued.',
      'Inspect a few boxes on delivery for chips, warping and size consistency before the tiler starts.'
    ] },
    { h: 'Estimating cost', p: [
      'Tile cost is number of tiles x price per tile, or area bought x price per sq ft. Prices vary widely by size, finish, brand and city. As a simple illustration, 33 tiles at Rs 60 each is Rs 1,980. Premium vitrified, GVT or stone tiles can cost many times more per sq ft.',
      'The tile price is only part of the total. A fuller flooring budget also includes:',
      '- Adhesive or cement mortar, and tile grout.',
      '- Labour, usually charged per sq ft and often higher for large tiles and diagonal work.',
      '- Skirting tiles along the walls.',
      '- Removal of old flooring and levelling the base, if renovating.',
      'The flooring calculator on this site combines material rate, wastage and labour into one estimate.'
    ] },
    { h: 'Skirting, bathrooms and kitchens', p: [
      'Skirting is normally 3 to 4 inches high and runs around the room perimeter, minus door openings. For a 12 x 10 ft room that is about 44 running feet. You can cut skirting from floor tiles, which uses up extra tile, so add that to your count or buy separate skirting.',
      'Bathrooms and kitchens need wall tiles in addition to floor tiles, and anti-skid floor tiles for wet areas. Calculate wall tile area the same way as paint: perimeter x tiled height, less openings.'
    ] },
    { h: 'A short checklist', p: [
      '- Measure carefully and sketch the room with dimensions.',
      '- Choose layout first, then apply 10 to 15 percent wastage.',
      '- Round up to whole boxes and buy from a single batch.',
      '- Keep spare tiles.',
      '- Confirm labour and material rates locally; the figures here are typical rules of thumb, not quotes.'
    ] }
  ]
},
{
  slug: 'cement-sand-aggregate-ratios-explained',
  title: 'Cement, Sand and Aggregate Ratios: M15, M20, M25',
  desc: 'What concrete grades like M15, M20 and M25 mean, how mix ratios work and how to convert concrete volume into bags of cement, sand and aggregate.',
  related: ['cement-calculator', 'concrete-calculator'],
  intro: 'Concrete grades and mix ratios sound technical, but the arithmetic behind them is simple. Knowing it helps you check a contractor quantity and avoid both shortages and waste on site.',
  sections: [
    { h: 'What M15, M20 and M25 mean', p: [
      'The letter M stands for mix, and the number is the characteristic compressive strength of concrete in megapascals (N/mm2) after 28 days of curing. M20 concrete is designed for a strength of 20 N/mm2.',
      'Common nominal mixes, written as cement : sand : coarse aggregate by volume, are:',
      '- M10: 1 : 3 : 6, used for light blinding layers and non-structural work.',
      '- M15: 1 : 2 : 4, used for plain floors, levelling courses and simple footings.',
      '- M20: 1 : 1.5 : 3, the usual choice for residential slabs, beams and columns.',
      '- M25: 1 : 1 : 2, used for heavier loads, taller buildings or where the structural engineer specifies it.',
      'The grade for your house should come from the structural drawings. Do not pick a grade by guesswork, and do not lower it to save money.'
    ] },
    { h: 'Why the ratios add up to more than the concrete you get', p: [
      'A mix of 1 : 1.5 : 3 adds up to 5.5 parts, but one cubic metre of finished (wet) concrete does not need 5.5 cubic metres of ingredients. Fine sand fills the gaps between aggregate and cement fills the gaps in the sand, so the materials compact. To compensate, the dry volume of materials needed is larger than the wet volume of concrete, by a factor of about 1.52 to 1.57. This calculation commonly uses 1.54, which is also the default in our cement calculator.'
    ] },
    { h: 'Converting volume into bags: a full example', p: [
      'Take a slab 20 ft x 15 ft and 5 inches thick, mixed as M20.',
      '- Wet volume = 20 x 15 x (5 / 12) = 125 cubic feet, which is 3.54 cubic metres.',
      '- Dry volume = 3.54 x 1.54 = 5.45 cubic metres.',
      '- Total ratio parts = 1 + 1.5 + 3 = 5.5.',
      '- Cement = 5.45 x 1 / 5.5 = 0.99 cubic metres. A 50 kg bag is taken as about 0.035 cubic metres, so that is about 28.3, rounded up to 29 bags.',
      '- Sand = 5.45 x 1.5 / 5.5 = 1.49 cubic metres, about 52.5 cubic feet.',
      '- Aggregate = 5.45 x 3 / 5.5 = 2.97 cubic metres, about 105 cubic feet.',
      'The same slab in M15 (1 : 2 : 4) needs about 23 bags, 55 cubic feet of sand and 110 cubic feet of aggregate. In M25 (1 : 1 : 2) it needs about 39 bags, 48 cubic feet of sand and 96 cubic feet of aggregate. Richer mixes use noticeably more cement, which is why grades cost different amounts.',
      'Rule of thumb: M20 works out to roughly 8 bags of cement per cubic metre of concrete.'
    ] },
    { h: 'Wastage and site conditions', p: [
      'Real jobs need more than the textbook quantity. Spillage, uneven sub-base, over-excavation, formwork leaks and moisture in sand all increase consumption. Allow 5 to 10 percent extra. Sand also bulks when damp, so measured volumes can mislead; buying by weight or checking the truck volume helps.',
      'Never add extra water to make the mix easier to pour. Too much water weakens concrete far more than people expect.'
    ] },
    { h: 'Site-mixed or ready-mix?', p: [
      'Hand or machine mixing on site is flexible for small jobs, but mixing quality varies. Ready-mix concrete (RMC) arrives from a plant with controlled proportions and tested grades, and is usually sold per cubic metre. For the same slab with 5 percent wastage, the order would be about 3.72 cubic metres, which at an illustrative Rs 6,000 per cubic metre is about Rs 22,300. Ready-mix rates vary by city, grade and delivery distance, so ask for current quotes. RMC makes sense for larger pours that must be done in one day.'
    ] },
    { h: 'What these calculations leave out', p: [
      'Nominal mix ratios by volume are a practical approximation. Structural elements in important buildings may use design mixes, specified by an engineer, where proportions are decided by testing and by weight. Reinforcement steel is calculated separately. Curing, for at least seven days, matters as much as the mix. Treat the numbers here as planning figures and follow your engineer and the relevant IS codes for the final decision.'
    ] }
  ]
},
{
  slug: 'the-50-30-20-budget-rule-for-indian-households',
  title: 'The 50/30/20 Budget Rule for Indian Households',
  desc: 'How the 50/30/20 rule splits take-home pay into needs, wants and savings, and how to adjust it for rent, EMIs and family obligations in India.',
  related: ['budget-planner', 'savings-calculator'],
  intro: 'The 50/30/20 rule is a simple starting point for splitting monthly income. It was designed in a Western context, so it needs some adjustments to fit Indian household realities.',
  sections: [
    { h: 'The basic idea', p: [
      'The rule divides your take-home pay, meaning the amount that reaches your bank account after tax and PF deductions, into three buckets.',
      '- 50 percent for needs: expenses you cannot avoid, such as rent or home loan EMI, groceries, utilities, transport, school fees, insurance premiums and minimum loan repayments.',
      '- 30 percent for wants: dining out, subscriptions, shopping beyond necessities, travel, hobbies and gadgets.',
      '- 20 percent for savings and investments: emergency fund, retirement, investments, and prepaying debt beyond the minimum.',
      'Its strength is that it replaces a long list of categories with three decisions. Use take-home pay as the base, not CTC or gross salary, because the money you can actually allocate is what remains after PF and tax. If you receive irregular income such as bonuses or incentives, leave them out of the monthly base and decide separately how to use them, ideally putting a good share toward savings or debt reduction.'
    ] },
    { h: 'A worked example', p: [
      'Consider a household with a take-home income of Rs 60,000 a month.',
      '- Needs at 50 percent: Rs 30,000.',
      '- Wants at 30 percent: Rs 18,000.',
      '- Savings at 20 percent: Rs 12,000.',
      'For Rs 40,000 a month the figures are Rs 20,000, Rs 12,000 and Rs 8,000. The method scales to any income, but whether the needs bucket is realistic depends on where you live. In a large city, rent alone can take a third of income.'
    ] },
    { h: 'Adapting it to Indian households', p: [
      'Several features of Indian family finances do not fit neatly into the original rule.',
      '- Rent and EMIs in metros can push needs to 60 percent or more. In that case, a 60/20/20 split is a reasonable adjustment. Protect the savings share first and trim wants.',
      '- Money sent to parents, support for siblings and festival or social obligations are common. Decide whether you treat them as needs or wants and be consistent.',
      '- Children education costs, tuition and coaching fees belong in needs, but plan for them in advance because they rise over time.',
      '- Health and term insurance premiums are needs. Many households are underinsured, so count them before the savings bucket.',
      '- Gold purchases and chit funds are savings only if you are disciplined about them; occasional jewellery for wear is closer to wants.',
      'If your income is irregular, as for traders, freelancers and gig workers, apply the rule to an average of the lowest months, and keep a larger emergency reserve.'
    ] },
    { h: 'Where debt fits', p: [
      'The minimum EMI on a home, vehicle or personal loan belongs in needs. Extra payments to clear expensive debt, such as credit card balances, fit in the savings bucket and are often a better use of money than investing, because card interest is far higher than typical investment returns. As a general guide, many planners suggest keeping total EMIs within about 40 percent of income, but your own situation may justify more or less caution.'
    ] },
    { h: 'What to do with the 20 percent', p: [
      'Order matters. A common sequence is:',
      '- First, an emergency fund covering three to six months of essential expenses. If your needs are Rs 30,000 a month, six months is Rs 1.8 lakh. Saving Rs 12,000 a month would build that in 15 months.',
      '- Second, adequate health and term life cover.',
      '- Third, long-term investing for goals such as retirement, children education and a home.',
      'Where to invest depends on your goals, risk tolerance and tax position. The savings calculator on this site can show how a monthly amount may grow under an assumed rate of return, but returns are not guaranteed. For personal advice, consult a SEBI-registered adviser.'
    ] },
    { h: 'Making it work in practice', p: [
      '- Track your actual spending for two or three months before setting percentages.',
      '- Automate savings on salary day so the money moves before you can spend it.',
      '- Review the split once a year or when income, rent or family size changes.',
      '- Treat it as a guideline, not a rule. A household that saves 25 percent while living comfortably does not need to cut anything to hit 20.',
      'The budget planner here lets you enter your own income and expenses and compare the result with the 50/30/20 split.'
    ] }
  ]
},
{
  slug: 'how-to-plan-a-wedding-budget-in-india',
  title: 'How to Plan a Wedding Budget in India',
  desc: 'A step-by-step approach to wedding budgeting in India: setting a total, splitting it across categories, guest-count maths and avoiding overspending.',
  related: ['marriage-budget-calculator', 'budget-planner'],
  intro: 'Indian weddings involve many events, relatives and decisions, and costs build up quietly. A budget set early, with a clear order of priorities, keeps celebrations enjoyable and the family finances healthy afterward.',
  sections: [
    { h: 'Decide the total before you book anything', p: [
      'Begin with the amount you can actually afford, not the amount a venue or planner suggests. Add up what is available from savings, family contributions and any loan, then decide how much of it you are willing to spend. A loan taken for a wedding is expensive, unsecured debt, so it is usually wise to keep it small or avoid it.',
      'Settle who is paying for what. In many families the costs are shared between both sides, and unclear expectations are a major source of conflict. Agree on the split of venue, catering, accommodation and gifts early and in plain terms.'
    ] },
    { h: 'Start from the guest list', p: [
      'Guest count drives the biggest costs, because catering, venue size, seating, return gifts and accommodation all rise with it. Catering is typically charged per plate, so the arithmetic is direct. At an illustrative Rs 1,500 per plate, 300 guests cost Rs 4.5 lakh for one meal, and 200 guests cost Rs 3 lakh.',
      'Remember that you pay for plates, not just attendance, and that several events (engagement, mehendi, sangeet, wedding, reception) may each need catering. Ask caterers for per-plate rates for each event and get the menu and what is included in writing. Rates vary widely by city, menu and venue.'
    ] },
    { h: 'A sample split of a Rs 15 lakh budget', p: [
      'There is no correct split, because families differ in priorities, but a sample helps you see the proportions. The figures below are only an illustration:',
      '- Venue and catering, 40 percent: Rs 6 lakh.',
      '- Jewellery, clothing and wedding outfits, 20 percent: Rs 3 lakh.',
      '- Decoration and entertainment, 10 percent: Rs 1.5 lakh.',
      '- Photography and videography, 7 percent: Rs 1.05 lakh.',
      '- Travel and guest accommodation, 8 percent: Rs 1.2 lakh.',
      '- Rituals, priest, invitations and miscellaneous, 5 percent: Rs 75,000.',
      '- Contingency, 10 percent: Rs 1.5 lakh.',
      'Adjust the shares to match your own plan. A family that values jewellery and wants a small ceremony will reverse several lines.'
    ] },
    { h: 'Do not skip the contingency', p: [
      'Final costs often exceed estimates. Guest lists grow, an event gets extended, rates rise before the date, and last-minute purchases appear. Reserve 10 percent or more as contingency and treat it as unavailable unless something truly unexpected happens. If you have not touched it a week before the wedding, you can use it for something worthwhile or keep it.'
    ] },
    { h: 'Ways to save without ruining the event', p: [
      '- Choose an off-peak date or weekday. Venues and vendors often discount outside the main wedding season.',
      '- Trim the guest list or the number of formal events; it is the most effective cut.',
      '- Limit the menu. Each extra counter or course raises the plate cost.',
      '- Compare at least three quotes for photography, decoration and catering, and check recent work and references.',
      '- Rent outfits or accessories used only once, and avoid buying gold at peak prices without need.',
      '- Book travel and accommodation early for out-of-town relatives.'
    ] },
    { h: 'Paperwork and payment discipline', p: [
      'Get every vendor agreement in writing, including the amount, what is included, cancellation and refund terms, and payment schedule. Pay advances in stages and keep receipts. Be cautious of large cash payments, and confirm that venue fees and any taxes applicable are included in the quoted price or clearly stated.',
      'Track every payment in a shared sheet so both families see the same numbers. Review it weekly in the last two months, when most payments fall due.'
    ] },
    { h: 'Think about life after the wedding', p: [
      'The weeks after the wedding bring their own costs, such as setting up a home, travel and gifts to give. Do not exhaust all your savings, and keep your emergency fund separate from the wedding fund. If a loan is unavoidable, check the total repayment cost, not just the monthly instalment.',
      'The marriage budget calculator on this site helps you break a total into categories, and the budget planner helps you plan ongoing household spending afterward. All rates and percentages here are illustrative and your own quotes should be used for real planning.'
    ] }
  ]
},
{
  slug: 'in-hand-salary-vs-ctc-explained',
  title: 'In-Hand Salary vs CTC: Why Take-Home Is Lower',
  desc: 'Understand CTC components, employee PF, gratuity, professional tax and how income tax is worked out, with a worked example of monthly take-home.',
  related: ['salary-take-home-calculator'],
  intro: 'The CTC in your offer letter is not the amount that arrives in your bank account each month. Understanding the gap helps you compare job offers sensibly and plan your monthly budget.',
  sections: [
    { h: 'What CTC means', p: [
      'CTC stands for cost to company. It is the total amount your employer spends on you in a year, including items you never receive as cash in hand. A typical CTC includes:',
      '- Basic salary, often 35 to 50 percent of CTC.',
      '- House rent allowance (HRA) and other allowances such as special or conveyance allowance.',
      '- Employer contribution to the provident fund.',
      '- Gratuity provision.',
      '- Insurance premiums and other benefits paid by the company.',
      '- Variable pay or bonus, which is paid only if conditions are met.',
      'Because employer PF, gratuity and insurance are part of CTC but do not appear in your monthly credit, the in-hand figure is always lower than CTC divided by 12.'
    ] },
    { h: 'Deductions from your gross pay', p: [
      'Gross salary is what you earn before deductions. From it, the employer deducts:',
      '- Employee provident fund (PF). The usual rate is 12 percent of basic pay. The statutory wage ceiling is Rs 15,000 a month, which makes the minimum mandatory contribution Rs 1,800 a month (Rs 21,600 a year). Many employers contribute on actual basic pay, which gives a higher deduction, so check your offer.',
      '- Professional tax, a state-level levy. Where it applies, a common amount is around Rs 200 a month, and the yearly total is capped by law at Rs 2,500. Some states do not charge it at all.',
      '- Income tax deducted at source (TDS), based on your projected annual tax.',
      'Employee PF is not lost money. It is saved in your account and earns interest, though you cannot freely use it. Gratuity is paid after five years of service, in general, and is calculated roughly as 15 days of basic pay for each year, which works out to about 4.81 percent of basic each year.'
    ] },
    { h: 'How income tax is worked out', p: [
      'The mechanism is the same in outline each year, though the rates change. First you take gross income and subtract the standard deduction for salaried people. Under the old regime you can also subtract deductions such as Section 80C investments, HRA exemption and home-loan interest. The result is taxable income. Tax is then charged slab by slab: each band of income is taxed at its own rate, not the whole income at the highest rate. A rebate under Section 87A can reduce tax to nil for taxable incomes up to a stated limit, and cess of 4 percent is added to the tax.',
      'Slabs, rebates, the standard deduction and the choice of regime are changed by the Union Budget from time to time. Always verify the rules for the current financial year on the Income Tax Department website or with a qualified tax professional before relying on any figure.'
    ] },
    { h: 'Worked example: Rs 9 lakh gross', p: [
      'The calculator on this site uses these assumptions: new regime slabs for FY 2025-26, a standard deduction of Rs 75,000, employee PF at 12 percent of basic with basic at 40 percent of gross, a PF yearly cap of Rs 21,600, professional tax of Rs 200 a month and a Section 87A limit of Rs 12 lakh. For an annual gross of Rs 9,00,000:',
      '- Basic pay = Rs 3,60,000. PF at 12 percent would be Rs 43,200 but is capped at Rs 21,600.',
      '- Taxable income = 9,00,000 - 75,000 = Rs 8,25,000.',
      '- Slab tax = Rs 20,000 (4 to 8 lakh at 5 percent) plus Rs 2,500 (8 to 8.25 lakh at 10 percent) = Rs 22,500, which the 87A rebate cancels because taxable income is below Rs 12 lakh.',
      '- Professional tax = 200 x 12 = Rs 2,400.',
      '- Annual take-home = 9,00,000 - 21,600 - 0 - 2,400 = Rs 8,76,000, or Rs 73,000 a month.',
      'If your employer deducts PF on the full basic instead, the deduction is Rs 43,200 a year and the monthly figure falls to about Rs 71,200.'
    ] },
    { h: 'A higher-income example: Rs 15 lakh gross', p: [
      'With the same assumptions, Rs 15,00,000 gross gives a taxable income of Rs 14,25,000, which is above the rebate limit. Slab tax is Rs 20,000 + Rs 40,000 + Rs 33,750 (12 to 14.25 lakh at 15 percent) = Rs 93,750. Adding 4 percent cess makes it Rs 97,500. After PF of Rs 21,600 and professional tax of Rs 2,400, annual take-home is Rs 13,78,500, or about Rs 1,14,875 a month.',
      'This is a simplified estimate. It ignores bonuses, HRA exemption, employer-specific structures and many other deductions, so your payslip will differ.'
    ] },
    { h: 'Using this when comparing offers', p: [
      '- Ask for the full salary breakup, not just the CTC figure.',
      '- Check how much of CTC is fixed and how much is variable or conditional.',
      '- Find out whether PF is on the statutory ceiling or on actual basic.',
      '- Look at insurance and other benefits you would actually use.',
      '- Estimate your tax under both regimes if both are open to you, and compare.',
      'The salary take-home calculator lets you change each assumption, including the regime, PF cap and professional tax, to match your own payslip. Use it for planning only and confirm details with your employer payroll team.'
    ] }
  ]
}
];
