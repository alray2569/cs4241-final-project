var spos = 0, ticking = false;

(function () {
	window.addEventListener("scroll", function (event) {
		spos = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(function () {
				if (spos > 120) {
					$("#smheader").css("display", "block");
				}
				else {
					$("#smheader").css("display", "none");
				}
				ticking = false;
			});
		}
		ticking = true;
	});
})();