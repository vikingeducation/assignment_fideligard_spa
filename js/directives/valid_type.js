app.directive('validType', ['TradeService', function(StockService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.type = function(modelValue, viewValue) {
        switch (modelValue) {
          case 'sell':
            var owned = scope.trade.user.owned;
            var symbol = scope.trade.formData.symbol;
            var sellQuant = scope.trade.formData.quantity;
            // Validity needs to be checked everytime quantity changes,
            // even though transaction type has already been selected.
            return owned[symbol] && owned[symbol].quantity >= sellQuant;
          case 'buy':
            return (scope.trade.user.cashAvailable - scope.computeCost()) >= 0;
          default:
            return true;
        }
      };
    }
  };

}]);
