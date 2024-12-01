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
        const r = 200 + random(-20, 20);
        const g = 120 + random(-20, 20);
        const b = 40 + random(-20, 20);
        fill(r, g, b, 120);
        noStroke();

        beginShape();
        // setting 45<i<135 to avoid drawing a full circle
        //first half of the leaves
            for(let i = 45; i < 135; i++){
                const rad = 15;
                const x = rad * cos(i);
                const y = rad * sin(i);
                vertex(x, y);
            }
            //second half
            for(let i = 135; i > 40; i--){
                const rad = 15;
                const x = rad * cos(i);
                const y = rad * sin(-i) + 20;
                vertex(x, y);
            }
        endShape(CLOSE);
        fill(r, 20, b);
        ellipse(0,0,9);
    }
    pop();
}