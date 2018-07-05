let gstPercent = 5;

let GovtIndiaGstObject = {
    IT: 18,
    Food: 5,
    Automobile: 20
}

function callGovtGstService(section) {
    if (section == "IT") {
        return 18;
    }
    return 10;
}

function salesNetProfit(cogs, expense, actualSales, gstPercentage = cogs * .001) {
    let gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log("Sales Net Profit is INR " + salesNetProfit(12000, 13000, 150000));
console.log("Sales Net Profit is INR " + salesNetProfit(12000, 13000, 150000, 12));