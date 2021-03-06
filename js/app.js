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

function getAllProductsProperty(productProperty) {
  var answer = [];
  for (var i = 0; i < allProducts.length; i++) {
    answer[i] = allProducts[i][productProperty];
  }
  return answer;
}

// actually creates products
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

  //accounts for first three products being seen
  allProducts[product1].timesSeen++;
  allProducts[product2].timesSeen++;
  allProducts[product3].timesSeen++;


  //picks random product to display and check against duplicates
  var nextProduct1 = Math.floor(Math.random() * allProducts.length);
  while((nextProduct1 === product1) || (nextProduct1 === product2) || (nextProduct1 === product3)) {
    nextProduct1 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProduct2 = Math.floor(Math.random() * allProducts.length);
  while((nextProduct2 === product1) || (nextProduct2 === product2) || (nextProduct2 === product3) || (nextProduct2 === nextProduct1)) {
    nextProduct2 = Math.floor(Math.random() * allProducts.length);
  }
  var nextProduct3 = Math.floor(Math.random() * allProducts.length);
  while((nextProduct3 === product1) || (nextProduct3 === product2) || (nextProduct3 === product3) || (nextProduct3 === nextProduct1) || (nextProduct3 === nextProduct2)) {
    nextProduct3 = Math.floor(Math.random() * allProducts.length);
  }

  product1 = nextProduct1;
  allProducts[product1].timesSeen++;
  product2 = nextProduct2;
  allProducts[product2].timesSeen++;
  product3 = nextProduct3;
  allProducts[product3].timesSeen++;

  //displays images
  imageElements[0].src = allProducts[product1].imageUrl;
  imageElements[1].src = allProducts[product2].imageUrl;
  imageElements[2].src = allProducts[product3].imageUrl;

  //creates results tab
  if(totalClicks === rounds) {
    var resultsElement = document.getElementsByTagName('aside')[0];
    if(resultsElement.firstElementChild){
      resultsElement.firstElementChild.remove();
    }
    var title = document.createElement('h2');
    title.textContent = 'Results';
    resultsElement.appendChild(title);
    var createUL = document.createElement('ul');
    for (var i=0; i < allProducts.length; i++){
      var createLI = document.createElement('li');
      createLI.textContent = allProducts[i].name + ' had ' + allProducts[i].timesClicked + ' votes and was shown ' + allProducts[i].timesSeen + ' times.';
      createUL.appendChild(createLI);
    }
    resultsElement.appendChild(createUL);
    if (totalClicks === rounds){
      for (var j = 0; j < imageElements.length; j++) {
        imageElements[j].removeEventListener('click', imageWasClicked);
      }
    }
    runChart();
  }
}

  for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].addEventListener('click', imageWasClicked);
  }

  function runChart(){
    var canvas = document.getElementById('myChart');
    if(canvas.getContext('2d')) {
    var x = canvas.getContext('2d');
    new Chart(x, {
      type: 'bar',
      data: {
        labels: getAllProductsProperty('name'),
        datasets: [{
          label: '# of Votes',
          data: getAllProductsProperty('timesClicked'),
          backgroundColor: ['rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)'],
          borderColor: ['rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)',
          'rgb(255, 255, 255)'],
          borderWidth: 1
        },
        {
          label: '# of Times Seen',
          data: getAllProducts('timesSeen'),
          backgroundColor: ['rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)'],
          borderColor: ['rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)',
          'rgb(0, 255, 255)'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }
}

