function st() {
    if (window.location.href.includes("sc=(")) {
	document.getElementById("hdr-1").innerHTML = "UB Games";
	document.getElementById("feat").innerHTML = "";
	document.getElementById("searchBar").value = window.location.href.split("sc=(")[1].split(")")[0];
    }
}
document.getElementById("searchButton").addEventListener('click', () => {
	let srch = document.getElementById("searchBar").value;
    window.open("https://commandmaster64.github.io/UB_Games.io/?=sc=(" + srch + ")");
});
	st();
