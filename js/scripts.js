//buisness logic
const sizes = ["small","medium","large"]
const topping = ["cheese","pepperoni","artichoke","anchovy"]

function Pizza() {
  this.topping = [];
  this.size = undefined;
}

Pizza.prototype.getTopping = function(topping) {
  this.topping.push(topping);
}
Pizza.prototype.getSize = function(sizes) {
  this.size = size;
}
Pizza.prototype.getPrice = function()