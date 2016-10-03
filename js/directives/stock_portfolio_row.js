app.directive('stockPortfolioRow',
['TradeService', 'DateService', 'PortfolioService',
  function(TradeService, DateService, PortfolioService) {

    return {
      restrict: 'A',
      templateUrl: 'js/directives/stock_portfolio_row.html',
      scope: {
        transaction: '=',
        id: '='
      },
      link: function(scope, elem, attrs) {
        scope.dateInfo = DateService.getDateInfo();
        scope.computizedInfo = PortfolioService.computize(
          {
            id: scope.id,
            stock: scope.transaction,
            symbol: scope.transaction.symbol,
            portfolio: TradeService.getTransactions(),
            endDate: Date.now()
          }
        );
        scope.oneDayAgo = function() {
          var prev = _.find(
            scope.computizedInfo.computized.previousTransactions,
            function(transaction) {
              if (transaction.transactionId === scope.transaction.id) {
                if (transaction.oneDayAgo) {
                  return transaction.oneDayAgo.symbol === scope.transaction.symbol;
                }
              }
            }
          );
          if (prev) {
            return _.subtract(
              scope.transaction.cost,
              prev.cost
            );
          }
        };
        scope.testing = function() {
          console.log(scope.computizedInfo.computized);
        };
      }
    };

}]);
// {a: 1, b: 3, c: 2}
// {1: {}, 2: {}, 3: {}}
