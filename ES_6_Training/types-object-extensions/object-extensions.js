const Person = {
    address: "SunCity, A8/404",
    zipCode: 410501,
    city: "Pune"
}

const Customer = {
    customerId: 410,
    contactNane: "Jon Doe",
    city: "Pune"
};

const SuperCustomer = {
    customerId: 410,
    contactNane: "Jon Doe",
    city: "Mumbai"
};


console.log("Object Compare", Object.is(Customer) === Object.is(SuperCustomer));

// Dont use it
//Object.setPrototypeOf(Customer, Person);

Object.assign(Customer, Person);
console.log("-------------------------------------------------------");
console.log("Customer", Customer);


const CreditCustomer = {
    creditLimit: 200000,
    contactNane: "Jon Doe"
};


Object.assign(CreditCustomer, Person, Customer);

console.log("-------------------------------------------------------");
console.log("CreditCustomer", CreditCustomer);
console.log("-------------------------------------------------------")



let taxPercentage1 = NaN;
let taxPercentage2 = NaN;

console.log(taxPercentage1 == taxPercentage2);
console.log(taxPercentage1 === taxPercentage2);

console.log(Object.is(taxPercentage1) == Object.is(taxPercentage2))
console.log(Object.is(taxPercentage1) === Object.is(taxPercentage2))
