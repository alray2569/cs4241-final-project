(function () {
	window.addEventListener("load", function () {
		window.buildMap();
		
		$("div.content, header")
			.css("-webkit-animation-name", "fadein")
			.css("-moz-animation-name", "fadein")
			.css("-o-animation-name", "fadein")
			.css("animation-name", "fadein")
			.css("visibility", "visible");
	});
})();