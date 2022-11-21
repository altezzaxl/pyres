price_2 = 0
document.querySelector("#stuff_1").onclick = function(){
    price = document.getElementById("order_price");
    price_2 = price_2 + 100;
    price.innerHTML = price_2 + "Р";


  }

