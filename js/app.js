let bricks = [];

let xPos = 0;
let yPos = 150;
let xSpeed = 1;
let ySpeed = 1;


function setup(){
    createCanvas(800,600);
}


function draw(){
          for (let i = 0; i < bricks.length; i++){
            background(225)
            let brick = bricks[i];
            brick.y += 5;

            rect(brick.x, brick.y, brick.height, brick.width);
          }
        }

          function mouseClicked() {
          let brick = {
            x: mouseX,
            y: mouseY,
            width: 60,
            height: 30
          };

          bricks.push(brick);
}