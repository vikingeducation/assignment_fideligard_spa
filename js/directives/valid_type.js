app.directive('validType', ['TradeService', function(StockService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.type = function(modelValue, viewValue) {
        switch (modelValue) {
          case 'sell':
            return !!(scope.trade.user.owned[scope.trade.formData.symbol]);
          case 'buy':
            return true;
            // return (scope.trade.user.cashAvailable - scope.computeCost()) >= 0;
          default:
            return true;
        }
      };
    }
  };

}]);
