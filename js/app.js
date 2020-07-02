
'use strict';
var imageElements = document.getElementsByTagName('img');
var product1 = 0;
var product2 = 1;
var product3 = 2;
var allProducts = [];
var totalClicks = 0;
var rounds = 25;
// Constructor
function Product(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesSeen = 0;
  allProducts.push(this);
}