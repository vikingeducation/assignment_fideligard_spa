"use strict";
app.controller('DateCtrl', ["$scope", 'date', 'dateService', 'dates', function($scope, date, dateService, dates) {

  $scope.editing = false;
  $scope.selectedDate = date;
  $scope.dates = dates;

  $scope.setDate = function(day) {
    dateService.setDay(day);
  };

  $scope.changeDate = function(date){
    var stringDate = date.toISOString().substring(0,10);
    var dayOfYear = $scope.dates.indexOf(stringDate);
    if(dayOfYear >= 0){
  	 dateService.setDay(dayOfYear); 
     $scope.newDate = dayOfYear;
    }
  	$scope.editing = !$scope.editing;
  };
  //make it more obvious that you can click on the date to change it

}]);
