const Customer = {
    customerId: 1234,
    contactName: "Pravinkumar R. D.",
    city: "Pune"
}

console.log(getCustomerInformation());
function getCustomerInformation() {
    return `Customer Id ${Customer.customerId} 
    Contact Name ${Customer.contactName} lives in ctiy ${Customer.city}`;
}