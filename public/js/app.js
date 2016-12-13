var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope, $http, $sce) {
	"use strict";

	// FUNCTION DEFINITIONS
	$scope.goto = function (year) {
		$scope.year = year;
		$scope.updateMap(year);
		$scope.updatePresPic(year);
	};
	
	$scope.updateMap = window.updateMap;
	$scope.updatePresPic = window.updatePresPic;
	
	$scope.getHtml = function (text) {
		return $sce.trustAsHtml(text);
	};
	
	// VARIABLE DEFINITIONS
	
	$scope.years = window.years;
	
	$scope.majors = window.majors;
	$scope.avgclass = window.avgclass;
	$scope.faculty = window.faculty;
	$scope.tuition = window.tuition;
	
	$scope.year = parseInt(window.location.hash.substr(1), 10);
	if ($scope.years.indexOf($scope.year) === -1) {
		$scope.year = $scope.years[0];
	}
	
	// STUFF TO DO ON STARTUP
	
	$http.get("text.json")
		.then(
			function success (response) {
				$scope.text = response.data;
				$scope.goto($scope.year);
			}, function failure (response) {
				window.console.log(response);
			}
		);
});