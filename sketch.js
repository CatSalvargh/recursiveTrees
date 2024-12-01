//Credit:training exercise from Colorful Coding, with personal modifications (https://www.youtube.com/watch?v=-3HwUKsovBE&list=PPSV)

function setup(){
    createCanvas(800, 800);
    // createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    noLoop();
}

function draw(){
    background(150);

    translate(width / 2, height / 2 + 200);

    branch(100);
}

function branch(len){
    push();
    if (len >10){
    strokeWeight(map(len, 10, 100, 1, 15));
    stroke(70, 40, 15);
    line(0,0,0,-len);
    translate(0, -len);
    rotate(random(-25, -32));
    branch(len * random(0.7, 0.9));
    rotate(random(50, 60));
    branch(len * random(0.7, 0.9));
    } else{
        noStroke();
        var r = 80 + random(-20, 20);
        var g = 120 + random(-20, 20);
        var b = 40 + random(-20, 20);
        fill(r, g, b);
        ellipse(0,0,10);
    }
    pop();
}