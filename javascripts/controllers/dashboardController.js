fideligard.controller('DashCtrl', ['$scope', 'dateService', function dashCtrl($scope, dateService) {

  $scope.currentScalarDate = dateService.currentScalarDate;
  $scope.currentCalDate = dateService.currentCalDate;
  $scope.startDate = dateService.START_DATE;
  $scope.endDate = dateService.END_DATE;
  $scope.scalarToCalendarDate = dateService.scalarToCalendarDate;

  $scope.chooseDate = false;


  $scope.dateClickHandler = function dateClickHandler() {
    $scope.chooseDate = true;
  };

  $scope.dateChangeHandler = function dateChangeHandler() {

    $scope.chooseDate = false;
    
    dateService.updateCalendarDate($scope.currentCalDate);

    console.log('service cal date', dateService.currentCalDate);
    console.log('service scalar date', dateService.currentScalarDate);
  };
  
}]);
