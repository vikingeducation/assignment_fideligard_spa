app.controller("MainCtrl", ['$scope', 'selectedDate', function($scope, selectedDate){
  $scope.selectedDate = selectedDate.dates;
  $scope.currentDate = "";
  $scope.$watch("currentDate", function(){
    selectedDate.setDate($scope.currentDate);
  })
}]);
