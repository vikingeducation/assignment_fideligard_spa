"use strict";
app.controller('PortfolioCtrl', ['$scope', 'accountService', 'date', 'dates', function($scope, accountService, date, dates){
	$scope.account = accountService.getBalance();
	//set a watch on the date and build portfolio whenever it changes
	//will need to pass in the new date.index
	accountService.buildPortfolio(date, dates);
}]);