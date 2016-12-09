function updatePresPic (newYear) {
	var second = false;
	
	window.presidents.forEach(function (president) {
		if (president.showin.indexOf(newYear) !== -1) {
			if (!second) {
				$("img#presPic")
					.attr("src", "imgs/" + president.src);
				$("#ppfigcap1")[0]
					.innerHTML = president.name + 
						", " + president.from +
						" - " + (president.to === Infinity ?
								 	"present" : president.to) +
						"<br><small>(" + 
						president.imgcred + 
						")</small>";
				second = true;
			}
			else {
				$("img#presPic2")
					.attr("src", "imgs/" + president.src);
				$("#ppfigcap2")[0]
					.innerHTML = president.name + 
						", " + president.from +
						" - " + (president.to === Infinity ?
								 	"present" : president.to) +
						"<br><small>(" + 
						president.imgcred + 
						")</small>";
				second = false;
			}
		}
	});
	
	if (second) {
		$("figure#ppfig2")
			.css("display", "none");
	}
	else {
		$("figure#ppfig2")
			.css("display", "inline-block");
	}
}