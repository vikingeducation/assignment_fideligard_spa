simulator.directive('dateSlider', ['dateHelper', function(dateHelper){
  return {
    templateUrl: 'js/directives/dateSlider.html',
    restict: 'A',
    controller: 'DateCtrl',
    link: function(scope, element, attr){
      scope.rangeMax = dateHelper.diffInDays(scope.startDate, scope.endDate);

      scope.$watch('selectedDate', function(newVal){
        scope.showInput = false;
        scope.rangeVal = dateHelper.diffInDays(scope.startDate, scope.selectedDate);
      });

      scope.$watch('rangeVal', function(newVal){
        scope.selectedDate = dateHelper.addDays(scope.startDate, scope.rangeVal);
      });

      scope.movePicker = function(){
        console.log('sip');
      };
    }
  };
}]);