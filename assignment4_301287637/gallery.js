var imageList = []; 
var currentIndex = 0; 
var timer; 

function loadGallery() {
  var request = new XMLHttpRequest();
  request.open("GET", "gallery.json", true);
  request.onload = function() {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data.images.length; i++) {
        imageList.push({
          filename: data.images[i].filename,
          duration: data.images[i].duration
        });
      }
      displayImage();
      startTimer();
    }
  };
  request.send(null);
}

function displayImage() {
  var image = document.getElementById("image");
  image.src = "images/" + imageList[currentIndex].filename;
}

function startTimer() {
  timer = setInterval(nextImage, imageList[currentIndex].duration * 1000);
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= imageList.length) {
    currentIndex = 0;
  }
  displayImage();
  resetTimer();
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageList.length - 1;
  }
  displayImage();
  resetTimer();
}

function updateGallery() {
  loadGallery();
}

window.onload = loadGallery();
window.onload = nextImage();
