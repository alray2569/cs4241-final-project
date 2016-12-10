(function () {
	window.addEventListener("load", function () {
		window.buildMap();
		window.updatePresPic(1865);
		window.setTimeout(window.preLoadPics, 2000);
		
		$("div.content, header")
			.css("-webkit-animation-name", "fadein")
			.css("-moz-animation-name", "fadein")
			.css("-o-animation-name", "fadein")
			.css("animation-name", "fadein")
			.css("visibility", "visible");
	});
})();