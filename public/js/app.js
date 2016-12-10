var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = window.years;
	
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