function st() {
    if (window.location.href.includes("sc=(")) {
	for (let i = 0; i < Games.length; i+=2) {
	    if (Games[i].toLocaleLowerCase().includes(window.location.href.split("sc=(")[1].split(")")[0].toLocaleLowerCase())) {
		document.getElementById("feat").innerHTML = '<div onmousedown="window.open(\'https://commandmaster64.github.io/UB_Games.io/?=play=(' + Games[i] + ')\')" id="tileClick" style="border: 2px solid black"><h1>' + Games[i] + '</h1></div>';
	    }
	}
	document.getElementById("hdr-1").innerHTML = "UB Games";
	document.getElementById("searchBar").value = window.location.href.split("sc=(")[1].split(")")[0];
    }
    if (window.location.href.includes("play=(")) {
	let game = window.location.href.replaceAll("%20", " ").split("play=(")[1].split(")")[0];
	document.getElementById("hdr-1").innerHTML = "UB Games";
	document.getElementById("feat").innerHTML = PullGame(game, false);
	let e = document.createElement("script");
	e.innerHTML = PullGame(game, true);
	document.getElementById("feat").appendChild(e);
    }
}
document.getElementById("searchButton").addEventListener('click', () => {
	let srch = document.getElementById("searchBar").value;
    window.open("https://commandmaster64.github.io/UB_Games.io/?=sc=(" + srch + ")");
});
	st();
