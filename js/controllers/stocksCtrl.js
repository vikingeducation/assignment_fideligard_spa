"use strict";

app.controller('StocksCtrl', ["$scope", 'date', 'stocks', 'dates', function($scope, date, stocks, dates){

	$scope.selectedDate = date;
	$scope.stocks = stocks;
  $scope.dates = dates;

  $scope.sortBy = "symbol";
	$scope.sortTable = function(property){
		if(property == "symbol"){
			return "-symbol";
		}
	}; 

}]);
