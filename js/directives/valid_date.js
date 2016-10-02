app.directive('validDate',
['StockService', 'DateService', function(StockService, DateService) {

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.date = function(modelValue, viewValue) {
        var modelDate = modelValue;
        if (modelDate) {
          modelDate = DateService.stringifyDate(modelValue);
        }
        return _.includes(StockService.getDates(), modelDate);
      };
    }
  };

}]);
