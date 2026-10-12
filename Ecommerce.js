const customerId = "C101";
const amount = 6000;
const category = "Premium";
const location = "Local";

let discount = 0;
let deliveryCharge = 0;

if (category.toLowerCase() === "premium") {
    discount = amount * 0.15;
} else if (category.toLowerCase() === "regular") {
    discount = amount * 0.05;
}

if (amount > 5000) {
    discount += 500;
}

if (discount > amount * 0.20) {
    discount = amount * 0.20;
}

if (amount >= 3000) {
    deliveryCharge = 0;
} else if (location.toLowerCase() === "local") {
    deliveryCharge = 50;
} else if (location.toLowerCase() === "city") {
    deliveryCharge = 100;
} else if (location.toLowerCase() === "other") {
    deliveryCharge = 150;
}

const finalAmount = amount - discount + deliveryCharge;

console.log("\n===== ORDER SUMMARY =====");
console.log("Customer ID: " + customerId);
console.log("Customer Category: " + category);
console.log("Original Order Amount: Rs. " + amount.toFixed(2));
console.log("Discount Amount: Rs. " + discount.toFixed(2));
console.log("Delivery Charge: Rs. " + deliveryCharge.toFixed(2));
console.log("Final Payable Amount: Rs. " + finalAmount.toFixed(2));

console.log("\nOrder Summary: Your order amount is Rs. " +
    amount.toFixed(2) + ", discount is Rs. " +
    discount.toFixed(2) + ", delivery charge is Rs. " +
    deliveryCharge.toFixed(2) +
    ", and final payable amount is Rs. " +
    finalAmount.toFixed(2) + ".");