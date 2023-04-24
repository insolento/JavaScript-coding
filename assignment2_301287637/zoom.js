"use strict"; 
var photoArray = window.opener.photoArray;
var currentPhoto = window.opener.currentPhoto;
var fileName = photoArray[currentPhoto-1];
var favouriteImages = window.opener.favouriteImages;

function buttonVisability() {
    //So here I am just checking is photo in favourites, to hide or show delete button
    //I know my style is not good, didn't finish it sorry, but decided that button should not
    //be visible if image is not in favourites
    var visible = false;
    if (favouriteImages.length == 0) {
        document.getElementById("deleteButton").style.display = "none";
    } else {
        for (let i = 0; i < favouriteImages.length; i++) {
            if (favouriteImages[i] == fileName) {
                visible = true;
            }
        }
    } 
    if (visible) {
        document.getElementById("deleteButton").style.display = "block";
    } else {
        document.getElementById("deleteButton").style.display = "none";
    }
}
function pageSetup() {
    //page setup appending image and checking visability for delete button
    document.getElementById("img").src = fileName;
    buttonVisability();
}
function addToFavourites() {
    //So here we are adding to favourites, We are checking is it in favourite and if there is 5 images already in favourite
    var inFavourite = false;
        for (let i = 0; i < favouriteImages.length; i++) {
            if (photoArray[currentPhoto-1] == favouriteImages[i]) {
                window.alert("It is already in favourites!");
                inFavourite = true;
            }
        } 
        if ((!inFavourite) &&  (favouriteImages.length < 5)) {
                favouriteImages.push(fileName);
                window.alert("You have succesfully added to favourite!");
        } else  if (favouriteImages.length > 4) {
                window.alert("You can have only 5 favourites, delete at least 1!");
        }
        buttonVisability();
    } 

function deleteFromFavourites() {
    //just deleting image from favourites
    for (let i = 0; i < favouriteImages.length; i++) {
        if (favouriteImages[i] == photoArray[currentPhoto-1]) {
            favouriteImages.splice(i,1);
        }
      }
    buttonVisability();
}
function goBack() {
    // opening main page
    window.open("index.html");
}

window.onload = pageSetup;
//That is it, thank you!

