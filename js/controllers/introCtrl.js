"use strict";
app.controller("IntroCtrl", ['$scope', 'mainService', function($scope, mainService){
	$scope.changeState = function(state){
			mainService.setState(state);
	};
}]);