app.directive('stockPortfolioRow',
['TradeService', 'DateService', 'PortfolioService',
  function(TradeService, DateService, PortfolioService) {

    return {
      restrict: 'A',
      templateUrl: 'js/directives/stock_portfolio_row.html',
      scope: {
        transaction: '='
      },
      link: function(scope, elem, attrs) {
        scope.dateInfo = DateService.getDateInfo();
        scope.computizedData = PortfolioService.computize(
          {
            stock: scope.transaction,
            symbol: scope.transaction.symbol,
            portfolio: TradeService.getTransactions(),
            endDate: scope.dateInfo.currentDate,
            field: 'Close',
            dates: _.map(
              TradeService.getTransactions(),
              function(item) {
                return item.date;
              }
            )
          }
        );
        scope.testing = function() {
          console.log(scope.computizedData);
        };
      }
    };

}]);
