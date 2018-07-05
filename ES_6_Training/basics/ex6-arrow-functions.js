const Customer = {
    customerId: 2378,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    getCustomerProfile: function () {
        setTimeout(() => {
            console.log("Customer Id is " + this.customerId + " contact name is " + this.contactName + " lives in city " + this.city);
        }, 2000);
    }
}
//Customer.getCustomerProfile();

const printMessage1 = () => console.log("Welcome To Synechron");
printMessage1();

const printMessage2 = () => "Welcome To Synechron Bangalore!";
console.log(printMessage2());

const printMessage3 = msg => msg + " Good Afternoon";
console.log(printMessage3("Manish Kaushik"));

const salesNetProfit = (cogs, expense, actualSales, gstPercentage = 18) => {
    let gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}

console.log(`Synechron's Sales net profit in $ is ${salesNetProfit(12000, 13000, 150000)}`);
console.log(`Synechron's Import Sales net profit in $ is ${salesNetProfit(12000, 13000, 150000, 10)}`);