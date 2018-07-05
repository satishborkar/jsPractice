// Array Methods

var quantity = new Array(100);
console.log(quantity.length);

var quantity2 = new Array(100, 10, 1);
console.log(quantity2.length);

var quantity3 = Array.of(100);
console.log(quantity3.length);
console.log("---------------------------------------------------------------")

var discountAmount = [560, 450, 230];

var newDiscount = discountAmount.map((item) => {
    return item + 20;
})

var afterDiscount = Array.from(discountAmount, dAmot => dAmot + 30);

var afterDiscount2 = Array.from(discountAmount, function (dAmot) {
    return dAmot + this.extraDiscountAmount
}, { extraDiscountAmount: 40 });

console.log(discountAmount);
console.log(newDiscount);
console.log(afterDiscount);
console.log(afterDiscount2);
console.log("---------------------------------------------------------------")


let priceCollection = [780, 670, 560];

priceCollection.fill(1000, 1, 3);
console.log("priceCollection", priceCollection);


