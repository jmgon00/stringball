import { Player } from "./player.js";
import { Ball } from "./ball.js";

const score = document.getElementById("score");
let points = 0;

const canvas = document.getElementById('myCanvas');
canvas.height=600;

const ctx = canvas.getContext('2d'); /*contexto*/
const ball = new Ball(700, 100, 3, 3, 15, 'red');
const player = new Player(400, 550, 200, 15, 'black'); /*crear jugador desde la clase*/

/*funcion color*/

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

animate();
/*funcion animate*/

function animate() {
    player.update();
    canvas.width = 800; /*se coloca aca el width para que limpie el canvas en cada update*/
    ball.draw(ctx);
    player.draw(ctx);
    
    /**condicion colision **/
    if (ball.x + ball.vx > player.x - player.width / 2 &&
        ball.x + ball.vx < player.x + player.width / 2 &&
        ball.y + ball.vy > player.y - player.height / 2 &&
        ball.y + ball.vy < player.y + player.height / 2) {
        ball.vy = -ball.vy;
        points++;
        score.innerHTML = points;
        ball.color = getRandomColor();
        player.color = getRandomColor();
        canvas.style.border = `5px solid ${getRandomColor()}`;
    }
    /**Game over**/
    if (ball.y + ball.vy > canvas.height - 10) {
        alert('Puntos:' + points)
        points = 0;
        score.innerHTML = points;
        ball.x = 700;
        ball.y = 100;
        ball.vx = 3;
        ball.vy = 3;
        ball.color = 'lightpink';
        player.color = 'lightgray';
        player.x = 400;
        player.y = 550;
        canvas.style.border = `5px solid ${getRandomColor()}`;
    }
    requestAnimationFrame(animate);
}