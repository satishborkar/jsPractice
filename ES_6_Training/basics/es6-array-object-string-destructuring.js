const cities1 = ["Bangalore", "Hyderabad", "Mumbai", "Pune"];

var [city1, city2, city3, city4] = cities1;
console.log(city1 + " " + city2 + " " + city3 + " " + city4);

const cities2 = ["Bangalore", "Hyderabad", "Pune"];

var [city1, city2, city3 = "Delhi", city4 = "Mumbai"] = cities2;
console.log(city1 + " " + city2 + " " + city3 + " " + city4);

const cities3 = ["Bangalore", "Hyderabad", "Pune"];

var [city1, , city3 = "Delhi"] = cities3;
console.log(city1 + " " + city3);

const cities4 = ["Bangalore", "Hyderabad", "Pune"];

var [city1, ...myCities] = cities4;
console.log(city1 + " " + myCities);

const Customer = {
    customerId: 34783,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    phone: "+91 23892833"
}

var { customerId: custId, contactName: cname, city: city, phone: contactNumber } = Customer;
console.log(custId + " " + cname + " " + city + " " + contactNumber);

var cId, name, livingcity, contactNo;

({ customerId: cId, contactName: name, city: livingcity, phone: contactNo } = Customer);
console.log(cId + " " + name + " " + livingcity + " " + contactNo);

var orderNumber = 23899, orderDate = new Date(), requiredDate = new Date(), shipCity = "London";

var myOrderDetails = {
    orderNumber,
    orderDate,
    requiredDate,
    shipCity
}

console.log(myOrderDetails);

var companyName = "Synechron";
var [l1, l2, l3, l4, l5, l6, l7, l8] = companyName;
console.log(l1, l2, l3, l4, l5, l6, l7, l8);