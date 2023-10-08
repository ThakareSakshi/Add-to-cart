const Prod_list = document.querySelector(".product-list");
const cart_list = document.querySelector(".cart-list");
let totalPrice= parseInt(0);
let displayPrice=document.querySelector("#total-price-money");


displayPrice.innerHTML=totalPrice;
console.log( "cartlist"+cart_list+"rpduct list"+Prod_list);
Products.forEach(function (prod, index) {
    let child = document.createElement("li");
    console.log(prod)
    child.setAttribute("class", "product")

    child.innerHTML = `
   <div>
    <img src=${prod["url"]}>
    <div class="detail">
    <p class="theme">${prod["product-name"]}</p>
    <span>${prod["description"]}</span>
    <p class="theme price "> Rs. ${prod["price"]}</p>
</div>
       <div class="count">
           <span class="des">-</span>
           <span class="counter">${Products[index].count}</span>
           <span class="inc">+</span>
       </div>
   </div>`;
   

    Prod_list.appendChild(child);


   // cart functioning
    let cart_item=document.createElement("li");
    cart_item.setAttribute("class", "product")
    cart_item.innerHTML=`<div class="">
    <img
        src=${prod["url"]}>
    <div class="detail">
        <p class="theme">${prod["product-name"]}</p>
        
       
    </div>
    <div style="width:100px">
     <p class="total">${Products[index].count} x ${prod["price"]}</p>
    </div>
</div>`
// 
console.log(cart_item)
cart_list.appendChild(cart_item);
visible(cart_item,prod)
   

    let incCounter = child.querySelector(".inc");

    incCounter.addEventListener('click', () => {
        totalPrice +=parseInt(prod.price);
        Products[index].count = ++prod.count;
        updateinternalData(child, cart_item, index);
        visible(cart_item,prod)
    });
    let decCounter = child.querySelector(".des");
    decCounter.addEventListener('click', () => {

        if (prod.count > 0) {
            Products[index].count = --prod.count;
            totalPrice-=prod.price;
        }
        updateinternalData(child,cart_item, index);
        visible(cart_item,prod)
    });


// console.log(totalPrice);





});







function updateinternalData(child, cart_item, index) {
    let count = Products[index].count;
    let counter = child.querySelector(".counter");
    let total=cart_item.querySelector(".total");
    counter.innerHTML = count;
    
    total.innerHTML=` <p class="total">${count} x ${Products[index]["price"]}</p>`
    displayPrice.innerHTML=totalPrice;

}


function visible(cart_item,prod){
    let emptyCart=document.querySelector(".emptyCart");
 if(prod.count>0){
    cart_item.classList.remove("cart-product");
    cart_item.classList.add("display-cart-product");
 }
 else{
    cart_item.classList.remove("display-cart-product");
    cart_item.classList.add("cart-product");

 }
 if(totalPrice<=0){
   emptyCart.classList.add("display-cart-product");
   emptyCart.classList.remove("cart-product");
 }
 else{
    emptyCart.classList.remove("display-cart-product");
    emptyCart.classList.add("cart-product");
 }
 }


