app.directive('stockPortfolioRow',
['StockService', 'DateService',
  function(StockService, DateService) {

    return {
      restrict: 'A',
      templateUrl: 'stock_portfolio_row.html',
      scope: {
        transaction: '='
      },
      link: function(scope, elem, attrs) {
      }
    };

}]);
