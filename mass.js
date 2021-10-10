function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 500, 400);
    fill("#ff0000");
    text("golden retriever", 50, 50);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 350, 300);
}