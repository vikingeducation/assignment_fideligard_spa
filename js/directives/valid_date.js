app.directive('validDate',
['StockService', 'DateService', 'TradeService',
function(StockService, DateService, TradeService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watchGroup(
        ['trade.formData.date', 'trade.formData.symbol'], function (newValues) {
          var date = newValues[0];
          if (date) {
            date = DateService.stringifyDate(newValues[0]);
          }
          var inRange = _.includes(StockService.getDates(), date);
          // Time travel problem. Shouldn't be able to buy stock at date,
          // then buy stock at earlier date for that symbol.
          var latestStock = TradeService.getLatestStock(newValues[1]);
          var afterLatest = date >= latestStock;
          var validity = latestStock ? (inRange && afterLatest) : inRange;

          console.log({
            date: date,
            inRange: inRange,
            latestStock: latestStock,
            afterLatest: afterLatest,
            validity: validity
          });
          ctrl.$setValidity('validDate', validity);
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
