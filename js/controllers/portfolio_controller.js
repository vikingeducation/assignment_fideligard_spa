angular.module('StockPortfolioSimulator').controller('PortfolioController', ['$scope', '$state', 'DatesService', 'PortfolioService', 'UserService', function($scope, $state, DatesService, PortfolioService, UserService){

	// ---------------------
	// Private
	// ---------------------

	// ---------------------
	// Public
	// ---------------------

  $scope.datesObject = DatesService.returnDatesObject();
	$scope.portfolio = PortfolioService.returnPortfolio();
	$scope.viewName = "portfolio";

  // Need this setTimeout here
  // as the ng-change which calls this function
  // runs beore the ng-model change seems to happen
  $scope.changeView = function(){
    setTimeout(function(){
      $state.go( $scope.viewName );
    })
  };

  $scope.returnProfitLossFromDaysAgo = function( daysAgo ){
    console.log( portfolio[$scope.datesObject.chosenDate].cashAtDate );
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
  		dateDaysAgo = DatesService.returnDateDaysAgo( daysAgo );
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