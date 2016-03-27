simulator.directive('datePicker', [function(){
  return {
    templateUrl: 'js/directives/datePicker.html',
    restict: 'A',
    scope: {
      startDate: '=',
      endDate: '=',
      selectedDate: '=',
      showInput: '=',
      rangeVal: '='
    },
    link: function(scope, element, attr){
      scope.$watch('selectedDate', function(){
        scope.showInput = false;
      });

      scope.$watch('rangeVal', function(newVal){
        console.log(element)
      });
    }
  };
}]);