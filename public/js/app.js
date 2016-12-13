var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope, $http, $sce) {
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
	
	$http.get("text.json")
		.then(
			function success (response) {
				$scope.text = response.data;
			}, function failure (response) {
				window.console.log(response);
			}
		);
	
	
	$scope.getHtml = function (text) {
		return $sce.trustAsHtml(text);
	};
});