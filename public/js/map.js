function updateMap (newYear) {
	window.buildings.forEach(function (building) {
		if (building.year <= newYear) {
			$("#" + building.name)[0]
				.setAttribute("visibility", "visible");
		}
		else {
			$("#" + building.name)[0]
				.setAttribute("visibility", "hidden");
		}
	});
}

function buildMap () {

	var myRequest = new XMLHttpRequest();

	myRequest.addEventListener("readystatechange", function(event) {
		if (this.readyState === 4) {
			document.getElementById("maphere")
				.innerHTML = this.responseText;
			updateMap(1865);
			
			$("#maphere")
				.css("visibility", "visible")
				.css("-webkit-animation-name", "fadein")
				.css("-moz-animation-name", "fadein")
				.css("-o-animation-name", "fadein")
				.css("animation-name", "fadein");
		}
	});

	myRequest.open("GET", "map.svg", true);
	myRequest.send();
	
}
