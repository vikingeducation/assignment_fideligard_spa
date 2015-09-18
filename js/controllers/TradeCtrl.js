stocks.controller('TradeCtrl',
  [ '$scope' , 'stocksService', 'portfolioService','$filter', '$stateParams',
  function($scope, stocksService, portfolioService, $filter, $stateParams){

    console.log('trade controller initiated');

    // get transaction date
    $scope.dateObj = stocksService.dateObj;
    $scope.symbols = stocksService.getSymbols();

    // get params from url
    $scope.ticker = $stateParams.ticker;
    console.log('ticker: '+ $scope.ticker);
    // debugger;
    $scope.stock = stocksService.marketHistory[$scope.ticker];
    $scope.stockPick = $filter('filter')($scope.stock, {dateNum: $scope.dateObj.dateSelected})// || {'Open': 1}

    $scope.formData ={};
    $scope.processData = function(){

    }





  }]);