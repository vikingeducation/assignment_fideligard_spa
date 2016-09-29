"use strict";
app.controller('MainCtrl', ["$scope", function($scope) {

  $scope.selectedDate = 0;

  $scope.getDate = function(year, day) {
    console.log("Hello");
    var date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
  }

}]);
