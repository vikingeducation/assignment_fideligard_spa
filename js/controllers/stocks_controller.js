financialApp.controller('StocksCtrl', ['$scope', function($scope){

  console.log("hello");

  $scope.startDate = (new Date("1-2-2014")).getTime();
  $scope.endDate = (new Date("7-31-2014")).getTime();
  $scope.dateSelection = 0;

  $scope.convertDate = function(date){
    return (new Date(date));
  }

  $scope.currentDate = function() {
    var newDate = new Date();
    newDate.setDate($scope.startDate + $scope.dateSelection);
    return newDate;
  }

  $scope.dateRange = function() {
    return Math.floor(($scope.endDate - $scope.startDate)/(1000*60*60*24));
  }

}]);
