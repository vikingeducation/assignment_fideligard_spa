app.directive('stockPortfolioRow',
['DateService', 'PortfolioService',
  function(DateService, PortfolioService) {

    return {
      restrict: 'A',
      templateUrl: 'stock_portfolio_row.html',
      scope: true,
      link: function(scope, elem, attrs) {
        scope.dateInfo = DateService.getDateInfo();
        scope.computizedData = PortfolioService.computize(
          {
            stock: scope.transaction,
            symbol: scope.transaction.symbol,
            portfolio: scope.transaction,
            endDate: scope.dateInfo.currentDate,
            field: 'Close',
            dates: _.map(
              scope.portfolio,
              function(item) {
                return item.date;
              }
            )
          }
        );
      }
    };

}]);
