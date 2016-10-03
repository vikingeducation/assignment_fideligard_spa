StockApp.controller("DatePickerCtrl", ['$scope', 'dateService', function($scope, dateService){

  $scope.startDate = dateService.startDate;

  $scope.endDate = dateService.endDate;
  
  

  
  $scope.dateRange = dateService.range();

  $scope.selectedDateIndex = "0";
  $scope.selectedDate = $scope.dateRange[$scope.selectedDateIndex];
  //dateService.selectedDate = $scope.selectedDate;
  $scope.updateSelected = function(index){
    $scope.selectedDate = $scope.dateRange[index];
    dateService.selectedDate = $scope.selectedDate
  }

}]);