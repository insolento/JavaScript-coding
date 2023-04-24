var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 450;
document.getElementById("theCanvas").appendChild(canvas);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "background.jpeg";

var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "bug1.png";

var score = 0;
var hopInterval = 2000;
var hop = setInterval(function () {
    resetLocation();
}, hopInterval);

var bug = {
    speed: 256 
};

var resetLocation = function () {
    bug.x = 32 + (Math.random() * (canvas.width - 64));
    bug.y = 32 + (Math.random() * (canvas.height - 64));
};


var resetSpeed = function () {
    clearInterval(hop);
    hopInterval = 2000;
    hop = setInterval(function () {
        resetLocation();
    }, hopInterval);
};
var resetScore = function () {
    score = 0;
    resetSpeed();
};

var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }
    document.getElementById("score").innerHTML = "Score: " + score;
};

canvas.addEventListener("mousedown", clicked, false);


function clicked(e) {
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;
    if ((x > bug.x && x < bug.x + 200) && (y > bug.y && y < bug.y + 280)) {
        if (hopInterval > 51) {
            clearInterval(hop);
            hopInterval -= 50;
            hop = setInterval(function () {
                resetLocation();
            }, hopInterval);
		}
		score += 10;
        resetLocation();
    }
}

var main = function () {
    render();
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame
        || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

main();