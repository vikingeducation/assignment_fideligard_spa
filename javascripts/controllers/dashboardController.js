fideligard.controller('DashCtrl', ['$scope', 'dateService', function dashCtrl($scope, dateService) {

  $scope.currentScalarDate = dateService.currentScalarDate;
  $scope.currentCalDate = dateService.currentCalDate;
  $scope.startDate = dateService.START_DATE;
  $scope.endDate = dateService.END_DATE;
  $scope.msInADay = dateService.MS_IN_A_DAY;
  $scope.scalarToCalendarDate = dateService.scalarToCalendarDate;

  $scope.chooseDate = false;

  $scope.dateClickHandler = function dateClickHandler() {
    // $scope.chooseDate = true;
  };

  $scope.dateChangeHandler = function dateChangeHandler() {
    $scope.chooseDate = false;
  };

}]);
