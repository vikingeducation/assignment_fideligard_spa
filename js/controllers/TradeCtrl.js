stocks.controller('TradeCtrl',
  [ '$scope' , 'stocksService', 'portfolioService','$filter', '$stateParams',
  function($scope, stocksService, portfolioService, $filter, $stateParams){

    console.log('trade controller initiated');

    $scope.formData ={};

    // get transaction date
    $scope.dateObj = stocksService.dateObj;
    $scope.symbols = stocksService.getSymbols();

    // get portfolio data
    $scope.cashAmt = portfolioService.cashAvailable();

    // get params from url
    $scope.ticker = $stateParams.ticker;
    console.log('ticker: '+ $scope.ticker);
    // debugger;
    $scope.stock = stocksService.marketHistory[$scope.ticker];

    $scope.getStockPrice = function(){
      console.log('get stock price');
      // debugger
      $scope.stockPrice = stocksService.stockPrice($scope.ticker);
      return  stocksService.stockPrice($scope.ticker);
    };

    $scope.stockPrice = $scope.getStockPrice();

    $scope.updateInfo = function(){
      console.log('update stock price');
      $scope.getStockPrice();
    };

    var okToGo = function(){

    }
    // $filter('filter')($scope.stock, {dateNum: $scope.dateObj.dateSelected})// || {'Open': 1}

    $scope.orderStatus = function(){
      if(okToGo){
        return "Valid";
      } else {
        return "Invalid";
      }
    };

    // $scope.
    $scope.processData = function(){
      console.log('process data');
    }





  }]);