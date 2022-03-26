let ball = document.querySelector('.ball')
let ballVelocityX = 7;
let ballVelocityY = 7;
let ballPositionX = 90;
let ballPositionY = 90;


// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {
    ballPositionX = ballPositionX - ballVelocityX;
    ball.style.left = ballPositionX + 'px';
    
    ballPositionY = ballPositionY - ballVelocityY;
    ball.style.top = ballPositionY + 'px';
    
    //ballVelocityY += .5;
    
    //ballVelocityX += .2;

    //bottom edge boundary
    if(ballPositionY > 480){
        ballVelocityY *= -1;
        ballPositionY = 480;
    }

    //top edge boundary
    if(ballPositionY <= 0){
        ballVelocityY *= -1;
        ballPositionY = 0;
    }

    //left edge boundary
    if(ballPositionX <= 0){
        ballVelocityX *= -1;
        ballPositionX = 0;
    }
    // right edge boundary
    if(ballPositionX > 680){
        ballVelocityX *= -1;
        ballPositionX = 680;
    }
}

    
    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;


// Call the update() function every 35ms
setInterval(update, 35);
