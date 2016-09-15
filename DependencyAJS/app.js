// (function () {
// 	'use strict';

// 	var myapp = angular.module("DIApp", []);

// 	myapp.controller("DIController", ['$scope', '$filter', DIController]);

// 	function DIController ($scope, $filter ) {

// 		$scope.name = "Harry"

// 		$scope.upper = function () {
// 			var upCase = $filter('uppercase');
// 			$scope.name = upCase($scope.name);
// 		};

// 	}

// })();

!function(){"use strict";function r(r,e){r.name="Harry",r.upper=function(){var n=e("uppercase");r.name=n(r.name)}}var e=angular.module("DIApp",[]);e.controller("DIController",["$scope","$filter",r])}();