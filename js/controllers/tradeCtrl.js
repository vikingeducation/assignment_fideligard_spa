"use strict";
app.controller('TradeCtrl', ['$scope', 'dates', '$stateParams', function($scope, dates, $stateParams){

	$scope.symbol = $stateParams.symbol || "AAPL";
	$scope.dates = dates;
}]);