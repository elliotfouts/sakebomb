//increases value above cart icon when buttons are clicked
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


//creates cart items