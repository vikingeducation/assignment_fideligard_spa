stocks.controller('TradeCtrl',
  [ '$scope' , 'stocksService', '$stateParams',
  function($scope, stocksService, $stateParams){

    console.log('trade controller initiated');

    // get transaction date
    $scope.dateObj = stocksService.dateObj;

    // get params from url
    // $scope.ticker = $stateParams.ticker
    // $scope.stock = stocksService.stockPrice($scope.ticker);



  }]);