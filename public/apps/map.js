function run () {

	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("readystatechange", function(event) {
		if (this.readyState === 4) {
			document.getElementById("maphere").innerHTML = this.responseText;
		}
	});

	myRequest.open("GET", "map.svg", true);
	myRequest.send();
	
}

run();