financialApp.controller('StocksCtrl', ['$scope', function($scope){

  console.log("hello");

  $scope.startDate = (new Date("1-2-2014")).getTime();
  $scope.endDate = (new Date("7-31-2014")).getTime();
  $scope.currentDate = (new Date("1-2-2014")).getTime();

  $scope.convertDate = function(date){
    return (new Date(date));
  }


var someDate = new Date();
var numberOfDaysToAdd = 6;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

}]);
