/* global d3: false */

// converts an object into an array of key-value pairs.
function toKV(obj) {
	var kva = [], x, key;
	
	for (x = 0; x < Object.keys(obj).length; ++x) {
		key = Object.keys(obj)[x];
		kva[x] = {key: key, value: obj[key]};
	}
	
	return kva;
}

// normalizes values in the range [inmin - inmax] to values in the
// range [outmin - outmax].
function scale(value, inmin, inmax, outmin, outmax) {
	return (value - inmin) / (inmax - inmin) * (outmax - outmin) + outmin;
}

function d3Do () {
	// Empty the elements first, especially important on resize.
	document.getElementById("graphClassSize").innerHTML = "";
	document.getElementById("graphFaculSize").innerHTML = "";
	document.getElementById("graphCOS").innerHTML = '';
	document.getElementById("graphTui").innerHTML = '';
	
	var 
		mode = window.getComputedStyle(
			document.getElementById("mode")
		).zIndex - 1,
		
		/*
			MODE is the type of browser:
			0: computer, width > 600px (use two-column layout)
			1: computer, width < 600px (use one-column layout)
			2: mobile (use one-column layout + sizing overhaul)
		*/
		
		margin = {
			top: mode === 2 ? 15 : 10, 
			bottom: mode === 2 ? 60 : 30, 
			left: mode === 2 ? 100 : 40, 
			right: mode === 2 ? 30 : 20},
		
		width = (
			mode === 0?
				(window.innerWidth * 0.45) - 40:
				(window.innerWidth * 0.90)
			) - margin.left - margin.right,
		height = 
			mode === 2?
				600:
				300,
		
		// Tell the graph to fit in the graphic
		x = d3.scale.linear().range([0, width]),
		y = d3.scale.linear().range([height, 0]),

		// tell the graph how to draw the axes
		xAxis = d3.svg.axis().scale(x).orient("bottom")
			// use the values of years as major ticks
			.tickValues(window.years)
			.tickFormat(function (datum, index) {
				return mode === 2 || width < 300?
					// in mobile (mode 2) and narrow graphs
					// (width < 300px), abbreviate the year 
					//from, say, 1865, to ’65.
					'’' + (datum + "").substring(2):
					// in wider graphs, don't abbreviate
					datum;
			}),
		yAxis = d3.svg.axis().scale(y).orient("left").ticks(5),

		// how to draw the graph line
		valueline = d3.svg.line()
					.x(function(d) {
						// x axis needs to be scaled
						return scale(d.key, 1865, 1935, 0, width);
					})
					.y(function(d) {
						// as does y.
						return height - scale(
							d.value,
							0, 
							// the maximum value in y.
							d3.max(data, function(d) {
								return d.value;
							}),
							0,
							height);
					})
					// fill in the lines between.
					.interpolate("linear"),

		// Add an svg element under the #graphClassSize tag
		gcs = d3.select("#graphClassSize")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
		
		// under the #graphFaculSize
		gfs = d3.select("#graphFaculSize")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + ", " + margin.top + ")"),
		
		// under the #graphCOS
		cos = d3.select("#graphCOS")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
		
		// and under the #graphTui
		tui = d3.select("#graphTui")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
	
		// convert all the data sets to key-val pairs
		data = toKV(window.avgclass),
		data2= toKV(window.faculty),
		data3= toKV(window.majors),
		data4= toKV(window.tuition);
	
	// CLASS SIZE GRAPH
	// set the axis ranges
	x.domain(d3.extent(data, function(d) {return d.key;}));
	y.domain([0, d3.max(data, function(d) {return d.value;})]);
	
	// add the graphline
	gcs.append("path")
		.attr("class", "line")
		.attr("d", valueline(data));
	
	// add the x-axis
	gcs.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis);
	
	// add the y-axis
	gcs.append("g")
		.attr("class", "y axis")
		.call(yAxis);
	
	// FACULTY SIZE GRAPH
	// need to adjust the valueline function to use new max y.
	valueline = d3.svg.line()
		.x(function(d) {return scale(d.key, 1865, 1935, 0, width);})
		.y(function(d) {return height - scale(d.value, 0, d3.max(data2, function(d) {return d.value;}), 0, height);})
		.interpolate("linear");
	
	// The rest here follows as above
	x.domain(d3.extent(data2, function(d) {return d.key;}));
	y.domain([0, d3.max(data2, function(d) {return d.value;})]);
	
	gfs.append("path")
		.attr("class", "line")
		.attr("d", valueline(data2));
	
	gfs.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis);
	
	gfs.append("g")
		.attr("class", "y axis")
		.call(yAxis);
	
	
	// COURSES OF STUDY
	valueline = d3.svg.line()
		.x(function(d) {return scale(d.key, 1865, 1935, 0, width);})
		.y(function(d) {return height - scale(d.value, 0, d3.max(data3, function(d) {return d.value;}), 0, height);})
		.interpolate("linear");
	
	x.domain(d3.extent(data3, function(d) {return d.key;}));
	y.domain([0, d3.max(data3, function(d) {return d.value;})]);
	
	cos.append("path")
		.attr("class", "line")
		.attr("d", valueline(data3));
	
	cos.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis);
	
	cos.append("g")
		.attr("class", "y axis")
		.call(yAxis);
	
	// TUITION
	// Note that for this graph, we divide the y values
	// by 100 for display on the graph.
	valueline = d3.svg.line()
		.x(function(d) {return scale(d.key, 1865, 1935, 0, width);})
		.y(function(d) {return height - scale(d.value / 100, 0, d3.max(data4, function(d) {return d.value / 100;}), 0, height);})
		.interpolate("linear");
	
	x.domain(d3.extent(data4, function(d) {return d.key;}));
	y.domain([0, d3.max(data4, function(d) {return d.value / 100;})]);
	
	tui.append("path")
		.attr("class", "line")
		.attr("d", valueline(data4));
	
	tui.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis);
	
	tui.append("g")
		.attr("class", "y axis")
		.call(yAxis);
}

window.onload = function () {
	d3Do();
	
	$("div.content, header")
		.css("-webkit-animation-name", "fadein")
		.css("-moz-animation-name", "fadein")
		.css("-o-animation-name", "fadein")
		.css("animation-name", "fadein")
		.css("visibility", "visible");
};
window.onresize = d3Do;