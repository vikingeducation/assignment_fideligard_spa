app.controller("MainCtrl", ['$scope', 'selectedDate', function($scope, selectedDate){
  $scope.selectedDate = selectedDate.getDate;
  $scope.currentDate = "";
  $scope.$watch("currentDate", function(){
    selectedDate.setDate($scope.currentDate);
  })
}]);
