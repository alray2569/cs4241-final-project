var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = [
		1865, 1875, 1885, 1895, 1905, 1915, 1925, 1935, 1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015
	];
	
	$scope.majors = window.majors;
	$scope.avgclass = window.avgclass;
	$scope.faculty = window.faculty;
	$scope.tuition = window.tuition;
	
	$scope.year = $scope.years[0];
	
	$scope.goto = function (year) {
		$scope.year = year;
		$scope.updateMap(year);
		$scope.updatePresPic(year);
	};
	
	$scope.updateMap = window.updateMap;
	$scope.updatePresPic = window.updatePresPic;
	
});