var app = new angular.module("WPIHistory", []);

var buildings = [
	{name: "bh", year: 1865},
	{name: "wb", year: 1865},
	{name: "st", year: 1886},
	{name: "sl", year: 1889},
	{name: "sh", year: 1894},
	{name: "pc", year: 1902},
	{name: "ee", year: 1906},
	{name: "ag", year: 1916},
	{name: "hh", year: 1923},
	{name: "rh", year: 1926},
	{name: "ah", year: 1940},
	{name: "hl", year: 1941},
	{name: "kh", year: 1954},
	{name: "mh", year: 1958},
	{name: "oh", year: 1958},
	{name: "dh", year: 1963},
	{name: "gh", year: 1965},
	{name: "gl", year: 1967},
	{name: "ha", year: 1968},
	{name: "sx", year: 1969},
	{name: "ea", year: 1972},
	{name: "fa", year: 1972},
	{name: "fh", year: 1984},
	{name: "ih", year: 1989},
	{name: "fl", year: 1990},
	{name: "cc", year: 2001},
	{name: "bc", year: 2006},
	{name: "gp", year: 2007},
	{name: "eh", year: 2008},
	{name: "rc", year: 2012},
	{name: "fd", year: 2013},
	{name: "g2", year: 2013},
	{name: "ps", year: 1992}
];

function updateMap (newYear) {
	buildings.forEach(function (building) {
		console.log(building);
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

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = [
		1865, 1875, 1885, 1895, 1905, 1915, 1925, 1935, 1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015
	];
	
	$scope.year = $scope.years[0];
	
	$scope.goto = function (year) {
		$scope.year = year;
		$scope.updateMap(year);
	};
	
	$scope.updateMap = updateMap;
	
});