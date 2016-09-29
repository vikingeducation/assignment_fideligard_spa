"use strict";

app.controller('StocksCtrl', ["$scope", 'date', 'stocks', 'dates', function($scope, date, stocks, dates){

	$scope.selectedDate = date;
	$scope.stocks = stocks;
  $scope.dates = dates;

}]);
