mouthx = 0;
mouthy = 0;
function preload(){
mustache = loadImage("mustache.png");
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
         mouth= results[0].pose.mouth.x;
        mouthy = results[0].pose.mouth.y;
        console.log("mouth x= " + mouthex);
        console.log("mouth y=" + mouthy);
    }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function draw(){
image(video, 0, 0, 400, 300);
image(mustache, mouthx, mouthy, 30, 30);


}
function take_snapshot(){
    save("Mustache.png");
}
function lipstick(){
    window.location = "lipstick.html";
}