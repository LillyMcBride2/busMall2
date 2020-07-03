
'use strict';
var imageElements = document.getElementsByTagName('img');
var product1 = 0;
var product2 = 1;
var product3 = 2;
var allProducts = [];
var totalClicks = 0;
var rounds = 25;

// constructor
function Product(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesSeen = 0;
  allProducts.push(this);
}

// actually create products
new Product('Bag', 'images/bag.jpg');
new Product('Banana Slicer', 'images/banana.jpg');
new Product('Tablet Stand', 'images/bathroom.jpg');
new Product('Toeless Boots', 'images/boots.jpg');
new Product('Breakfast Maker', 'images/breakfast.jpg');
new Product('Meatball Bubble Gum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Duck Muzzle', 'images/dog-duck.jpg');
new Product('Dragon Meat', 'images/dragon.jpg');
new Product('Pen Silverware', 'images/pen.jpg');
new Product('Pet Sweeper', 'images/pet-sweep.jpg');
new Product('Pizza Scissors', 'images/scissors.jpg');
new Product('Shark Sleeping Bag', 'images/shark.jpg');
new Product('Baby Sweeper', 'images/sweep.png');
new Product('Tauntain Sleeping Bag', 'images/tauntaun.jpg');
new Product('Unicorn Meat', 'images/unicorn.jpg');
new Product('Tentacle Flashdrive', 'images/usb.gif');
new Product('Watering Can', 'images/water-can.jpg');
new Product('Wine Glass', 'images/wine-glass.jpg');

//display images
imageElements[0].src = allProducts[product1].imageUrl;
imageElements[1].src = allProducts[product2].imageUrl;
imageElements[2].src = allProducts[product3].imageUrl;

//account for first three products being seen
allProducts[product1].timesSeen++;
allProducts[product2].timesSeen++;
allProducts[product3].timesSeen++;

//stores clicks
function imageWasClicked(event) {
  totalClicks++;
  if(event.srcElement.id === '1') {
    allProducts[product1].timesClicked++;
  } else if (event.srcElement.id === '2') {
    allProducts[product2].timesClicked++;
  } else if (event.srcElement.id === '3') {
    allProducts[product3].timesClicked++;
  }
}
