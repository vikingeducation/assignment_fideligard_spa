simulator.controller('DateCtrl', ['$scope', 'dateHelper', 
  function($scope, dateHelper){

  $scope.startDate = new Date('1/1/2015');
  $scope.endDate = new Date('12/31/2015');
  $scope.selectedDate = new Date('1/1/2015');
  $scope.showInput = true;

  $scope.rangeMax = dateHelper.diffInDays($scope.startDate, $scope.endDate);

  $scope.$watch('selectedDate', function(newVal){
    $scope.rangeVal = dateHelper.diffInDays($scope.startDate, $scope.selectedDate);
  });

  $scope.$watch('rangeVal', function(newVal){
    $scope.selectedDate = dateHelper.addDays($scope.startDate, $scope.rangeVal);
  });
}]);