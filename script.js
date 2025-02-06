const clickBtn = document.getElementById("clickBtn");

var source = "Image 1.png";

const image = document.getElementById("mouseoverImage");
image.src = "Image 1.png";

var onClick = 0;

function ImageToggle() {
    onClick++;
    if (onClick % 2 == 0) {
        image.src = "Image 1.png";
    }
    else {
        image.src = "Image 2.png";
    }
}

function mouseoverImage() {
    if (onClick % 2 == 0) {
        alert('This web page is currently displaying Image 1.');
    }
    else {
        alert('This web page is currently displaying Image 2.');
    }
}

function customFunction() {
    console.log("Changed the picture!");
}