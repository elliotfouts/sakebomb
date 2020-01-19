//Shopping Icon on Products Page
var cart = document.querySelector('#cart-counter');
var cartAddButton = document.querySelectorAll('.product-button');
var NumberOfItems = 0;
    //adds event listeners to each button
for (var i = 0; i < cartAddButton.length; i++) {
    cartAddButton[i].addEventListener("click", function(){
        NumberOfItems++;
        cart.textContent = NumberOfItems;
        
    })
}

var originalCounter = 0;
var strawberryCounter = 0;
var chopsticksCounter = 0;
var tShirt = 0;

function cartItemCounter (index, varName) {
    cartAddButton[index].addEventListener("click", function(){
        varName++;
        console.log(varName);
    })
}

cartItemCounter ()

