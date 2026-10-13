let cartQuantity = 0;

document.getElementById("Quantity").addEventListener("click", function() {
    document.getElementById("result").innerText = "Cart Quantity: " + cartQuantity;
});

document.getElementById("plus1").addEventListener("click", function() {
    cartQuantity++;
});

document.getElementById("plus2").addEventListener("click", function() {
    cartQuantity += 2;
});

document.getElementById("plus3").addEventListener("click", function() {
    cartQuantity += 3;
});

document.getElementById("reset").addEventListener("click", function() {
    cartQuantity = 0;
});