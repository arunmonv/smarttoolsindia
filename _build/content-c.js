// On-page educational content for calculator pages (set C).
module.exports = {

'house-construction-cost-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator gives a first-level budget for building a house when you know the built-up area and the going construction rate in your city. It is meant for the early planning stage, when you are deciding whether a plan fits your savings or loan eligibility, before an architect or contractor has prepared a detailed bill of quantities.',
      'You enter the built-up area of one floor, the number of floors and a rate in rupees per sq ft. The tool multiplies them to get a total, and then splits that total into materials, labour and approvals and other costs so you can see roughly where the money goes.',
      'Built-up area means the full constructed area, including walls, balconies, staircase and any covered porch, not just the carpet area inside the rooms. Using plot area instead of built-up area is a common source of wrong estimates.'
    ] },
    { h: 'The formula explained', p: [
      'Total cost = built-up area per floor × number of floors × rate per sq ft.',
      'The split uses two percentages. By default materials are 60% of the total, labour is 30%, and the remaining 10% is treated as approvals, supervision, utility connections and other items. The two shares you enter must not add up to more than 100%. These percentages are a common rule of thumb, not a fixed standard; the real split changes with the market, the specification and whether you buy materials yourself or hand over the whole job on a turnkey basis.',
      'The rate is the most sensitive input. A basic-specification house in a smaller town may be built at a noticeably lower rate than a house with premium fittings in a metro, so use rates quoted by local contractors for similar work rather than a figure from another city.'
    ] },
    { h: 'Worked example', p: [
      'Take a two-floor house with 1,500 sq ft built-up area on each floor and a rate of ₹2,200 per sq ft.',
      '- Total built-up area = 1,500 × 2 = 3,000 sq ft',
      '- Total cost = 3,000 × 2,200 = ₹66,00,000',
      '- Materials at 60% = ₹39,60,000',
      '- Labour at 30% = ₹19,80,000',
      '- Approvals and other at 10% = ₹6,60,000',
      'With the default inputs (1,200 sq ft, one floor, ₹2,000 per sq ft) the total is ₹24,00,000. If you later add a floor on the same plan, the estimate scales in proportion, although in practice the cost of a second floor is often a little lower per sq ft because the foundation is already in place.'
    ] },
    { h: 'Tips and common mistakes', p: [
      '- Use built-up area, not carpet area or plot area. Ask your architect for the built-up figure, including sunshade projections and the staircase.',
      '- Take the rate from two or three local contractors for the same level of finish. Ask what the rate includes (for example, whether electrical fittings, plumbing fixtures, flooring and painting are covered).',
      '- Keep separate budgets for land, registration, boundary wall, borewell or sump, interiors, modular kitchen, wardrobes and furniture. This estimate covers the structure and basic finishing only.',
      '- Add a contingency of about 10% for price rises in steel and cement and for changes you make while the work is on.',
      '- Do not compare a rate that includes materials with one that is labour-only. Labour-only contracts quote a much lower figure per sq ft.'
    ] },
    { h: 'Assumptions and limits', p: [
      'The result is a budget estimate, not a quotation. Soil conditions, foundation type, site access, local material prices, the grade of tiles and fittings, and the contractor you choose can all move the final cost well away from this figure. Confirm quantities and rates with a structural engineer or architect and get written quotes before committing to a budget.'
    ] }
  ],
  faqs: [
    ['Should I use built-up area or plot area?', 'Use built-up area, which is the total constructed area on each floor. Plot area is only the land; a 1,200 sq ft plot may carry far less or more built-up area depending on setbacks and floors.'],
    ['Why is the default split 60% materials and 30% labour?', 'It is a commonly quoted rule of thumb for residential work in India. Your actual split can differ, so you can edit both percentages under Advanced assumptions.'],
    ['Does the cost per sq ft fall for bigger houses?', 'Often a little, because fixed items such as the kitchen, bathrooms and staircase are spread over more area. Smaller houses with many bathrooms can cost more per sq ft.'],
    ['How much contingency should I keep on top of this estimate?', 'Many builders suggest keeping around 10% aside for price changes and design changes during construction. Treat it as a rule of thumb and discuss it with your engineer.']
  ]
},

'paint-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator tells you how many litres of paint to buy for the walls of a room. It saves two common problems: buying too little and having to match the shade from a different batch later, or buying far too much and spending money on paint that sits unused.',
      'You enter the room length, width and wall height in feet, the number of doors and windows, the number of coats and the coverage of your paint. The tool works out the paintable wall area and then the litres needed. It is meant for walls; ceilings are not included, so add the ceiling area separately if you plan to paint it.'
    ] },
    { h: 'The formula explained', p: [
      'Wall area = 2 × (length + width) × height. This is the area of all four walls. From it, the calculator subtracts the openings: number of doors × area of one door, and number of windows × area of one window. The defaults are 20 sq ft per door and 15 sq ft per window, and you can change them under Advanced assumptions if your doors or windows are larger or smaller.',
      'Paint required = paintable area × number of coats ÷ coverage. Coverage is the area that one litre covers in a single coat. The default is 100 sq ft per litre per coat, which is a reasonable middle value for many interior emulsions on a smooth, primed wall. Rough plaster, new unprimed walls and darker shade changes absorb more paint, so coverage on site can be noticeably lower. The figure printed on the tin is the best guide for your product.',
      'The litres figure is rounded up to one decimal place.'
    ] },
    { h: 'Worked example', p: [
      'A bedroom is 12 ft long, 10 ft wide and 10 ft high, with one door and two windows, painted with two coats at 100 sq ft per litre.',
      '- Gross wall area = 2 × (12 + 10) × 10 = 440 sq ft',
      '- Openings = 1 × 20 + 2 × 15 = 50 sq ft',
      '- Paintable area = 440 − 50 = 390 sq ft',
      '- Paint = 390 × 2 ÷ 100 = 7.8 litres',
      'In practice you would buy a 10-litre pack, or a 4-litre and a 4-litre can, which leaves a small reserve for touch-ups. For a larger room of 15 ft by 12 ft with the same height, door and windows, the paintable area is 490 sq ft and two coats need 9.8 litres.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Check the coverage on your product tin and enter that value instead of the default.',
      '- Buy about 5-10% extra for touch-ups and uneven absorption, and keep the leftover can labelled with the shade code for future repairs.',
      '- Primer and putty are separate products. If walls are new or being repainted after repairs, calculate primer on the same area using its own coverage figure.',
      '- Do not forget ceilings, grills, doors and wood work if they are being painted; they need different paint and a separate calculation.',
      '- Buy all the paint for one room in a single batch where possible, since shades can vary slightly between batches.',
      '- Textured finishes and deep colours often need an extra coat. Raise the number of coats rather than trusting a lower coverage guess.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The calculator assumes a rectangular room with the same wall height all round. For L-shaped rooms, split the room into rectangles and add the results, or measure each wall. Coverage depends on the surface, the paint and how it is applied, so treat the answer as a good estimate and confirm quantities with your painter or paint dealer.'
    ] }
  ],
  faqs: [
    ['Does the calculator include the ceiling?', 'No. It covers the four walls only. Multiply length by width to get the ceiling area and calculate it separately, since ceiling paint often has a different coverage.'],
    ['Should I deduct windows and doors?', 'Yes, usually. Deducting them avoids over-buying. The defaults are 20 sq ft per door and 15 sq ft per window, which you can change in Advanced assumptions.'],
    ['How do I paint a room with a dark colour change?', 'Plan for a primer coat and possibly three finish coats. Increase the coats field to match, since dark-to-light changes especially hide poorly.'],
    ['Why does my painter estimate a different quantity?', 'Painters allow for wall texture, roller or spray method and wastage. Differences of 10-15% are normal; ask for their coverage assumption and compare it with the tin.']
  ]
},

'tile-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator works out how many floor tiles you need for a room and what they will cost, including an allowance for cutting and breakage. It is useful before you visit a tile showroom, so that you can compare different tile sizes on the same room and know how many boxes to ask for.',
      'You enter the room length and width in feet, the tile length and width in inches, a wastage percentage and the price per tile. The result shows the room area, the number of tiles and the estimated tile cost. It covers the tiles only; adhesive, spacers, grout, skirting and labour are not included.'
    ] },
    { h: 'The formula explained', p: [
      'Because the room is measured in feet and the tile in inches, the calculator converts the room area to square inches by multiplying by 144, since one sq ft has 12 × 12 = 144 sq in.',
      'Tiles = room area (sq ft) × 144 ÷ (tile length × tile width in inches) × (1 + wastage %), rounded up to the next whole tile.',
      'The wastage allowance covers cut tiles along walls, breakage in transport and fitting, and a few spare tiles for future repairs. About 10% is typical for a straight layout in a simple rectangular room. A diagonal layout, a patterned or large-format tile, or a room with many corners and niches wastes more, so around 15% is a safer assumption. These are rules of thumb and your tile fitter may prefer a different figure.',
      'Note that tiles are sold in boxes with a fixed number of pieces. Round up to whole boxes when you order.'
    ] },
    { h: 'Worked example', p: [
      'A room is 12 ft by 10 ft and you plan to use 24 inch by 24 inch tiles (2 ft by 2 ft) with 10% wastage at ₹60 per tile.',
      '- Room area = 12 × 10 = 120 sq ft',
      '- One tile = 24 × 24 = 576 sq in',
      '- Tiles without wastage = 120 × 144 ÷ 576 = 30 tiles',
      '- With 10% wastage = 33 tiles',
      '- Cost = 33 × ₹60 = ₹1,980',
      'If you chose a 12 inch by 12 inch tile for the same room at ₹25 each, you would need 120 × 144 ÷ 144 = 120 tiles, or 132 with 10% wastage, costing ₹3,300. Smaller tiles mean more cuts and more grout lines, but they can be easier to handle and cut around fixtures.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Measure the room at the floor, including areas under door frames where tiles continue, and enter the length and width of each rectangular section separately if the room is not a simple rectangle.',
      '- Do not mix up tile size in inches with room size in feet. The calculator expects tile dimensions in inches (a 2 ft tile is 24 inches).',
      '- Real tile sizes differ slightly from the nominal size. A "600 x 600 mm" tile is about 23.6 inches, so check the actual size on the box.',
      '- Buy all tiles from the same batch. Shade and size can vary between batches, which becomes visible on a large floor.',
      '- Keep a few spare tiles. A matching tile may be discontinued years later.',
      '- Add skirting, which usually needs its own tile or strips cut from floor tiles, and account for the grout gap in your fitter\'s quote.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The estimate assumes the whole room is tiled and ignores grout joint width, which has a small effect on large tiles. Confirm the final box count with your tile dealer or fitter, who can account for your exact layout and joint size.'
    ] }
  ],
  faqs: [
    ['How do I convert millimetre tile sizes to inches?', 'Divide the size in mm by 25.4. For example, 600 mm is about 23.6 inches and 800 mm is about 31.5 inches. Enter the actual size printed on the box.'],
    ['How many tiles are in a box?', 'It varies by size and brand. A 2 ft by 2 ft vitrified tile box may hold 4 pieces covering about 16 sq ft, but check the box label and round your order up to whole boxes.'],
    ['Why do diagonal layouts need more tiles?', 'Tiles laid at 45 degrees must be cut at every wall, which produces more offcuts that cannot be reused. Allow around 15% wastage or ask your fitter.'],
    ['Can I use this for wall tiles?', 'Yes, enter the wall height as the room width and the wall length as the room length, and subtract doors or windows by running separate sections. Wall tiles may need slightly different wastage.']
  ]
},

'cement-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator estimates how many 50 kg cement bags, and how much sand and coarse aggregate (stone chips or jelly), you need to mix concrete for a slab, floor or small foundation. You enter the length and width in feet, the thickness in inches and the concrete grade.',
      'It is helpful when you are ordering materials for a job done with site-mixed concrete. If you are buying ready-mix concrete delivered by a transit mixer, use the concrete calculator instead.'
    ] },
    { h: 'The formula explained', p: [
      'Step 1: wet volume = length × width × thickness, converted to cubic metres (1 cubic foot = 0.0283168 m³).',
      'Step 2: dry volume = wet volume × 1.54. Concrete ingredients are measured loose and dry, and they compact and fill voids when mixed with water, so the dry materials needed are more than the finished volume. The factor 1.54 is a commonly used value, and you can edit it under Advanced assumptions.',
      'Step 3: split the dry volume by the mix ratio. For M20 (1 : 1.5 : 3), the parts add up to 5.5, so cement is 1/5.5 of the dry volume, sand is 1.5/5.5 and aggregate is 3/5.5.',
      'Step 4: cement bags = cement volume ÷ volume of one bag. A 50 kg bag is taken as 0.035 m³ (about 1.25 cubic feet). Sand and aggregate are shown in cubic feet, the way suppliers often quote them locally.',
      'The grades offered are M10 (1 : 3 : 6), M15 (1 : 2 : 4), M20 (1 : 1.5 : 3) and M25 (1 : 1 : 2). The number after M is the target compressive strength in N/mm² at 28 days. Nominal mixes like these are standard for small residential work, while larger structural work is usually designed by an engineer.'
    ] },
    { h: 'Worked example', p: [
      'A slab 20 ft long, 15 ft wide and 5 inches thick in M20 concrete.',
      '- Wet volume = 20 × 15 × 5 ÷ 12 = 125 cubic feet = 3.54 m³',
      '- Dry volume = 3.54 × 1.54 = 5.45 m³',
      '- Cement = 5.45 ÷ 5.5 = 0.991 m³, so 0.991 ÷ 0.035 = 28.3, rounded up to 29 bags',
      '- Sand = 5.45 × 1.5 ÷ 5.5 = 1.486 m³, about 52.5 cubic feet',
      '- Aggregate = 5.45 × 3 ÷ 5.5 = 2.973 m³, about 105 cubic feet',
      'Adding 5-10% for wastage would bring the order to about 31 bags of cement. These are rule-of-thumb quantities; actual consumption depends on sand moisture, aggregate size and how carefully the mix is measured.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Use the grade your engineer specifies. M20 is the usual choice for residential slabs and beams, M15 for plain floors and levelling, and M25 where loads are heavier.',
      '- Measure by volume using a box or fixed-size container, not by the shovel. Bulk sand also swells when damp, so measuring damp sand can give less sand than you think.',
      '- Order a little extra. Cement is sold in whole bags and some material is always lost to spillage and uneven sub-base.',
      '- Reinforcement steel is not included here, and neither are the cover blocks, shuttering or curing.',
      '- Keep cement dry and use it in order of purchase; old, lumpy cement loses strength.',
      '- Add water carefully. Too much water weakens concrete even if the ratio is correct.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'This is a quantity estimate for volume-based nominal mixes. It does not design the structure. For structural members such as columns, beams and roof slabs, follow your structural engineer\'s drawings and confirm quantities with your supplier.'
    ] }
  ],
  faqs: [
    ['What does M20 mean?', 'M stands for mix and the number is the characteristic compressive strength in N/mm² after 28 days of curing. M20 is typically batched as 1 part cement, 1.5 parts sand and 3 parts aggregate for small works.'],
    ['Why is the dry volume more than the wet volume?', 'Dry cement, sand and aggregate contain air gaps. When water is added the particles pack together, so you need about 54% more dry material than the finished volume. The factor can vary slightly.'],
    ['How many cement bags are needed per cubic metre of concrete?', 'With this calculator\'s assumptions, M20 works out to roughly 8 bags per m³ of finished concrete (the default 3.54 m³ slab needs about 28.3 bags). Other grades differ, so run the calculator for each case.'],
    ['Can I use this for plastering or brickwork?', 'No. Plaster and brick mortar use different ratios (such as 1 : 4 or 1 : 6) and different volume factors. This tool is for concrete.']
  ]
},

'concrete-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator finds the volume of concrete needed for a slab, footing, floor or similar rectangular element, in both cubic feet and cubic metres, and estimates the cost if you buy ready-mix concrete. Ready-mix is priced per cubic metre, so the result tells you how much to order and roughly what to pay.',
      'You enter length and width in feet, thickness in inches, a wastage percentage and the ready-mix rate in rupees per m³. If you plan to mix the concrete on site from cement, sand and aggregate, use the cement calculator, which breaks the same volume into materials.'
    ] },
    { h: 'The formula explained', p: [
      'Volume (cubic feet) = length × width × thickness in inches ÷ 12. The division by 12 converts inches to feet.',
      'Volume (m³) = cubic feet × 0.0283168. One cubic metre is about 35.31 cubic feet.',
      'Order quantity = volume × (1 + wastage %). Cost = order quantity × rate per m³.',
      'The wastage allowance covers spillage, uneven or low sub-base, formwork that bulges slightly under load, and the concrete left in the pump or the mixer drum. Around 5% is the default, and 5-10% is a common rule of thumb. Uneven ground, excavated footings or pumped concrete may call for more. Ready-mix suppliers usually deliver in multiples of a fixed minimum, such as 3 m³ or more per trip, and may charge extra for short loads, so ask about minimum quantity.'
    ] },
    { h: 'Worked example', p: [
      'A plain slab measuring 20 ft by 15 ft and 5 inches thick, with 5% wastage and a ready-mix rate of ₹6,000 per m³.',
      '- Volume = 20 × 15 × 5 ÷ 12 = 125 cubic feet',
      '- In cubic metres = 125 × 0.0283168 = 3.54 m³',
      '- Order quantity = 3.54 × 1.05 = 3.72 m³',
      '- Estimated cost = 3.72 × 6,000 = about ₹22,299',
      'In practice you would check with the supplier whether they can send 3.7 m³ or whether you need to round to 4 m³. Rates differ by grade, city and whether pumping is charged separately, so replace the default rate with the quotation you receive.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Measure thickness after deciding the finished level. A slab planned at 4 inches but poured at 5 inches over a large area needs about 25% more concrete.',
      '- For footings and columns, calculate each element separately and add the volumes. This tool handles one rectangular element at a time.',
      '- Check the grade (M20, M25, etc.) in the quotation. A higher grade costs more per m³.',
      '- Confirm whether the rate includes GST, delivery, pump hire and waiting charges, which can change the total noticeably.',
      '- Arrange labour, vibrators, finishing tools and curing before the truck arrives. Ready-mix has a limited time window before it starts to set.',
      '- Do not confuse volume with weight. Concrete is ordered by volume, though its density is about 2,400 kg per m³.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The calculator assumes a simple rectangular shape of uniform thickness and does not include reinforcement or formwork. For irregular shapes, split the area into rectangles and add the results. Quantities for structural elements should be taken from the engineer\'s drawings, and the supplier can advise the final order quantity.'
    ] }
  ],
  faqs: [
    ['How do I calculate concrete for a column?', 'Multiply the cross-section area by the height. For a 12 inch by 12 inch column 10 ft high, volume = 1 × 1 × 10 = 10 cubic feet. Enter length 1, width 1 and thickness 120 inches to match, or calculate by hand and add to your total.'],
    ['How many cubic feet are in one cubic metre?', 'About 35.31 cubic feet. To convert, multiply cubic metres by 35.31, or cubic feet by 0.0283168.'],
    ['Is ready-mix cheaper than site-mixed concrete?', 'It depends on quantity, location and labour. Ready-mix gives consistent quality and saves time, while small jobs may be cheaper to mix on site. Compare an actual quotation with the cement calculator estimate.'],
    ['What thickness is typical for a residential slab?', 'Roof slabs are commonly about 4 to 6 inches and floor slabs on grade are often 4 inches, but the right figure depends on span and loading. Follow your structural engineer\'s design.']
  ]
},

'flooring-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator gives a budget for flooring a room with any material: vitrified tiles, marble, granite, wood, laminate or vinyl. You enter the room size, a wastage percentage, the material rate per sq ft and the labour rate per sq ft. The result shows the floor area, how much material to buy, and the material, labour and total cost.',
      'Because it works on rates per sq ft, it fits materials sold by area, which is how most flooring is priced in India. If you want a piece count for tiles of a specific size, use the tile calculator as well.'
    ] },
    { h: 'The formula explained', p: [
      'Floor area = length × width.',
      'Material to buy = floor area × (1 + wastage %). Wastage covers cuts at the edges, damaged pieces and extra pieces for later repairs. Around 5-10% is usual for plain straight layouts, and up to 15% for diagonal or patterned layouts. Natural stone like marble and granite may also need extra because of colour and grain matching, so check with your supplier.',
      'Material cost = material to buy × material rate per sq ft.',
      'Labour cost = floor area × labour rate per sq ft. The calculator charges labour on the actual floor area, not on the extra quantity bought, because the fitter lays only the area of the room.',
      'Total flooring cost = material cost + labour cost.'
    ] },
    { h: 'Worked example', p: [
      'A room is 14 ft by 12 ft. The material rate is ₹80 per sq ft, labour is ₹25 per sq ft and wastage is 10%.',
      '- Floor area = 14 × 12 = 168 sq ft',
      '- Material to buy = 168 × 1.10 = 184.8 sq ft',
      '- Material cost = 184.8 × 80 = ₹14,784',
      '- Labour cost = 168 × 25 = ₹4,200',
      '- Total = ₹18,984',
      'If you choose a premium material at ₹150 per sq ft instead, the material cost for the same quantity becomes 184.8 × 150 = ₹27,720. Comparing materials this way, with the same wastage and labour, is the most useful way to use the tool.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Ask whether the labour rate includes the cement and sand bed, adhesive, grouting and polishing. Many quotes do not, and these add up.',
      '- Skirting, thresholds, stair treads, and bathroom or balcony slopes are priced separately. Add them as a separate line.',
      '- Do not apply the same rate to every room. Bathrooms and kitchens may need anti-skid tiles at a different price.',
      '- For stone, you may need to include polishing after laying and the cost of transport and breakage.',
      '- Check whether the existing floor must be removed or levelled first. Demolition and levelling are not part of this estimate.',
      '- Obtain at least two quotes and compare the all-in rate per sq ft rather than individual items.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The calculator assumes one uniform material and a rectangular room. Rates vary widely by city, brand and grade, so the default ₹80 material rate and ₹25 labour rate are placeholders that you should replace with real quotations. Confirm the exact quantities with your supplier or site engineer before ordering.'
    ] }
  ],
  faqs: [
    ['Is labour charged on the area bought or the area laid?', 'Labour is normally charged on the area actually laid, which is the floor area. This calculator follows that approach, and your contractor\'s method may differ.'],
    ['How much does flooring cost per sq ft in India?', 'It ranges widely, from basic ceramic or vitrified tiles at a modest rate to imported marble or hardwood at several times that. Check current local rates and enter them in the calculator.'],
    ['Do I need to buy extra for patterned floors?', 'Yes. Patterned, diagonal and stone floors usually need 10-15% extra for cuts and matching. Ask your fitter for their estimate.'],
    ['Does this include the floor preparation?', 'No. Levelling, screed, waterproofing, removal of old flooring and polishing are extra, and they depend on the condition of your base.']
  ]
},

'renovation-cost-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator helps you set a realistic budget for renovating a home. You enter the area to be renovated, a rate per sq ft that matches the amount of work, and a contingency percentage. The tool returns a base estimate, the contingency amount and the total budget.',
      'It suits early decisions such as whether to repaint and repair, do a standard refresh or take on a full remodel, and what to tell a bank if you are seeking a home improvement loan. It is not a replacement for a contractor\'s itemised quotation.'
    ] },
    { h: 'The formula explained', p: [
      'Base estimate = area × rate per sq ft.',
      'Contingency = base estimate × contingency %.',
      'Total budget = base estimate + contingency.',
      'The rate is the key input. As rough starting points, the page suggests about ₹400 per sq ft for light work such as repainting and minor repairs, about ₹800 per sq ft for standard work that includes some flooring, electrical or plumbing changes, and ₹1,500 or more per sq ft for a full remodel with new kitchen, bathrooms, false ceiling and modular work. These bands are rough averages. A flat in a metro with premium fittings can cost much more, and a simple repaint of a small house in a smaller town may cost much less.',
      'The contingency covers things that are hard to see before work starts: damp behind plaster, rusted pipes, old wiring, uneven floors and design changes you decide on while the work is under way. Ten percent is the default, and 10-15% is a common rule of thumb for older buildings.'
    ] },
    { h: 'Worked example', p: [
      'A 1,000 sq ft apartment needs a standard refresh at ₹800 per sq ft, with 10% contingency.',
      '- Base estimate = 1,000 × 800 = ₹8,00,000',
      '- Contingency = 8,00,000 × 10% = ₹80,000',
      '- Total budget = ₹8,80,000',
      'If the same apartment needs only light work at ₹400 per sq ft, the base becomes ₹4,00,000 and the total with 10% contingency becomes ₹4,40,000. If you decide on a full remodel at ₹1,500 per sq ft with a 15% contingency, the base is ₹15,00,000, the contingency is ₹2,25,000 and the total is ₹17,25,000. Seeing the three scenarios side by side helps you decide where to spend.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- List the work room by room before you pick a rate. Bathrooms and kitchens cost far more per sq ft than bedrooms, so a single average rate may mislead if most of your work is in wet areas.',
      '- Use the calculator separately for different zones, for example kitchens at a higher rate and bedrooms at a lower one, and add the totals.',
      '- Get at least three written quotations and compare them item by item, including materials, brand, labour, debris removal and timeline.',
      '- Do not start without a written scope and payment schedule tied to milestones.',
      '- Do not forget permissions. Apartment societies often require approval, and structural changes need an engineer\'s opinion.',
      '- Keep furniture, appliances, curtains and décor in a separate budget, because this calculator does not include them.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'This is a planning estimate using an average rate over the whole area. Real costs depend on city, brand choices, condition of the building and the contractor. Treat the result as a starting point and confirm the scope and price with local contractors or an interior designer.'
    ] }
  ],
  faqs: [
    ['How is renovation different from construction cost?', 'Renovation involves removal of old finishes, repair of hidden defects and working around existing structure, so the cost per sq ft for similar finishes may be higher than for new construction. Use the renovation rate for refurbishment work.'],
    ['What is a sensible rate for a full kitchen and bathroom remodel?', 'Wet areas are costly because of waterproofing, plumbing, tiles and fittings. Price them as a separate zone using quotes for the specific work rather than the whole-house average.'],
    ['How long does a typical home renovation take?', 'Light repainting may take one to two weeks, while a full remodel can take two to four months or more. Ask your contractor for a written schedule.'],
    ['Can I take a loan for renovation?', 'Many banks offer home improvement or renovation loans. Eligibility, interest rates and documents vary by lender, so check with them and use this estimate to support your application.']
  ]
},

'percentage-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator handles the three percentage questions people ask most often, all at once. You enter two numbers, A and B, and it shows what A% of B is, what percentage A is of B, and the percentage change from A to B.',
      'It is useful for working out discounts, GST amounts, marks, interest or commission, salary hikes and price changes, without having to remember which formula to use.'
    ] },
    { h: 'The formula explained', p: [
      'A% of B = A ÷ 100 × B. This answers questions such as "what is 18% of ₹2,500?".',
      'A is what % of B = A ÷ B × 100. This answers "I scored 20 out of 500; what percentage is that?". It cannot be calculated when B is zero, and the calculator shows a dash in that case.',
      'Percentage change from A to B = (B − A) ÷ |A| × 100. A is the starting value and B is the new value. A positive answer is an increase and a negative answer is a decrease. It cannot be calculated when A is zero.',
      'The three results use the same two numbers in different ways, so read the label next to each answer and make sure the question you have matches the one being answered.'
    ] },
    { h: 'Worked example', p: [
      'Using the default values A = 20 and B = 500:',
      '- 20% of 500 = 20 ÷ 100 × 500 = 100',
      '- 20 is 4% of 500 (20 ÷ 500 × 100)',
      '- Change from 20 to 500 is (500 − 20) ÷ 20 × 100 = 2,400%',
      'A practical case is GST. To find 18% GST on a bill of ₹2,500, enter A = 18 and B = 2,500: the first result is ₹450. For a price change, suppose a product rose from ₹1,000 to ₹1,150. Enter A = 1,000 and B = 1,150 and the third result is 15%. If it fell from ₹1,000 to ₹900, the third result is −10%.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Percentage points and percentages are different. If an interest rate moves from 8% to 10%, it rises by 2 percentage points but by 25% in relative terms.',
      '- A rise of 50% followed by a fall of 50% does not return you to the start. ₹100 becomes ₹150 and then ₹75.',
      '- To reverse a percentage increase, do not subtract the same percentage. If a price after a 20% rise is ₹1,200, the original was 1,200 ÷ 1.2 = ₹1,000, not ₹960.',
      '- For discounts, the final price is the original price × (1 − discount ÷ 100). A 25% discount means you pay 75%.',
      '- Add GST by multiplying by (1 + rate ÷ 100). To remove GST from a GST-inclusive price, divide by (1 + rate ÷ 100).',
      '- Keep the order of A and B right. Swapping them gives a different answer for the change and the share.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The calculator works on any real numbers and displays results rounded for readability. For financial documents such as invoices and tax filings, follow the rounding rules of your accounting software or tax authority.'
    ] }
  ],
  faqs: [
    ['How do I add 18% GST to a price?', 'Multiply the price by 1.18. For ₹2,500 the total with GST is ₹2,950, of which ₹450 is GST.'],
    ['How do I find the original price after a discount?', 'Divide the discounted price by (1 − discount ÷ 100). If a 20% discount gives ₹800, the original price was 800 ÷ 0.8 = ₹1,000.'],
    ['Why is the percentage change negative?', 'A negative change means the new value B is lower than the starting value A, so it is a decrease.'],
    ['How do I convert a fraction to a percentage?', 'Divide the top by the bottom and multiply by 100. For example, 3/8 = 0.375, which is 37.5%.']
  ]
},

'unit-converter': {
  sections: [
    { h: 'What this calculator does', p: [
      'This converter changes values between common units of length, area and weight, with a focus on the units people in India meet in property, construction and trade: sq ft, sq yd, cent, gunta, ground, acre, hectare, tola, quintal and tonne.',
      'You enter a value, choose the unit to convert from and the unit to convert to. The page shows the converted value and the multiplying factor between the two units, so you can reuse the factor on a calculator or spreadsheet.'
    ] },
    { h: 'The formula explained', p: [
      'Every unit is stored as a fixed number of base units: metres for length, square metres for area and kilograms for weight. The conversion is value × (size of the from-unit ÷ size of the to-unit). Because of this, you can only convert within the same type. Asking for sq ft to kg is meaningless, and the tool will tell you to pick the same type.',
      'Key land values used here are:',
      '- 1 acre = 43,560 sq ft = 4,046.86 sq m',
      '- 1 cent = 435.6 sq ft = 40.47 sq m (100 cents = 1 acre)',
      '- 1 gunta = 1,089 sq ft (40 guntas = 1 acre)',
      '- 1 ground = 2,400 sq ft',
      '- 1 hectare = 10,000 sq m, about 2.471 acres',
      'Regional land units are not uniform across India. The size of a gunta, bigha, kanal or biswa can differ from state to state, so confirm the local definition in the sale deed or with the revenue office before relying on a conversion for a land transaction.'
    ] },
    { h: 'Worked example', p: [
      'You are buying a plot of 1,000 sq ft and the seller quotes the land in cents. The tool converts it using the factor 0.09290304 ÷ 40.468564.',
      '- 1,000 sq ft = 2.2957 cents (about 2.3 cents)',
      '- 1,000 sq ft = 0.9183 gunta',
      '- 1 acre = 100 cents, as 43,560 ÷ 435.6 = 100',
      '- 2,400 sq ft (one ground) = 222.97 sq m',
      'For weights, 1 quintal is 100 kg and 1 tonne is 1,000 kg, so 1 tonne is 10 quintals. One tola is about 11.664 g. This is useful in gold or silver trade, where prices are often quoted per 10 grams or per tola.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Square units are not the same as linear units. A square of 10 ft by 10 ft is 100 sq ft, not 10. Converting a length in metres to feet and then multiplying is safer than squaring a rounded number.',
      '- Check the exact definition of land units in your state. The cent used in Kerala, Tamil Nadu and Andhra Pradesh is 435.6 sq ft, but other local units differ.',
      '- Use the sale deed or land records as the source of truth for area, not just a converted number.',
      '- Do not round intermediate numbers. Convert once from the original value, then round the final answer.',
      '- Carpet area, built-up area and super built-up area are different measures even when all are in sq ft. The converter only changes units, not the type of area.',
      '- A tola is about 11.66 g, so a price quoted per tola is not the same as a price quoted per 10 g.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The factors are standard values and the converter shows up to six decimal places. Local customary units may be defined differently in your area, in which case you should apply the local value yourself. Never use this tool alone for legal land measurements.'
    ] }
  ],
  faqs: [
    ['How many sq ft are in one gunta?', 'This converter uses 1 gunta = 1,089 sq ft, which means 40 guntas make one acre. Some regions define it differently, so confirm locally.'],
    ['How do I convert sq ft to sq m?', 'Multiply by 0.092903. For example, 1,200 sq ft is about 111.5 sq m. To go the other way, multiply by 10.7639.'],
    ['How many cents are in one acre?', 'One acre is 100 cents. Each cent is 435.6 sq ft.'],
    ['Can I convert square feet to kilograms?', 'No. Units must be of the same type: length, area or weight. Converting between them needs extra information such as density or thickness.']
  ]
},

'date-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator tells you how much time lies between two calendar dates. You enter a start date and an end date, and it returns the total number of days, the same span in weeks and days, and the span broken down into years, months and days.',
      'Typical uses include counting days to a project deadline, working out a notice period or a loan or fixed deposit tenure, measuring the gap between an invoice date and its payment date, checking the duration of a lease, or counting down to a wedding or travel date. If you enter the dates in the wrong order, the tool swaps them so that the answer is still positive.'
    ] },
    { h: 'The formula explained', p: [
      'Total days = the number of 24-hour days from the start date to the end date. The end date is not counted twice, so 1 January to 2 January is 1 day. This is the standard "difference" count. If you need an inclusive count in which both the first and the last day are counted, such as for a leave application covering both dates, add 1 to the result.',
      'Weeks and days = total days divided by 7, with the remainder shown as days.',
      'Years, months and days works like a handwritten calendar subtraction. The calculator subtracts the year, month and day parts. If the day part comes out negative, it borrows the number of days of the month before the end date and reduces the month count by one. If the month part is then negative, it borrows 12 months from the years. It uses actual calendar dates, so leap years and months of different lengths are handled correctly.',
      'Note that the "months" part is not a fixed number of days, because months have 28, 29, 30 or 31 days. That is why a total in days and a total in years-months-days will not convert exactly into each other.'
    ] },
    { h: 'Worked example', p: [
      'With the default dates, 1 January 2026 to 31 December 2026:',
      '- Total days = 364',
      '- Weeks = 52 weeks 0 days',
      '- Years, months and days = 0 years, 11 months, 30 days',
      'Another example: the gap from 15 March 2026 to 10 October 2026 is 209 days, which is 29 weeks and 6 days, or 0 years, 6 months and 25 days. To count from 15 March through 10 October including both dates, you would use 210 days.',
      'Because 2026 is not a leap year, 1 January 2026 to 1 January 2027 is exactly 365 days. A span across 29 February 2028 would include one extra day.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Decide whether your purpose needs an inclusive count. Notice periods, leave and some legal timelines count both the first and last day, whereas simple duration does not.',
      '- Do not assume a month is 30 days. A bank or contract may define its own convention, so read the terms.',
      '- Watch the date format. The date picker uses the calendar of your device, but when typing dates, confirm day and month are not reversed.',
      '- This tool counts calendar days. It does not exclude Sundays or public holidays, so use it as a base and subtract working-day exclusions yourself.',
      '- For financial calculations such as interest, follow the day-count basis stated in the agreement (for example, actual/365).',
      '- For legal deadlines, rely on the exact rule in the relevant law or order, as the counting rules differ.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The calculator works with whole calendar days and does not consider time of day or time zones. It uses the Gregorian calendar, so it does not convert to Hindu, Hijri or other regional calendars.'
    ] }
  ],
  faqs: [
    ['How do I include both the start and end date?', 'Add 1 to the total days. For example, 1 to 10 January is 9 days as a difference and 10 days when both dates are counted.'],
    ['Does the calculator exclude weekends and holidays?', 'No. It counts every calendar day. To estimate working days, subtract weekends and holidays from the total yourself.'],
    ['Why does the result in months and days not match my bank statement?', 'Banks and contracts may count months as fixed 30-day blocks or use a different day-count basis. This tool uses real calendar months.'],
    ['Can I enter an end date earlier than the start date?', 'Yes. The calculator reorders the dates and shows the size of the gap, so the result is always positive.']
  ]
},

'age-calculator': {
  sections: [
    { h: 'What this calculator does', p: [
      'This calculator works out an exact age from a date of birth. It gives the age in years, months and days, the total number of days lived, and the number of days left until the next birthday. Leave the "Age as on" field blank to calculate to today, or enter a different date to find age as on a specific cut-off.',
      'The cut-off option is the most useful part for forms. Admissions, competitive exam applications, government job notifications, insurance policies and pension schemes in India often state an age limit as on a particular date, and a person who is a few days over can be ineligible.'
    ] },
    { h: 'The formula explained', p: [
      'The calculator subtracts the date of birth from the chosen date using calendar rules. It first takes the difference in years, months and days. If the days difference is negative, it borrows the length of the month before the chosen date and reduces the months by one. If the months difference is then negative, it borrows 12 months from the years. This is the same way age is counted by hand.',
      'Total days lived is the number of days between the two dates. The next birthday is the next occurrence of the same day and month on or after the chosen date. If today is the birthday, the result says so.',
      'Leap years are handled because real calendar dates are used. A person born on 29 February has a birthday only in leap years; in other years this tool places the birthday on 1 March.'
    ] },
    { h: 'Worked example', p: [
      'Take a date of birth of 15 June 1995, with age calculated as on 10 October 2026.',
      '- Years: 2026 − 1995 = 31',
      '- Months: October − June = 4, but the day part (10 − 15) is negative, so one month is borrowed: 3 months',
      '- Days: 10 − 15 = −5, plus 30 days in September = 25 days',
      '- Age = 31 years, 3 months, 25 days',
      '- Total days lived = 11,440',
      '- Next birthday on 15 June 2027 is 248 days away',
      'For an exam form that says "age as on 1 January 2027", you would enter that date in the "as on" field and read the completed years from the first part of the result.'
    ] },
    { h: 'Tips and common mistakes' , p: [
      '- Always check whether the form wants completed years as on a particular date. Use the cut-off date, not today.',
      '- Check the date of birth against school certificates or the Aadhaar record for forms. A mismatch can cause rejection.',
      '- Do not round age to the nearest year. A person aged 17 years 11 months is still 17 for eligibility purposes.',
      '- Some notifications allow relaxation in upper age limits for categories such as SC, ST, OBC or ex-servicemen. This calculator does not apply relaxations, so add them yourself.',
      '- Date format errors are common. Check that day and month are not swapped, especially for dates such as 05/06.',
      '- Compare ages of two people by running the calculation for each one on the same date.'
    ] },
    { h: 'Assumptions and limits' , p: [
      'The tool counts calendar days and ignores time of birth and time zones. It uses the Gregorian calendar. For official eligibility decisions, the rules in the notification and the date of birth in your certificates are what count.'
    ] }
  ],
  faqs: [
    ['How do I calculate age as on a particular date for an exam form?', 'Enter your date of birth and put the cut-off date from the notification in the "Age as on" field. The completed years shown are your age on that date.'],
    ['Does the calculator use today\'s date by default?', 'Yes. If "Age as on" is left blank, it uses today\'s date from your device.'],
    ['What is the age of a child born on 29 February?', 'It is counted by real dates, so the age increases by a year on the birthday date in leap years. In non-leap years, this tool treats the birthday as 1 March.'],
    ['Can I calculate the age of someone in the past?', 'Yes. Put any date after the date of birth in the "Age as on" field, such as a past date for school admission records or a future date for planning.']
  ]
}

};
