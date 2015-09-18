stocks.controller('stocksCtrl',
  [ '$scope' , 'stocksService', '$filter',
  function($scope, stocksService, $filter){

    console.log('controller initiated');

    $scope.symbols = stocksService.getSymbols();

    $scope.history = stocksService.getAllStockData();
    $scope.dateObj = stocksService.dateObj;



    $scope.priceChangeNDays = function(input, stock){
      console.log('inside controller price change');
      console.log('date '+ $scope.dateSelected);
      return stocksService.priceChangeNDays(input, stock);
    };

  }]);