function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
img = "";
status ="";
function modelLoaded(){
    console.log("Model loaded !!! :)")
    status = true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error,result){
if (error) {
     console.log(error);
 }
 console.log(results);
}

function preload(){
img = loadImage('fruit.jpeg');
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fruit basket", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill('FF0000');
    text("Fruits: grapes,plums, peaches and apples",320,120);
    noFill();
    stroke("FF0000")
    rect(300,90,270,320);
}