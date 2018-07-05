export class Order {
    constructor() {
        this.orderId = 0;
        this.orderDate = new Date();
        this.requiredDate = new Date();
        this.quantity = 0;
        this.unitPrice = 0;
        this.customerId = 0;
        this.productId = 0;
        this.employeeId=0;
    }
    getOrderDetails() {
        return `Order Id ${this.orderId} Total payable Amount INR ${this.quantity * this.unitPrice} of Customer ${this.customerId}`;
    }
}