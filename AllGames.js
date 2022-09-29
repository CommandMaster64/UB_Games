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
    let f = str.split(str[oneBef])[0];
    let e = str[oneBef] + str.split(str[oneBef])[1];
    return f + rep + e;
}
function compileGame(Game) {
  for (let i = 0; i < Game.length; i++) {
    if (Game[i] == "'") {
      Game.split(Game[i])[0].splice(i, 0, "\\");
    }
  }
}
</script>
*/
