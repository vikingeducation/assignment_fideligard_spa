app.directive('validType', ['TradeService', function(StockService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.type = function(modelValue, viewValue) {
        var owned = scope.trade.user.owned;
        var symbol = scope.trade.formData.symbol;
        var quant = scope.trade.formData.quantity;
        var price = scope.trade.formData.price;
        switch (viewValue) {
          case 'sell':
            // Validity needs to be checked everytime quantity changes,
            // eln though transaction type has already been selected.
            return owned[symbol] && owned[symbol].quantity >= quant;
          case 'buy':
            return (scope.trade.user.cashAvailable - scope.computeCost(quant, price)) >= 0;
          default:
            return true;
        }
      };
    }
  };

}]);
