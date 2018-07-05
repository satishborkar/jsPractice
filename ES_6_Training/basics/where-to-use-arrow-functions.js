const Customer = {
    customerId: 2378,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    getCustomerProfile: () => {
        console.log(this === Customer);
        console.log(this === window);
    }
}

Customer.getCustomerProfile();
document.getElementById("btn1").addEventListener("click", () => {
    alert("Hello Synechron!");
});