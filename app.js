const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
console.log(ctx);

const snake = {
    color: 'green',
    height: 50,
    speed: 50,
    posX: 0,
    posY: 0,
    width: 50,
    move: function() {
        this.posX += 1;
    },
    draw: function() {
        ctx.fillStyle = 'rgb(22, 22, 22)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = snake.color;
        ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
    }
}

function gameLoop() {
    snake.draw();
    snake.move();
    requestAnimationFrame(gameLoop)
}

gameLoop()

