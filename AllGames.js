var Games = [
    '',
    ''
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
