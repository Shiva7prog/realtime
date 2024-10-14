
let cart = ['Laptop', 'Smartphone', 'Headphones', 'Camera', 'Book'];

let product = prompt("Enter the product you want to buy:");

let productFound = false;

for (let i = 0; i < cart.length; i++) {
    if (cart[i].toLowerCase() === product.toLowerCase()) {
        productFound = true;
        break;
    }
}

if (productFound) {
   
    let confirmPurchase = confirm(`The product "${product}" is in your cart. Do you want to proceed with the purchase?`);
    
    if (confirmPurchase) {
        alert("Purchase successful! Thank you for shopping with us.");
    } else {
        alert("Purchase canceled.");
    }
} else {
    alert(`The product "${product}" is not available in your cart.`);
}