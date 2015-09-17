app.controller("MainCtrl", ['$scope', function($scope){
  $scope.convertedDate = function(){
    var startDate = new Date('1/1/2014');

    return new Date(startDate.setDate(startDate.getDate() + $scope.currentDate))
  }
}]);
