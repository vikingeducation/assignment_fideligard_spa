financialApp.controller('StocksCtrl', ['$scope', function($scope){

  console.log("hello");

  $scope.startDate = new Date("1-2-2014");
  $scope.endDate = new Date("7-31-2014");
  $scope.dateSelection = 0;

  $scope.convertDate = function(date){
    return (new Date(date));
  }

  $scope.currentDate = function() {
    var newDate = new Date( $scope.startDate.getTime() );
    newDate.setDate( newDate.getDate() + $scope.dateSelection );
    return newDate;
  }

  $scope.dateRange = function() {
    var newDate = Math.floor( ( $scope.endDate.getTime() - $scope.startDate.getTime() )/(1000*60*60*24));

    console.log($scope.dateSelection)
    console.log(newDate)

    return newDate;
  }

}]);
