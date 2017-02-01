fideligard.controller('TimeCtrl', ['$scope', '$q', 'dateService', function dashCtrl($scope, $q, dateService) {

  $scope.startDate = dateService.START_DATE;
  $scope.endDate = dateService.END_DATE;
  $scope.chooseDate = false;
  $scope.calendarToScalarDate = dateService.calendarToScalarDate;
  $scope.currentDate = dateService.currentDate;
  $scope.currentScalarDate = dateService.calendarToScalarDate($scope.currentDate);

  $scope.sliderChangeHandler = function() {
    $scope.currentDate = dateService.scalarToCalendarDate($scope.currentScalarDate);
    dateService.currentDate.setTime($scope.currentDate);
  };
  $scope.dateClickHandler = function dateClickHandler() {
    $scope.chooseDate = true;
  };
  $scope.dateChangeHandler = function dateChangeHandler() {
    $scope.currentScalarDate = dateService.calendarToScalarDate($scope.currentDate);
    $scope.chooseDate = false;
  };

}]);
