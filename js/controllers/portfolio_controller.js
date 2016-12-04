angular.module('StockPortfolioSimulator').controller('PortfolioController', ['$scope', '$state', 'DatesService', 'PortfolioService', 'TransactionsService', 'UserService', function($scope, $state, DatesService, PortfolioService, TransactionsService, UserService){

	// ---------------------
	// Private
	// ---------------------

	// ---------------------
	// Public
	// ---------------------

  $scope.datesObject = DatesService.returnDatesObject();
	$scope.portfolio = PortfolioService.returnPortfolio();
  $scope.transactions = TransactionsService.getTransactions();
	$scope.viewName = "portfolio";

  // Need this setTimeout here
  // as the ng-change which calls this function
  // runs beore the ng-model change seems to happen
  $scope.changeView = function(){
    setTimeout(function(){
      $state.go( $scope.viewName );
    })
  };

  // "Cost Basis" basically represents all the money you've spent to buy a particular stock so far. It is typically calculated in a much more complicated way, but assume here that it represents the total money spent to purchase a stock minus the total money earned by selling it up until that point.
  $scope.returnCostBasis = function( symbol, date ){
    var totalSpentOnPurchases = 0;
    var totalMadeFromSales = 0;

    for( var i=0; i < $scope.transactions.length; i++){
      // Only bother if symbols match
      // Only bother if date matches or is before hand
      if( $scope.transactions[i].symbol === symbol ){
        if( $scope.transactions[i].transactionType === "buy" ){
          totalSpentOnPurchases += ($scope.transactions[i].price * $scope.transactions[i].quantity);
        } else {
          totalMadeFromSales += ($scope.transactions[i].price * $scope.transactions[i].quantity);
        };
      };
    };

    return totalSpentOnPurchases - totalMadeFromSales;
  };

  // Cash at chosen date - initial amount
  $scope.returnProfitLossFromDaysAgo = function( daysAgo ){
  	var cashAtChosenDate = PortfolioService.returnCashAtDate( $scope.datesObject.chosenDate );
  	var cashDaysAgo;
  	var dateDaysAgo;

  	// If user has specified days ago
  		// set the cashDaysAgo for that date
  		// ** FACTOR IN THE FACT THAT PORTFOLIO MAY HOLD NO DETAILS FROM A SET NUMBER OF DAYS AGO
  		// ** IN THAT CASE REVERT BACK TO STARTING AMOUNT
  	// else
  		// set the cashDaysAgo as the starting amount
  	if( daysAgo ){
  		dateDaysAgo = DatesService.returnDateDaysAgo( $scope.datesObject.chosenDate, daysAgo );
  		if ($scope.portfolio[dateDaysAgo]){
  			cashDaysAgo = $scope.portfolio[dateDaysAgo].cashAtDate;
  		} else {
  			cashDaysAgo = UserService.returnStartingAmount();
  		};
  	} else {
  	  cashDaysAgo = UserService.returnStartingAmount();
  	};

  	return cashAtChosenDate - cashDaysAgo;
  };

}]);