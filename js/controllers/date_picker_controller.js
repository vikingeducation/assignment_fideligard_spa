StockApp.controller("DatePickerCtrl", ['$scope', function($scope){

  $scope.startDate = "6/01/2015";

  $scope.endDate = "12/31/2015";
  
  //set the date range
  var startDate = new Date($scope.startDate);
  var endDate = new Date($scope.endDate);
  var range = [];
  while(startDate < endDate){
    range.push(angular.copy(startDate));
    startDate = new Date(startDate.setDate(startDate.getDate() + 1))
  }
  range.push(endDate);

  range = range.map(function(date){
    date = date.toISOString();
    
    return date.slice(0, 10);
  })

  
  $scope.dateRange = range;
  $scope.selectedDateIndex = "0";
  $scope.selectedDate = $scope.dateRange[$scope.selectedDateIndex];
  $scope.updateSelected = function(index){
    $scope.selectedDate = $scope.dateRange[index];
  }

}]);