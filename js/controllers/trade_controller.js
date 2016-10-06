StockApp.controller("TradeCtrl", ['$scope', 'dateService', 'stockService', '$stateParams', '$timeout', 'portfolioService', 'transactionService', function($scope, dateService, stockService, $stateParams, $timeout, portfolioService, transactionService){

  $scope.selectedDate = dateService.selectedDate;

  $scope.makeTransaction = function(date, symbol, type, quantity, price){
    if($scope.validFields()){
      transactionService.createTransaction(date, symbol, type, quantity, price);

      portfolioService.makeTrade(type, quantity, price);
    }
    
  };

  

  $scope.validDate = function(){
    return dateService.validDate($scope.selectedDate);
  };
  
  //watch and set availableCash
  $scope.$watch(function(){
    return portfolioService.availableCash();
  }, function(newQuantity){
    $scope.availableCash = portfolioService.availableCash();
  });
  
  $scope.quantity = 100;
  $scope.symbol = $stateParams.symbol;
  $scope.price = parseInt($stateParams.price);

  $scope.cost = $scope.price * $scope.quantity;


  //update cost when quantity changes
  $scope.$watch(function(){
    return $scope.quantity;
  }, function(newQuantity){
    $scope.cost = $scope.price * newQuantity;
  });

  //update price, cost selectedDate when date changes
  //wait for stocks to load before updating
  var initializing = true;
  $scope.$watch(function(){
    if(initializing){
      $timeout(function(){ initializing = false; }, 3000);
    } else {
      return dateService.selectedDate;
    }
  }, function(newDate){
    $scope.selectedDate = newDate;
    $scope.price = parseInt(stockService.findSpecificDay($scope.symbol, newDate).Close);
    $scope.cost = $scope.price * $scope.quantity;
  });

  $scope.validFields = function(){
    if($scope.type === "BUY"){
        return $scope.availableCash > $scope.cost && $scope.validDate();
        
    } else if($scope.type === "SELL"){
      
      return portfolioService.sharesOf($scope.symbol) > $scope.quantity;

    } else {
      return false;
    }
    
  };


  

}]);