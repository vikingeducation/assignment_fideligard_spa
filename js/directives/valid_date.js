app.directive('validDate',
['StockService', 'DateService', 'TradeService',
function(StockService, DateService, TradeService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.date = function(modelValue, viewValue) {
        var modelDate = modelValue;

        if (modelDate) {
          modelDate = DateService.stringifyDate(modelValue);
        }

        console.log('Model Value');
        console.log(modelValue);

        var inRange = _.includes(StockService.getDates(), modelDate);
        // Time travel problem. Shouldn't be able to buy stock at date,
        // then buy stock at earlier date for that symbol.
        var latestStock = TradeService.getLatestStock(scope.trade.formData.symbol);

        console.log('Latest Stock');
        console.log(latestStock);

        var afterLatest = modelValue >= latestStock;

        return latestStock ? (inRange && afterLatest) : inRange;
      };
    }
  };

}]);
