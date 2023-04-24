"use strict";
// I will drop short comments just around my two javascript files
var photoArray = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg","photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg","photo9.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"];
var currentPhoto=5;
// We have photo array, with files and current file, variable pointing the number of picture in the middle

function setUp(){
  // In set up function we basically appending files to the <image>, also doing some checkings for last and first number
  var filename;
  var currentPicture = document.getElementById("photo2");
  var previousPicture = document.getElementById("photo1");
  var nextPicture = document.getElementById("photo3");
  if (currentPhoto == 1) {
    currentPicture.src = photoArray[currentPhoto-1];
    previousPicture.src = photoArray[photoArray.length-1];
    nextPicture.src = photoArray[currentPhoto];
  } else if (currentPhoto == photoArray.length) {
    currentPicture.src = photoArray[currentPhoto-1];
    previousPicture.src = photoArray[currentPhoto-2];
    nextPicture.src = photoArray[0];
  } else {
    currentPicture.src = photoArray[currentPhoto-1];
    previousPicture.src = photoArray[currentPhoto-2];
    nextPicture.src = photoArray[currentPhoto];
  }
}
function rightArrow() {
  //function for right arrow, regular expression and exception when current photo is the last one
  if (currentPhoto<photoArray.length) {
    currentPhoto++;
  }  else {
    currentPhoto = 2;
  }
  setUp();
}

function leftArrow() {
  //same but with left arrow simple
  if (currentPhoto <2) {
    currentPhoto = photoArray.length;
  } else {
    currentPhoto--;
  }
  setUp();
}

function addAction(){
  //s=just adding actions for everything
  var leftarrow=document.getElementById("leftarrow");   
  leftarrow.addEventListener("click",leftArrow);   
  var rightarrow=document.getElementById("rightarrow");
  rightarrow.addEventListener("click",rightArrow);
  var openImage=document.getElementById("photo2");
  openImage.addEventListener("click",zoomPhoto);
}

function zoomPhoto() {
  //opening nect window
   window.open("zoom.html");
}

window.addEventListener("load", setUpPage);
//just starting java file when loading

function setUpPage() {
  //first function, here interesting
  addAction();
  setUp();
  if (window.opener != null) {
    //I am checking did we open this page from another page
    //to know do we need to get array with our favorite images
    //basicaly, that is how I am getting data from previous page
    //i dont thinks that is the best solution, but with my other ideas I had data leaks, so I stopped on this
    favouriteImages = window.opener.favouriteImages;
    updateFavourites();
  }
}

var favouriteImages = [];
const imageContainer = document.getElementById("favourites");
updateFavourites();

function updateFavourites() {
  //that is function to update layout for favourites photos, we are just adding them one by one
  //and adding event to open photo
  for (let i = 0; i < favouriteImages.length; i++) {
    const image = document.createElement("img");
    image.addEventListener("click", function() {
      for (let i = 0; i < photoArray.length; i++) {
        if (favouriteImages[i] == photoArray[i]) {
          currentPhoto = i+1;
        }
      }
      //this event also changing current photo, to properly open zoomed picture, I ve added all function there
      window.open("zoom.html");
    });
    image.src = favouriteImages[i];
    imageContainer.appendChild(image);
  }
}
