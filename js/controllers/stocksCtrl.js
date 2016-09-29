"use strict";
app.controller('StocksCtrl', ["$scope", 'date', 'stocks', function($scope, date, stocks){

	$scope.selectedDate = date;
	$scope.stocks = stocks;

}]);