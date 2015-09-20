tradeApp.controller('tradeCtrl', ['$scope',
                                  'stockDataService',
                                  'userService',
                                  '$stateParams',
                                  function($scope,
                                  stockDataService,
                                  userService,
                                  $stateParams){

$scope.symbol = $stateParams.symbol;
$scope.price = $stateParams.price;
$scope.transaction = 'Buy';
$scope.quantity = 0;
$scope.date = '';
$scope.cost = function(){
  return $scope.price * $scope.quantity;
};

$scope.validity = 'VALID';

$scope.balance = userService.getBalance;

$scope.updatePortfolio = function(){

  if (userService.checkTransaction( $scope.cost(),
                                    $scope.symbol,
                                    $scope.quantity,
                                    $scope.transaction )){

    if ($scope.transaction === 'Buy'){
      userService.buyStock( $scope.symbol, $scope.quantity,
                            $scope.date,   $scope.price );
    } else {
      userService.sellStock( $scope.symbol, $scope.quantity,
                             $scope.date,   $scope.price );
    }

  } else {
    $scope.validity = 'INVALID';
  }
};


}]);

// Trade page populates with symbol, price, and date