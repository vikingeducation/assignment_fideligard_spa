"use strict";
app.controller('DateCtrl', ["$scope", 'date', 'dateService', function($scope, date, dateService) {

  $scope.editing = false;
  $scope.selectedDate = date;

  $scope.setDate = function(day) {
    dateService.setDay(day);
  };

  $scope.changeDate = function(date){
  	dateService.setDate(date);
  	$scope.editing = !$scope.editing;
  };

  //in order for the slider to follow when the date is manually changed, need to turn the date back into a day value and add that to the slider
  //make it more obvious that you can click on the date to change it

}]);
