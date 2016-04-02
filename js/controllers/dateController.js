simulator.controller('DateCtrl', ['$scope', 'dateHelper', 'sharedData', 
  function($scope, dateHelper, sharedData){

  $scope.dates = sharedData.dates;
  $scope.showInput = true;

  $scope.rangeMax = dateHelper.diffInDays($scope.dates.start, $scope.dates.end);
  $scope.rangeVal = dateHelper.diffInDays($scope.dates.start, $scope.dates.selected);
  $scope.inputDate = $scope.dates.selected;

  $scope.$watch('rangeVal', function(newVal){
    $scope.dates.selected = dateHelper.addDays($scope.dates.start, $scope.rangeVal);
    $scope.inputDate = $scope.dates.selected;
  });

  // Model for input[date] is different from main dates.selected.
  // This is related to how Angular handles invalid models, which is 
  // to set them to undefined.  If dates.selected is undefined that
  // goofs up the display and functionality of the rest of the app.
  // So we use the function below to update dates.selected only if 
  // the inputDate is valid rather than using two-way binding. 

  $scope.tryUpdate = function(){
    if ($scope.form.$valid){
      $scope.dates.selected = $scope.inputDate;
      $scope.rangeVal = dateHelper.diffInDays($scope.dates.start, $scope.dates.selected);
      $scope.showInput = false;
    } 
  };
}]);