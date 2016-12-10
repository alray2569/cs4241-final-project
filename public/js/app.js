var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = [
		1865, 1875, 1885, 1895, 1905, 1915, 1925, 1935, 1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015
	];
	
	$scope.avgclass = {
		1865: 64  / 2,
		1875: 116 / 4,
		1885: 142 / 4,
		1895: 191 / 4,
		1905: 377 / 4,
		1915: 527 / 4,
		1925: 548 / 4,
		1935: 559 / 4
	};
	
	$scope.faculty = {
		1865: 5,
		1875: 9,
		1885: 12,
		1895: 14,
		1905: 17,
		1915: 30,
		1925: 54,
		1935: 75
	};
	
	$scope.tuition = {
		1865: 100,
		1875: 109,
		1885: 160,
		1895: 160,
		1905: 160,
		1915: 160,
		1925: 230,
		1935: 330
	};
	
	$scope.majors = {
		1865: 1,
		1875: 1,
		1885: 1,
		1895: 5,
		1905: 5,
		1915: 5,
		1925: 5,
		1935: 6
	};
	
	$scope.year = $scope.years[0];
	
	$scope.goto = function (year) {
		$scope.year = year;
		$scope.updateMap(year);
		$scope.updatePresPic(year);
	};
	
	$scope.updateMap = window.updateMap;
	$scope.updatePresPic = window.updatePresPic;
	
});