var datepicker = angular.module('datepicker', ['ngMaterial'])


datepicker.controller('DatePickerCtrl', ['$scope', function($scope) {

  $scope.color = { blue: Math.floor(Math.random() * 255) }

}]);