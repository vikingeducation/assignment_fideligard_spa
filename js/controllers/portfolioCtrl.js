"use strict";
app.controller('PortfolioCtrl', ['$scope', 'accountService', 'date', 'dates', 'dateService', function($scope, accountService, date, dates, dateService){
	$scope.account = accountService.getBalance();
	$scope.transactions = accountService.getTransactions();
	//set a watch on the date and build portfolio whenever it changes
	//will need to pass in the new date.index
	$scope.currentDate = dateService.getDate();
	accountService.buildPortfolio($scope.currentDate, dates);
	$scope.portfolio = accountService.getPortfolio();
	$scope.statistics = accountService.getPortfolioStats();
	$scope.$watch('currentDate.index', function(){
		accountService.buildPortfolio($scope.currentDate, dates);
	});
}]);