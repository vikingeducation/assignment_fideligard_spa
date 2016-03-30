fideligard.controller('TradeCtrl', ['$scope', '$stateParams', 'DatePickerService', 'TradeService', function($scope, $stateParams, DatePickerService, TradeService) {


  $scope.date = DatePickerService.date


  $scope.cashAvailable = 1000000;


  $scope.validOrder;


  $scope.symbol = $stateParams.symbol;
  $scope.transactionType = "BUY";
  $scope.quantity = 1;
  $scope.price = $stateParams.price;
  $scope.getTotalCost = function() {
    return TradeService.calculateCost($scope.price, $scope.quantity);
  };



  $scope.trade = {};



}]);