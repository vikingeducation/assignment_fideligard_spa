app.directive('stockTicker', ['StockService', 'dateService'], function(StockService, dateService){

  return{
    restrict: 'A',
    templateUrl: '',
    scope: {
// stock symbol
// date object
    }
  }

})
