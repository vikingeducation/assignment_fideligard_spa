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
$scope.date = $stateParams.date;
$scope.validity = 'VALID';
$scope.balance = userService.getBalance;

$scope.cost = function(){
  return $scope.price * $scope.quantity;
};

$scope.styleValidity = function(){
  return $scope.validity === 'VALID' ? "green" : "red";
};

$scope.$watchGroup(['symbol', 'date'], function(newValues, oldValues){
    updateFormInfo(newValues, oldValues);
});

var updateFormInfo = function(newValues, oldValues){
  if (newValues[0] !== undefined){
    var symbol  = newValues[0].toUpperCase();
    var date    = newValues[1];

    // Check symbol match
    var companyData = stockDataService.getAllStockData()[symbol];

    // Check date match
    if (companyData){
      checkDateAndUpdateFormValues(companyData, date);
    }
  }
};

var checkDateAndUpdateFormValues = function(companyData, date){
  for(var i = 0; i < companyData.length; i++){
    if(companyData[i]['Date'] === date){
      $scope.symbol = companyData[i].Symbol;
      $scope.price = companyData[i].Open;
      $scope.date = date;
    }
  }
};

$scope.updatePortfolio = function(){
  if (userService.checkTransaction( $scope.cost(),
                                    $scope.symbol,
                                    $scope.quantity,
                                    $scope.transaction )){
    $scope.validity = 'VALID';
    userService.buyOrSellStock($scope.transaction, $scope.symbol, $scope.quantity, $scope.date, $scope.price);
  } else {
    $scope.validity = 'INVALID';
  }
};

}]);