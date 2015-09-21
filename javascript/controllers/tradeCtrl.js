tradeApp.controller('tradeCtrl', ['$scope',
                                  'stockDataService',
                                  'userService',
                                  '$stateParams',
                                  function($scope,
                                  stockDataService,
                                  userService,
                                  $stateParams){

console.log($stateParams);

$scope.symbol = $stateParams.symbol;
$scope.price = $stateParams.price;
$scope.transaction = 'Buy';
$scope.quantity = 0;
$scope.date = $stateParams.date;
// $scope.dateFound = null;
// $scope.symbolFound = null;

$scope.cost = function(){
  return $scope.price * $scope.quantity;
};

$scope.validity = 'VALID';

$scope.balance = userService.getBalance;

$scope.$watchGroup(['symbol', 'date'], function(newValues, oldValues){
    updateFormInfo(newValues, oldValues);
  });

var updateFormInfo = function(newValues, oldValues){
  var symbol  = newValues[0].toUpperCase();
  var date    = newValues[1];
  // var symbolFound = false;
  // var dateFound = false;

  // Check symbol match
  var companyData = stockDataService.getAllStockData()[symbol];

  // Check date match
  if (companyData){
    // symbolFound = true;
  for(var i = 0; i < companyData.length; i++){
      if(companyData[i]['Date'] === date){
        $scope.symbol = companyData[i].Symbol;
        $scope.price = companyData[i].Open;
        $scope.date = date;
        // dateFound = true;
      }
    }
  }

  // if (!dateFound){
  //   $scope.dateFound = 'Date out of range';
  // } else {
  //   $scope.dateFound = null;
  // }

  // if (!symbolFound){
  //   $scope.symbolFound = 'Symbol not found';
  // } else {
  //   $scope.dateFound = null;
  // }

};


$scope.updatePortfolio = function(){

  if (userService.checkTransaction( $scope.cost(),
                                    $scope.symbol,
                                    $scope.quantity,
                                    $scope.transaction )){
    $scope.validity = 'VALID';
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