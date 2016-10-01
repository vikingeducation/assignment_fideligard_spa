fideligard.directive('stockTicker', ['StockService'], function(StockService){

  return{
    restrict: 'AE',
    templateUrl: '/app/templates/stock_template',
    scope: {
      stock: '=',
      stockData: '='
    }
  }

})
