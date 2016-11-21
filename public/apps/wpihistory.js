/* jshint browser: true, jquery: true */
/* global angular */

var app = new angular.module("WPIHistory", []);

app.controller("controller", function ($scope) {
	"use strict";
	
	$scope.years = [
		1865, 1875, 1885, 1895, 1905, 1915, 1925, 1935, 1945, 1955, 1965, 1975, 1985, 1995, 2005, 2015
	];
	
	$scope.year = $scope.years[0];
	
	$scope.goto = function (year) {
		$scope.year = year;
	};
	
});