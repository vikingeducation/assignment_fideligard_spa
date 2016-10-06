app.directive('validSymbol', ['StockService', function(StockService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.symbol = function(modelValue, viewValue) {
        return _.includes(StockService.getSymbols(), modelValue);
      };
    }
  };

}]);
