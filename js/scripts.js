$(document).ready(function () {
    $(".clickable").click(function () {
        $(".meat").toggle();
        $(".veggie").hide();
    });
    $(".veg").click(function () {
        $(".veggie").toggle();
        $(".meat").hide();
    });
    $(".size").click(function () {
        $(".sizes").toggle();
        $(".sizez").toggle();
    });
    $(".cho").click(function () {
        $(".choos").hide();
    });
})


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-danger")
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    
}   
    var addToCartButtons=document.getElementsByClassName('order-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button=addToCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }
}
function removeCartItem(event){
    var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()

}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event){
    var button=event.target
    var shopItem=button.parentElement
    var title=shopItem.getElementsByClassName('menuTitle')[0].innerText
    var price=shopItem.getElementsByClassName('defaultPrize')[0].innerText
    var imgSrc=shopItem.getElementsByClassName('fooima')[0].src
    console.log(title,price)

}


// WHOLE CODEE!!1

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('Ksh', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(price * quantity)
    }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName("cart-total-price")[0].innerText = 'Ksh' + total
    
}
