// Drawing with radians is the best argument ever for using TAU instead of PI.
// Read the Tau Manifesto at http://tauday.com/tau-manifesto.
// Go ahead, read it really. I'll wait.
// Or, if you prefer, watch some Numberphile videos.
// Now that you're familiar with tau, do you not agree that Math.TAU 
// make a heck of a lot more sense than Math.PI?
// Does anyoe really find it easier to think in fractions of a semicircle
// than fractions of a circle?
// I, for one, do not. 
// Enough with the jibber-jabber: Die, PI!
// Henceforth, TAU is a property of the Math object, at least on this demo site.

var cv = document.getElementById('canvas');
var cx = cv.getContext('2d');
var cvH = cv.height;
var cvW = cv.width;
Math.TAU = Math.PI * 2;
var coords = document.getElementById('coords');
var rightDown = false;
var leftDown = false;
var intervalId = 0;
var animFrame; //request/clear animation frame
var running = false; // is the ball moving?

  // keypress info necessary for the paddle
  //set rightDown or leftDown if the right or left keys are down
  document.addEventListener('keydown', function (evt) {
    if (evt.which == 39) rightDown = true;
    else if (evt.which == 37) leftDown = true;
 
  });

  //and unset them when the right or left key is released
  document.addEventListener('keyup', function (evt) {
    if (evt.which == 39) rightDown = false;
    else if (evt.which == 37) leftDown = false;
  });
  
//make a ball 
var ball = {
  radius: 10,
  x: 35,
  y: 35,
  h: 20,
  w: 20,
  dirX: 5,
  dirY: 1,
  color: 'goldenrod',
  draw: function () {
    cx.beginPath();
    cx.arc(this.x, this.y, this.radius, 0, Math.TAU, false);
    cx.closePath();
    cx.fillStyle = this.color;
    cx.fill();
  }
};


//paddle 
var paddle = {
  x: cvW /2 - 50 ,
  y: cvH - 10,
  h: 10,
  w: 100,
  draw: function () {
    cx.fillStyle = 'yellowgreen';
    cx.fillRect(this.x, this.y, this.w, this.h);
  }
};

//clear
function clear() {
  cx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  cx.fillRect(0, 0, cvW, cvH);
}
  
//drawing movement and animation
function draw() {
  clear();
  
  // draw ball and paddle
  ball.draw();
  paddle.draw();

  ball.x += ball.dirX;
  ball.y += ball.dirY;

  if (rightDown) paddle.x += 5;
  else if (leftDown) paddle.x -= 5;

  coords.innerHTML = ball.x + ', ' + ball.y;
  var hit =
    (ball.y === paddle.y - ball.h) &&
    (ball.x > paddle.x && ball.x < paddle.x + paddle.w);
  animFrame = window.requestAnimationFrame(draw); 
  // ball boundary and paddle interaction
   console.log(ball.x + ', ' + ball.y + ', ' + hit + ', ' + paddle.x + ', ' + paddle.y + ', ' + rightDown);
  if (ball.x + ball.w > cvW || ball.x - ball.w < 0) {
    ball.dirX = -ball.dirX;
  }
  if (ball.y < 0 || hit) {
    ball.dirY = -ball.dirY;
  } if (ball.y > cvH) {
    alert('You lose!');
    cancelAnimationFrame(animFrame);
  }
}

//start / stop motion 
cv.addEventListener('mouseover', function () {
  animFrame = window.requestAnimationFrame(draw);
  running = true;
});
cv.addEventListener('mouseout', function () {
  cancelAnimationFrame(animFrame);
  running = false;
});

ball.draw();