/* global d3: false */

function toKV(obj) {
	var kva = [], x, key;
	
	window.console.log(obj);
	
	for (x = 0; x < Object.keys(obj).length; ++x) {
		key = Object.keys(obj)[x];
		kva[x] = {key: key, value: obj[key]};
	}
	
	return kva;
}

function scale(value, inmin, inmax, outmin, outmax) {
	return (value - inmin) / (inmax - inmin) * (outmax - outmin) + outmin;
}

function d3Do () {
	var margin = {top: 10, bottom: 30, left: 40, right: 10},
		width = (window.innerWidth * 0.40) - 35,
		height = 300,

		x = d3.scale.linear().range([0, width]),
		y = d3.scale.linear().range([height, 0]),

		xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5),
		yAxis = d3.svg.axis().scale(y).orient("left").ticks(5),

		valueline = d3.svg.line()
					.x(function(d) {return scale(d.key, 1865, 2015, 0, width);})
					.y(function(d) {return height - d.value;})
					.interpolate("linear"),

		gcs = d3.select("#graphClassSize")
				.append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
	
		data = toKV(window.avgclass);
	
	x.domain(d3.extent(data, function(d) {return scale(d.key, 1865, 2015, 0, width);}));
	y.domain([0, d3.max(data, function(d) {return height - d.value;})]);
	
	console.log(data);
	console.log(valueline(data));
	
	gcs.append("path")
		.attr("class", "line")
		.attr("d", valueline(data));
	
	gcs.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis);
	
	gcs.append("g")
		.attr("class", "y axis")
		.call(yAxis);
}

window.onload = d3Do;