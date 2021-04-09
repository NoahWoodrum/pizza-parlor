//buisness logic
// const sizes = ["small","medium","large"]
// const topping = ["cheese","pepperoni","artichoke","anchovy"]

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

function Size(small, medium, large) {
  small = +5;
  medium = +10;
  large = +15;
}

function Topping(cheese, pepperoni, artichoke, mushroom) {
  cheese = +1;
  pepperoni= +1;
  artichoke= +1;
  mushroom= +1;
}

Pizza.prototype.getPrice = function() {
  let priceFormatter = new Int1.Numberformat("en-us", {
style: "currency",
currency: "USD",
  });
  let price = 5.0;
  if(this.size === "medium") {
    cost += 5;
  } else if (this.size === "large") {
    price += 10;
  }
  if (this.topping.length === 1) {
    price += 1.0;
  } else if (this.topping.length === 2) {
    price += 2.0;
  } else if (this.topping.length === 3) {
    price += 3.0;
  } else if (this.topping.length === 4) {
    price += 4.0;
  } else {
    price += 0;
  }
  this.price = priceFormatter.format(price);
  return this.price;
  };

Pizza.prototype.getTopping = function(topping) {
  this.topping = topping;
}

Pizza.prototype.getSize = function(size) {
  this.size = size;
}

// UI Logic

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const pizzaSize = $("input:radio[name=size]:checked").val();
    const pizzaToppings = $("input:checkbox[name=toppings]:checked").val();
    console.log(pizzaSize);
    console.log(pizzaToppings);
  });
});
