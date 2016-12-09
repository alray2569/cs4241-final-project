var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = [
		1865, 1875, 1885, 1895, 1905, 1915, 1925, 1935, 1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015
	];
	
	$scope.avgclass = {
		1865: 10,
		1875: 20,
		1885: 30,
		1895: 40,
		1905: 50,
		1915: 60,
		1925: 70,
		1935: 80,
		1945: 90,
		1955: 100,
		1965: 110,
		1975: 120,
		1985: 130,
		1995: 140,
		2005: 150,
		2015: 1000
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