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
function compileGame(Game) {
  for (let i = 0; i < Game.length; i++) {
    if (Game[i] == "'") {
      Game.split(Game[i])[0].splice(i, 0, "\\");
    }
  }
}
</script>
*/
