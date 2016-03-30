simulator.controller('DateCtrl', ['$scope', 'dateHelper', 'workingDates', 
  function($scope, dateHelper, workingDates){

  $scope.dates = workingDates;
  $scope.showInput = true;

  $scope.rangeMax = dateHelper.diffInDays($scope.dates.start, $scope.dates.end);
  $scope.rangeVal = dateHelper.diffInDays($scope.dates.start, $scope.dates.selected);
  $scope.inputDate = $scope.dates.selected;

  $scope.$watch('rangeVal', function(newVal){
    $scope.dates.selected = dateHelper.addDays($scope.dates.start, $scope.rangeVal);
    $scope.inputDate = $scope.dates.selected;
  });

  $scope.tryUpdate = function(){
    if ($scope.form.$valid){
      $scope.dates.selected = $scope.inputDate;
      $scope.rangeVal = dateHelper.diffInDays($scope.dates.start, $scope.dates.selected);
      $scope.showInput = false;
    } 
  };
}]);