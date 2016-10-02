app.directive('validSale', ['TradeService', function(StockService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.type = function(modelValue, viewValue) {
        if (modelValue === 'sell') {
          return !!(scope.trade.user.owned[scope.trade.formData.symbol]);
        } else {
          return true;
        }
      };
    }
  };

}]);
