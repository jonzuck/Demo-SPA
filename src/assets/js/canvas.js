// Drawing with radians is the best argument ever for using TAU instead of PI.
// Read the Tau Manifesto at http://tauday.com/tau-manifesto.
// Go ahead, read it really. I'll wait.
// Or, if you prefer, watch some Numberphile videos.
// Now that you're familiar with tau, do you not agree that Math.TAU 
// makes a heck of a lot more sense than Math.PI?
// Does anyoe really find it easier to think in fractions of a semicircle
// than fractions of a circle?
// I, for one, do not. 
// Enough with the jibber-jabber: Die, PI!
// Henceforth, TAU is a property of the Math object, at least on this demo site.

var cv = document.getElementById('canvas');
var cx = cv.getContext('2d');
var cvH = cv.height;
var cvW = cv.width;
Math.TAU = Math.PI * 2; // Throwing in the tau. Get it? Tau ~ towel? 
var coords = document.getElementById('coords');
var rightDown = false;
var leftDown = false;
var animFrame; // request/clear animation frame
var bricks;
var brickRows;
var brickCols;
var brickW;
var brickH;
var brickPadding; // kind of a contradiction in terms, isn't it?
var rowColors = ["#ca8", "#a86", "#864", "#632", "#410"];

function brickInit() {
  brickRows = 5;
  brickCols = 5;
  brickW = (cvW / brickCols) - 1;
  brickH = 15;
  brickPadding = 1;

  bricks = new Array(brickRows);
  for (var i = 0; i < brickRows; i++) {
    bricks[i] = new Array(brickCols);
    for (var j = 0; j < brickCols; j++) {
      bricks[i][j] = 1;
    }
  }
}

// keypress info for the paddle
//set rightDown or leftDown if the right or left keys are down
document.addEventListener('keydown', function (e) {
  if (e.which == 39) rightDown = true;
  else if (e.which == 37) leftDown = true;
});

//and unset them when the right or left key is released
document.addEventListener('keyup', function (e) {
  if (e.which == 39) rightDown = false;
  else if (e.which == 37) leftDown = false;
});

  
//make a ball 
var ball = {
  h: 20,
  w: 20,
  r: 10,
  //add some randomness to ball's starting position and momentum
  x: Math.floor(Math.random() * 800 + 1),
  y: Math.floor(Math.random() * 25 + 85),
  dirX: Math.floor(Math.random() * 7 + 4),
  dirY: Math.floor(Math.random() * 5 + 2),
  color: 'goldenrod',
  draw: function () {
    cx.beginPath();
    cx.arc(this.x, this.y, this.r, 0, Math.TAU, false);
    cx.closePath();
    cx.fillStyle = this.color;
    cx.fill();
  }
};

// paddle 
var paddle = {
  x: cvW / 2 - 50,
  y: cvH - 10,
  h: 10,
  w: 100,
  draw: function () {
    cx.fillStyle = 'yellowgreen';
    cx.fillRect(this.x, this.y, this.w, this.h);
  }
};

// clear (for trailing animation effect)
function clear() {
  cx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  cx.fillRect(0, 0, cvW, cvH);
}

//reset (for new game)
function reset() {
  cx.fillStyle = 'rgb(0, 0, 0)';
  cx.fillRect(0, 0, cvW, cvH);
}  

// the heart of the game: drawing movement and animation
function draw() {
  // draw bricks
  for (var i = 0; i < brickRows; i++) {
    cx.fillStyle = rowColors[i];
    for (var j=0; j < brickCols; j++) {
      if (bricks[i][j] == 1) {
       cx.fillRect((j * (brickW + brickPadding)) + brickPadding, 
             (i * (brickH + brickPadding)) + brickPadding,
             brickW, brickH);
      }
    }
  }
  // detect brick strikes
 var rowheight = brickH + brickPadding;
 var colwidth = brickW + brickPadding;
 var row = Math.floor(ball.y/rowheight);
 var col = Math.floor(ball.x/colwidth);
  //if hit, reverse motion and mark the brick as broken
  if (ball.y < brickRows * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    ball.dirY = -ball.dirY;
    bricks[row][col] = 0;
  } 
  
  clear();
  
  // draw ball and paddle
  paddle.draw();
  ball.draw();
  ball.x += ball.dirX;
  ball.y += ball.dirY;

  if (rightDown && paddle.x < cvW - paddle.w) paddle.x += 8;
  else if (leftDown && paddle.x > 0) paddle.x -= 8;

  animFrame = window.requestAnimationFrame(draw); 
  
  // ball boundary and paddle interaction
  if (ball.x + ball.r > cvW || ball.x - ball.r < 0) {
    ball.dirX = -ball.dirX;
  }
  var hit = (ball.y + ball.r > paddle.y) && (ball.x > paddle.x && ball.x < paddle.x + paddle.w);    
  if (ball.y - ball.r < 0 || hit) {
    ball.dirY = -ball.dirY;
  } if (ball.y + ball.r > cvH) {
        setTimeout(function(){ 
      alert('You lose!');
      }, 700); 
    cancelAnimationFrame(animFrame);
  } console.log(ball.x, ball.y,ball.dirX, ball.dirY);
}

// start / stop game 
document.getElementById('start').addEventListener('click', function () {
  cancelAnimationFrame(animFrame);
  reset();
  brickInit();
  ball.x = Math.floor(Math.random() * 500 + 1);
  ball.y = Math.floor(Math.random() * 25 + 85);
  ball.dirX = Math.floor(Math.random() * 7 + 4);
  ball.dirY = Math.floor(Math.random() * 5 + 2);
  ball.draw();
  animFrame = window.requestAnimationFrame(draw);
});
document.getElementById('stop').addEventListener('click', function () {
  cancelAnimationFrame(animFrame);
});
