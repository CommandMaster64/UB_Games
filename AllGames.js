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
    let og = str[oneBef]
	ss = ss.replace("'", "@");
    let f = ss.split("@")[0];
    let e = og + "" + ss.split("@")[1];
    console.log(ss);
    return f + "" + rep + "" + e;
}
function compileGame(Game) {
  let e = Game;
  let lg = Game.length;
  for (let i = 0; i < lg; i++) {
    if (e[i] == "'") {
      e = spli(i, e, "\\");
      i++;
      lg++;
    }
    console.log(lg);
  }
  return e;
}
</script>
*/
