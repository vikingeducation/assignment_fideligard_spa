simulator.controller('DateCtrl', ['$scope', 'dateHelper', 'workingDates', 
  function($scope, dateHelper, workingDates){

  $scope.dates = workingDates;
  $scope.showInput = true;

  $scope.rangeMax = dateHelper.diffInDays($scope.dates.start, $scope.dates.end);

  $scope.$watch('dates.selected', function(newVal){
    $scope.rangeVal = dateHelper.diffInDays($scope.dates.start, $scope.dates.selected);
  });

  $scope.$watch('rangeVal', function(newVal){
    $scope.dates.selected = dateHelper.addDays($scope.dates.start, $scope.rangeVal);
  });
}]);