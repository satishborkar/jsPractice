let cogs = 12000, expense = 13000, actualSales = 150000;

const SalesNetProfit = {
    cogs,
    expense,
    actualSales,
    profit: function () {
        return this.actualSales - (this.cogs + this.expense);
    }
}
console.log(`COGS is ${SalesNetProfit.cogs}, Expense is ${SalesNetProfit.expense} and Actual Sales is ${SalesNetProfit.actualSales}`);

console.log(`Sales Net Profit is ${SalesNetProfit.profit()}`);