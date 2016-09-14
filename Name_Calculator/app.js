(function () {
'use strict';

var myApp = angular.module("NameCalculator", []);

myApp.controller("NameCalculatorController", function ($scope) {
	$scope.name = "";
	$scope.totalvalue = 0;

	$scope.displayNumeric = function () {
		var totalNameValue = calculateNumericForString ($scope.name); //get the data from a function
		$scope.totalvalue = totalNameValue;
	}

	function calculateNumericForString (string) {
		var totalStringvalue  = 0;
		for (var i  = 0 ; i < string.length ; i++) {
			totalStringvalue += string.charCodeAt(i);
		}
		return totalStringvalue;
	}

});


})();