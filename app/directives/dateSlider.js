stocks.directive('dateSlider', [ '$timeout', function($timeout) {

  console.log('slider directive');

  function date_by_subtracting_days(date, days) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + days,
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
        );
  }

  var def = {
    restrict: 'E',
    scope: {
      currentDate: '='
    },
    templateUrl: 'app/directives/dateSlider.html',
    link : function(scope, element, attrs) {
      // scope.currentDate = new Date();
      scope.sliderValue = 0;
      scope.$watch('sliderValue', function(newValue) {
        scope.currentDate = date_by_subtracting_days(new Date(), +newValue);
      });
    }
  };
  return def;
}]);
