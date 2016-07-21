var data = require('../products.json');
var counter = 0

// Solutions for all 6:

//console.log(data.items.kind["shopping#products"]);

/* Answer for #1
for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].kind.includes("shopping#product"));
if (data.items[i].kind.includes("shopping#product")) {
     counter++;
}
console.log(counter);
}
*/

/* Answer for #2
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.inventories[0].availability=="backorder") {
     console.log(data.items[i].product.title);
}
}
*/

/* Answer for #3
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.images.length > 1) {
     console.log(data.items[i].product.title);
}
}
*/

/* Answer for #4
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.brand=="Canon") {
     console.log(data.items[i].product.title);
}
}
*/

/* Answer for #5
for (var i = 0; i < data.items.length; i++) {
if (data.items[i].product.brand=="Canon")
if (data.items[i].product.author.name=="eBay")
console.log(data.items[i].product.title);
}
*/


//Answer for #6!!!!!!!!!!!!!!!!!!!!  (:
for (var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].product.brand)
  console.log(data.items[i].product.inventories[0].price)
  console.log(data.items[i].product.link)
}
