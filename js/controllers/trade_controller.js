StockApp.controller("TradeCtrl", ['$scope', 'dateService', 'stockService', '$stateParams', '$timeout', function($scope, dateService, stockService, $stateParams, $timeout){

  $scope.selectedDate = dateService.selectedDate;


  
  $scope.quantity = 100;
  $scope.symbol = $stateParams.symbol;
  $scope.price = $stateParams.price;

  $scope.cost = $scope.price * $scope.quantity;


  //update cost when quantity changes
  $scope.$watch(function(){
    return $scope.quantity;
  }, function(newQuantity){
    $scope.cost = $scope.price * newQuantity;
  });



  
  
  //update price, cost selectedDate when date changes
  var initializing = true;
  $scope.$watch(function(){
    if(initializing){
      $timeout(function(){ initializing = false; }, 10000);
    } else {
      return dateService.selectedDate;
    }
  }, function(newDate){
    $scope.selectedDate = newDate;
    $scope.price = stockService.findSpecificDay($scope.symbol, newDate).Close;
    $scope.cost = $scope.price * $scope.quantity;
  });

}]);