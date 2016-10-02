app.directive('validDate',
['StockService', 'DateService', 'TradeService',
function(StockService, DateService, TradeService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watchGroup(
        ['trade.formData.date',
        'trade.formData.symbol',
        'trade.formData.type'], function (newValues) {
          var tradeType = newValues[2];
          var date = newValues[0];
          if (tradeType === 'buy') {
            var inRange = _.includes(
              StockService.getDates(),
              DateService.stringifyDate(date)
            );
            // Time travel problem. Shouldn't be able to buy stock at date,
            // then buy stock at earlier date for that symbol.
            var latestStock = TradeService.getLatestStock(newValues[1]);
            // Need to convert date objects to ints for comparison.
            var afterLatest = +date >= +latestStock;
            var validity = latestStock ? (inRange && afterLatest) : inRange;
            ctrl.$setValidity('validDate', validity);
          } else if (tradeType === 'sell') {
            var ownedDates = Object.keys(TradeService.getOwnedStocks());
            if (_.includes(ownedDates,date.toString())) {
              ctrl.$setValidity('validDate', true);
            }
          }
        }
      );

      // ctrl.$validators.date = function(modelValue, viewValue) {
      //   var modelDate = modelValue;
      //   var symbol = scope.trade.formData.symbol;
      //
      //   if (modelDate) {
      //     modelDate = DateService.stringifyDate(modelValue);
      //   }
      //
      //   var inRange = _.includes(StockService.getDates(), modelDate);
      //   // Time travel problem. Shouldn't be able to buy stock at date,
      //   // then buy stock at earlier date for that symbol.
      //   var latestStock = TradeService.getLatestStock(symbol);
      //
      //   var afterLatest = modelValue >= latestStock;
      //
      //
      //   return latestStock ? (inRange && afterLatest) : inRange;
      // };
    }
  };

}]);
