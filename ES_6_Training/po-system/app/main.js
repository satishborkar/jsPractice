import { Customer } from "./customer";
import { Employee } from "./employee";
import { Order } from "./order";
import { Product } from "./product";
import { Supplier } from "./supplier";

const employee = new Employee();
employee.socialId = "2383498234";
employee.name = "Pravinkumar R. D.";
employee.address = "Suncity, A8/404";
employee.city = "Pune";
employee.phone = "+91 23892389";
employee.email = "pravin@synechron.com";
employee.employeeId = 948394;

console.log(employee.name);

const customer = new Customer();
customer.socialId = "234234111";
customer.name = "Manish Kaushik";
customer.address = "Mooncity, A8/404";
customer.city = "Pune";
customer.phone = "+91 45435444";
customer.email = "manish@synechron.com";
customer.customerId = 23454;

console.log(customer.name);

var supplier = new Supplier();
supplier.supplierId = 20;
supplier.supplierName = "ABCD";
supplier.companyName = "ABCD Company";

var product1 = new Product();
product1.productId = 1;
product1.productName = "Mobile-1";
product1.companyName = "Company 1";
product1.supplierId = supplier.supplierId;

var product2 = new Product();
product2.productId = 2;
product2.productName = "Mobile-2";
product2.companyName = "Company 2";
product2.supplierId = supplier.supplierId;

var products = [];
products.push(product1);
products.push(product2);

for (var product of products) {
    console.log(`Product Name is ${product.productName}`);
}

var order = new Order();
order.orderId = 2389;
order.quantity = 10;
order.unitPrice = 12.89;
order.customerId = customer.customerId;
order.employeeId = employee.employeeId;
order.productId = products[0].productName;
console.log(order.getOrderDetails());

import { printNumbers } from "./test1";
printNumbers();