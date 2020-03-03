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
    $(".btn-delivery").click(function(){
        $(".car").toggle(1200);
    })
    $(".btn-purchase").click(function(){
        alert(price)

    })
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
    var addToCartButtons = document.getElementsByClassName('order-btn')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    var addToCartButtons2 = document.getElementsByClassName('order-btn2')
    for (var i = 0; i < addToCartButtons2.length; i++) {
        var button = addToCartButtons2[i]
        button.addEventListener('click', addToCartClicked2)
        // alert("loopedto")
    }
    var addToppings=document.getElementsByClassName('tops')
    for (var i = 0; i < addToppings.length; i++) {
        var button=addToppings[i]
        button.addEventListener('click',toppingsAdd)
        // alert("Looped")
    }
    var deliveryAdd=document.getElementsByClassName('btn-delivery')
    for (var i = 0; i < deliveryAdd.length; i++) {
        var button=deliveryAdd[i]
        button.addEventListener('click',deliveryAddition)
    }
    
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
}

//Purchase button ...
function purchaseClicked(){
    // alert(price)
    alert('Thank you for your purchase'+"\n your totla is ksh 1000")
    var cartItems=document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()

}
function removeCartItem(event) {
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
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('menuTitle')[0].innerText
    // alert(title)
    var price = shopItem.getElementsByClassName('defaultPrize')[0].innerText
    var imgSrc = shopItem.getElementsByClassName('fooima')[0].src
    console.log(title, price)
    addItemToCart(title, price, imgSrc)
    updateCartTotal()

}
function toppingsAdd(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('titles')[0].innerText
    alert(title)
    var price = document.getElementsByClassName('priceHead')[0].innerText
    // alert(price)
    console.log(title, price)
    addItemToCart2(title, price)
    updateCartTotal()

}
function deliveryAddition(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('menuTitl')[0].innerText
    alert(title+"Why!!")
    var price = shopItem.getElementsByClassName('defaultPrize')[0].innerText
    console.log(title, price)
    addItemToCart3(title, price)
    updateCartTotal()

}
function addItemToCart3(title, price ) { 
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('delivery')[0]
    var cartItemNames=cartItems.getElementsByClassName('cart-item-title')
    for (var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==title){
            alert('THis item is already added to the cart')
            return
        }
    }
    var cartRowcontents = ` <div class="cart-item cart-column">
    <img class="cart-item-image" src="images/vegOrder/veg6.jpg" width="100" height="100">
    <span class="cart-item-title">${title}</span>
    </div>
     <span class="cart-price cart-column">${price}</span>
     <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>

</div>`
cartRow.innerHTML = cartRowcontents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}
//jkgfvgkhvghkvhvhvhvh

function addItemToCart2(title, price ) { 
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames=cartItems.getElementsByClassName('cart-item-title')
    for (var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==title){
            alert('THis item is already added to the cart')
            return
        }
    }
    var cartRowcontents = ` <div class="cart-item cart-column">
    <img class="cart-item-image" src="images/vegOrder/veg6.jpg" width="100" height="100">
    <span class="cart-item-title">${title}</span>
    </div>
     <span class="cart-price cart-column">${price||newPrice}</span>
     <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>

</div>`
cartRow.innerHTML = cartRowcontents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}





//efbyhwejfhnweuifnhaufgyuf

function addItemToCart(title, price ,imgSrc,newPrice) { 
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames=cartItems.getElementsByClassName('cart-item-title')
    for (var i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText==title){
            alert('THis item is already added to the cart')
            return
        }
    }
    var cartRowcontents = ` <div class="cart-item cart-column">
    <img class="cart-item-image" src=${imgSrc} width="100" height="100">
    <span class="cart-item-title">${title}</span>
    </div>
     <span class="cart-price cart-column">${price||newPrice}</span>
     <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>

</div>`
cartRow.innerHTML = cartRowcontents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}



//wertyhgjhgfdsdfgbv

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
