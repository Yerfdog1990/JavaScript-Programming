// Strategy object containing different payment methods
const paymentMethods = {
    payWithPaypal(amount){
        return `Payment made with Paypal. Amount: ${amount}`
    },
    payWithStripe(amount){
        return `Payment made with Stripe. Amount: ${amount}`
    },
    payWithCash(amount){
        return `Payment made with Cash. Amount: ${amount}`
    },
    payWithDebitCard(amount){
        return `Payment made with Debit Card. Amount: ${amount}`
    },
    default(amount){
        return `Payment method not supported. Amount: ${amount}`
    }
};
// Function that selects the appropriate payment strategy
function makePayment(amount, method){
    const paymentStrategy = paymentMethods[method] || paymentMethods.default;
    console.log(paymentStrategy(amount));
}
// Usage
makePayment(100, "payWithPaypal");
makePayment(100, "payWithCash");
makePayment(100, "payWithDebitCard");
makePayment(100, "payWithStripe");