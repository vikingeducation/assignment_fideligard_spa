angular.module('StockPortfolioSimulator').controller('PortfolioController', ['$scope', '$state', function($scope, $state){

	// ---------------------
	// Private
	// ---------------------

	// ---------------------
	// Public
	// ---------------------

	$scope.a = "Marrowwww";

	$scope.viewName = "portfolio";

  // Need this setTimeout here
  // as the ng-change whichi calls this function
  // runs beore the ng-model change seems to happen
  $scope.changeView = function(){
    setTimeout(function(){
      $state.go( $scope.viewName );
    })
  };

}]);