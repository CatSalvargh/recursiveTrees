//Credit:training exercise from Colorful Coding, with personal modifications (https://www.youtube.com/watch?v=-3HwUKsovBE&list=PPSV)

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);

    noLoop(); //Comment noLoop() for rotation
}

function draw(){
    background(200);

    randomSeed(1); //normalize random values

    translate(0, 200, 0);

    rotateY(frameCount);
    branch(100);

}

function branch(len){
    strokeWeight(map(len, 10, 100, 0.5, 5));
    fill(100, 40, 20);
    line(0, 0, 0, 0, -len -2, 0);

    translate(0, -len, 0);

    if (len > 10){
        //for() to create 3 branches at the end of each branch
        for(let i = 0; i < 3; i++){
            rotateY(120);
            
            push();
            
            rotateZ(30);
            
            branch(len * 0.7);
            pop();
        }
    } else {

        const r = 180 + random(-20, 20);
        const g = 100 + random(-20, 20);
        const b = 40 + random(-20, 20);

        fill(r, g, b, 200);
        noStroke();

        translate(5, 0, 0);

        rotateZ(90)

        beginShape();
        for(let i = 45; i < 135; i++){
            const rad = 7;
            const x = rad * cos(i);
            const y = rad * sin(i);
            vertex(x, y);
        }
        for(let i = 135; i > 45; i--){
            const rad = 7;
            const x = rad * cos(i);
            const y = rad * sin(-i) + 10;
            vertex(x, y);
        }
        endShape(CLOSE);
    }

}
// function branch(len){
//     strokeWeight(map(len, 10, 100, 0.5, 5));
//     stroke(70, 40, 20);

//     line(0, 0 ,0 , 0, -len -2, 0);

//     translate(0, -len, 0);

//     if (len > 10){
//         for (let i = 0; i < 3; i++){
//             rotateY(random(100, 140));
           
//             push();
//             rotateZ(random(20, 50));
//             branch(len * 0.7);
//             pop();
//         }
//     } else {
//         const r = 220 + random(-20, 20);
//         const g = 120 + random(-20, 20);
//         const b = 40 + random(-20, 20);
        
//         fill(r, g, b, 150);
//         // noStroke();
        
//         translate(5, 0, 0);
//         rotateZ(90);

//         beginShape();
//         for(let i = 45; i < 135; i++){
//             const rad = 7;
//             const x = rad * cos(i);
//             const y = rad * sin(i);
//             vertex(x, y);
//         }
//         for(let i = 135; i > 45; i--){
//             const rad = 7;
//             const x = rad * cos(i);
//             const y = rad * sin(-i) + 10;
//             vertex(x, y);
//         }
//         endShape(CLOSE);
//             // fill(r, 20, b);
//             // ellipse(0,0,9);
//     }
// }