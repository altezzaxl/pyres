price_2 = 0
let order = []


function nextstep(){
    window.location.href = "file:///C:/Users/Alexandr/Desktop/webapp_page/pyres/order.html";
    window.onload = function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded_hiding');
        }, 500);
      }
    
}

document.querySelector("#stuff_1").onclick = function(){
    price = document.getElementById("order_price");
    price_2 = price_2 + 100;
    price.innerHTML = "Сумма заказа - " + price_2 + "р";
    const c = document.querySelector('#stuff_1').classList;
    c.toggle('btn-primary');
    c.toggle('btn-secondary');
    order.push("Кофе_1", "url", "100")
  }

  document.querySelector("#stuff_2").onclick = function(){
    price = document.getElementById("order_price");
    price_2 = price_2 + 150;
    price.innerHTML = "Сумма заказа - " + price_2 + "р";
    const c = document.querySelector('#stuff_2').classList;
    c.toggle('btn-primary');
    c.toggle('btn-secondary');
    order.push("Кофе_2", "url", "150")
  }

  document.querySelector("#stuff_3").onclick = function(){
    price = document.getElementById("order_price");
    price_2 = price_2 + 200;
    price.innerHTML = "Сумма заказа - " + price_2 + "р";
    const c = document.querySelector('#stuff_3').classList;
    c.toggle('btn-primary');
    c.toggle('btn-secondary');
    order.push("Кофе_3", "url", "200")
  }

  document.querySelector("#stuff_4").onclick = function(){
    price = document.getElementById("order_price");
    price_2 = price_2 + 250;
    price.innerHTML = "Сумма заказа - " + price_2 + "р";
    const c = document.querySelector('#stuff_4').classList;
    c.toggle('btn-primary');
    c.toggle('btn-secondary');
  }
