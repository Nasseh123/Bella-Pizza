if(document.readyState=='loading'){
    document.addEventListener('DOMcontentLoaded',ready)
}else{
    ready()
}
function reeady(){
    
}


$(document).ready(function(){
    $(".clickable").click(function(){
        $(".meat").toggle();
        $(".veggie").hide();
    });
    $(".veg").click(function(){
        $(".veggie").toggle();
        $(".meat").hide();
    });
    $(".size").click(function(){
        $(".sizes").toggle();
        $(".sizez").toggle();
    });
    $(".cho").click(function(){
        $(".choos").hide();
    });


});

// WHOLE CODEE!!1
var removeCartItemButtons=document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons)
for(var i=0;i<removeCartItemButtons.length;i++){
    var button=removeCartItemButtons[i]
    button.addEventListener('click',function(event){
       var buttonClicked=event.target
       buttonClicked.parentElement.parentElement.remove()
       updateCartTotal()
    })
}
function updateCartTotal(){
    var cartItemContainer=document.getElementsByClassName("cart-items")[0]
    var cartRows=cartItemContainer.getElementsByClassName('cart-row')
    var total=0
    for(var i=0;i<removeCartItemButtons.length;i++){
        var cartRow=cartRows[i]
        var priceElement=cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price=parseFloat(priceElement.innerText.replace('Ksh',''))
        var quantity=quantityElement.value
        total=total+(price * quantity)
        console.log(price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText='Ksh'+ total
}

