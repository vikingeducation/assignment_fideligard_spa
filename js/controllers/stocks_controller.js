financialApp.controller('StocksCtrl', ['$scope', 'dateService', function($scope, dateService){

  console.log("hello");

  $scope.startDate = dateService.getStartDate();
  $scope.endDate = dateService.getEndDate();
  $scope.dateSelection = 0;

  $scope.convertDate = function(date){
    dateService.convertDate(date);
  }

  $scope.currentDate = function() {
    var start = $scope.startDate.getTime();
    var selection = $scope.dateSelection * (1000*60*60*24);
    var newDate = new Date( start + selection );
    console.log(newDate);
    return newDate;
  };


  $scope.dateRange = function() {
    dateService.dateRange();
  }

}]);
