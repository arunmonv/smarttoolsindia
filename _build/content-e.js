// On-page educational content for property, utility, GST and gold-scheme calculators (set E).
// Worked-example figures were computed with the same formulas as the calculators, using their default values.
module.exports = {
  'stamp-duty-calculator': { sections: [
    { h: 'What this calculator does', p: ['When you buy property in India you pay stamp duty and a registration fee to the state government on top of the price. This calculator works out both, on the higher of the sale price and the guideline value, and adds them to the price to show your total cost.'] },
    { h: 'Worked example', p: ['A flat sold for ₹50,00,000 in an area where the guideline value is ₹55,00,000. Duty is charged on ₹55,00,000. At 7% stamp duty and 4% registration, stamp duty is ₹3,85,000, registration is ₹2,20,000 and the total is ₹6,05,000, making the full cost ₹56,05,000.'] },
    { h: 'Tips and limits', p: ['- Rates differ by state and can include extra levies, surcharges or concessions (for example for women buyers). Change the percentage fields to match your state, and use the Advanced box for other charges.', '- Find the guideline value for your street or survey number on your state’s registration portal.', '- Legal, agent and loan-related fees are separate and not included.'] }
  ] },
  'land-area-converter': { sections: [
    { h: 'What this calculator does', p: ['Plots in India are described in different units depending on the state: cents and grounds in Tamil Nadu, guntha in Maharashtra and Karnataka, acres almost everywhere. This tool converts any one of them into all the others at once.'] },
    { h: 'Worked example', p: ['One cent is 435.6 sq ft, about 40.47 sq m and 48.4 sq yards. It is 0.01 acre and about 0.18 ground. A 5-cent plot is therefore 2,178 sq ft.'] },
    { h: 'Tips and limits', p: ['- Check whether a quoted area is plot area or built-up area; the units alone do not tell you.', '- Regional units such as kani, kuzhi, bigha and biswa differ between places and are not included. Confirm them with the local revenue office or your surveyor.'] }
  ] },
  'brick-calculator': { sections: [
    { h: 'What this calculator does', p: ['It estimates the number of bricks and the brick cost for a wall, after deducting the area of doors and windows and adding allowance for breakage.'] },
    { h: 'Worked example', p: ['A 40 ft by 10 ft wall in 4.5 inch brickwork, with 40 sq ft of openings, has a net area of 360 sq ft. With 5% wastage you need about 2,007 bricks, which at ₹8 each costs about ₹16,056.'] },
    { h: 'Tips and limits', p: ['- Bricks sizes vary by region (country bricks, fly-ash bricks, solid and hollow blocks); use the quantity from a known size when you can.', '- Mortar, plastering and labour are separate costs. Use the cement calculator for mortar quantity.'] }
  ] },
  'steel-calculator': { sections: [
    { h: 'What this calculator does', p: ['Given the bar diameter, length and number of bars, it gives the weight and cost of steel using the d² ÷ 162 formula. It is useful to cross-check a bar bending schedule or a supplier quote.'] },
    { h: 'Worked example', p: ['A 12 mm bar weighs 144 ÷ 162 = 0.889 kg per metre, so a 12 m bar weighs about 10.67 kg. For 100 such bars the weight is about 1,067 kg, and at ₹65 per kg the steel costs about ₹69,333.'] },
    { h: 'Tips and limits', p: ['- Real bars vary slightly from the formula within the tolerance allowed by the standard. Add wastage from cutting and overlaps.', '- Rates change daily, so use your supplier’s current price.'] }
  ] },
  'eb-bill-calculator': { sections: [
    { h: 'What this calculator does', p: ['It estimates a Tamil Nadu domestic electricity bill from the units used in the two-month billing cycle. It applies the free units and the slab rates one slab at a time, so you can see what your usage is likely to cost.'] },
    { h: 'Worked example', p: ['For 400 units in a two-month bill, the first 100 units are free, the next 100 cost ₹2.35 each (₹235) and the next 200 cost ₹4.70 each (₹940). The estimate is about ₹1,175, or roughly ₹2.94 per unit on average.', 'Crossing 500 units is expensive: at 500 units the estimate is ₹1,805, but at 501 units the free units no longer apply and it jumps to about ₹2,038.'] },
    { h: 'Assumptions and limits', p: ['- The default slab rates are sample figures and tariff orders change. Check your latest bill and edit the rates in the Advanced box.', '- Fixed charges, other levies, subsidies and commercial or agricultural tariffs are not included.', '- Your meter reading difference over the billing period gives the units to enter.'] }
  ] },
  'gst-reverse-calculator': { sections: [
    { h: 'What this calculator does', p: ['If a price already includes GST, this calculator removes it and shows the original price, the GST amount, and the CGST and SGST halves.'] },
    { h: 'Worked example', p: ['A GST-inclusive price of ₹11,800 at 18%: price before GST = 11,800 ÷ 1.18 = ₹10,000. GST is ₹1,800, split into ₹900 CGST and ₹900 SGST.'] },
    { h: 'Common mistakes', p: ['- Taking 18% off the final price gives ₹9,676 instead of the correct ₹10,000, because GST is a percentage of the base, not of the total.', '- For inter-state supplies the full amount is IGST, not CGST plus SGST.'] }
  ] },
  'gold-savings-scheme-calculator': { sections: [
    { h: 'What this calculator does', p: ['Many jewellers run monthly savings schemes in which you pay for 11 months and the jeweller adds the 12th instalment. This calculator shows the bonus, the total redemption value, how much gold it buys and the effective yearly return.'] },
    { h: 'Worked example', p: ['Paying ₹5,000 a month for 11 months means ₹55,000 paid. With a one-instalment bonus the redemption value is ₹60,000, a gain of ₹5,000. At ₹7,500 per gram that buys about 8 g of gold, and the effective return works out to about 18.8% a year, because the instalments are paid over time while the bonus is a lump.'] },
    { h: 'Tips and limits', p: ['- The bonus is only valuable if you actually buy jewellery from that shop, and gold prices can change during the scheme. Compare with buying coins or digital gold.', '- Making charges, wastage and GST are usually charged on top. Ask for the scheme terms in writing, including what happens if you miss a month.', '- Prefer well-established jewellers and keep every receipt.'] }
  ] }
};
