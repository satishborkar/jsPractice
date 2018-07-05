export default class Order {
    constructor() {
        this.orderId = 0;
        this.orderDate = new Date();
        this.requiredDate = new Date();
        this.qty = 0;
        this.price = 0;
    }
    printOrder() {
        return `Order ID ${this.orderId} has total payment INR ${this.price * this.qty}/-`;
    }
}