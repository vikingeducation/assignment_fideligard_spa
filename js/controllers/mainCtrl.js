"use strict";
app.controller('MainCtrl', ["$scope", 'date', 'dateService', function($scope, date, dateService) {

  $scope.selectedDate = date;

  $scope.setDate = function(day) {
    console.log(day);
    dateService.setDate(day);
  };

}]);
