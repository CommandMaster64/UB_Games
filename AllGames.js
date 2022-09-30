var Games = [
    'Snake game',
    '<body onkeydown="move(event)" style="background-color: black;">    <p id="score" style="color: white; user-select: none;">Score: 0</p>    <canvas id="game" width="500" height="500" style = "border: 1px solid white; background-color: black;"></canvas></body><script>var canvas = document.getElementById("game");var ctx = canvas.getContext("2d");var score = 0;var death = false;var start = false;var snake = [    0,    0,    0,    0,    0,    0];var apple = {    X: Math.floor(Math.random() * 25)*20,    Y: Math.floor(Math.random() * 25)*20};var moveb = 0;function move(event) {    if (event.key == "ArrowRight" && moveb != 2) {        moveb = 1;        setTimeout(function () { start = true; }, 1000);    }    if (event.key == "ArrowLeft" && moveb != 1) {        moveb = 2;        setTimeout(function () { start = true; }, 1000);    }    if (event.key == "ArrowUp" && moveb != 4) {        moveb = 3;        setTimeout(function () { start = true; }, 1000);    }    if (event.key == "ArrowDown" && moveb != 3) {        moveb = 4;        setTimeout(function () { start = true; }, 1000);    }}setInterval(function () { checkDeath(); },1);function checkDeath() {    for (let i = 2; i < snake.length-2; i+=2) {        if (collision(snake[0], snake[1], 20, 20, snake[i], snake[i+1], 20, 20) && start) {            death = true;        }    }    if (snake[0] < 0 || snake[0] > 500 || snake[1] < 0 || snake[1] > 500) {        death = true;    }}setInterval(function () { if (!death) { loop(); } },150);function loop() {    if (!death && moveb == 1) {        let lastx = snake[0];        let lasty = snake[1];        snake[0]+=20;        snake[1]+=0;        for (let i = 2; i < snake.length; i+=2) {            let lstx = snake[i];            let lsty = snake[i+1];            snake[i] = lastx;            snake[i+1] = lasty;            lastx = lstx;            lasty = lsty;        }    }    if (!death && moveb == 2) {        let lastx = snake[0];        let lasty = snake[1];        snake[0]-=20;        snake[1]+=0;        for (let i = 2; i < snake.length; i+=2) {            let lstx = snake[i];            let lsty = snake[i+1];            snake[i] = lastx;            snake[i+1] = lasty;            lastx = lstx;            lasty = lsty;        }    }    if (!death && moveb == 3) {        let lastx = snake[0];        let lasty = snake[1];        snake[0]+=0;        snake[1]-=20;        for (let i = 2; i < snake.length; i+=2) {            let lstx = snake[i];            let lsty = snake[i+1];            snake[i] = lastx;            snake[i+1] = lasty;            lastx = lstx;            lasty = lsty;        }    }    if (!death && moveb == 4) {        let lastx = snake[0];        let lasty = snake[1];        snake[0]+=0;        snake[1]+=20;        for (let i = 2; i < snake.length; i+=2) {            let lstx = snake[i];            let lsty = snake[i+1];            snake[i] = lastx;            snake[i+1] = lasty;            lastx = lstx;            lasty = lsty;        }    }    if (collision(snake[1], snake[0], 20, 20, apple.X, apple.Y, 20, 20)) {        apple.X = Math.floor(Math.random() * 25)*20;        apple.Y = Math.floor(Math.random() * 25)*20;        snake[snake.length] = 0;        snake[snake.length] = 0;        score++;        document.getElementById("score").innerHTML = "Score: " + score;    }    ctx.clearRect(0, 0, 500, 500);    ctx.fillStyle = "green";    for (let i = 0; i < snake.length; i+=2) {         ctx.fillRect(snake[i], snake[i+1], 20, 20);    }    ctx.fillStyle = "red";    ctx.fillRect(apple.Y, apple.X, 20, 20);}function collision(x1, y1, w1, h1, x2, y2, w2, h2) {	if (Math.abs(x1-x2)<(w1+w2)/2) {    	if (Math.abs(y1-y2)<(h1+h2)/2) {        	return(true);        }    }    return(false);}function resetSnake() {    snake = [        0,        0,        0,        0,        0,        0    ];    score = 0;    moveb = 0;    start = false;    death = false;    apple.X = Math.floor(Math.random() * 25)*20;    apple.Y = Math.floor(Math.random() * 25)*20;    document.getElementById("score").innerHTML = "Score: 0";} document.addEventListener(\'keydown\', (event) => { move(event); })</script>'
];
function PullGame(Name) {
    for (let i = 0; i < Games.length; i += 2) {
        if (Games[i] == Name) {
            return Games[i+1];
        }
    }
    return false;
}
/*
<textarea id="c"></textarea>
<button onclick="document.getElementById('c').value = compileGame(document.getElementById('c').value);">Compile</button>
<script>
function spli(oneBef, str, rep) {
	let ss = str;
    let og = str[oneBef];
	ss = ss.replace("'", "█");
    let f = ss.split("█")[0];
    let e = og + "" + ss.split("█")[1];
    return f + "" + rep + "" + e;
}
function compileGame(Game) {
  Game = Game.replaceAll("\n","");
  let e = Game;
  let g = 0;
  for (let i = 0; i < Game.length; i++) {
    if (Game[i] == "'") {
      e = spli(i+g, e, "\\");
      e = e.replace("'", "▙");
      g++;
    }
  }
  e = e.replaceAll("▙", "'");
  return e;
}
</script>
*/
