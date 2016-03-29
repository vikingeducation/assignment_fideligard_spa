fideligard.controller('DatePickerCtrl', ['$scope', function($scope) {

  // 2014-01-01: 1388563200000
  // thru 2014-12-31: 1420012800000
  // milliseconds per day: 86400000
  $scope.date = 1388563200000;

  $scope.msToString = function(ms) {
    var d = new Date();
    d.setTime(ms);
    $scope.dateString = d;
  };


  $scope.dateString = '2014-01-01';

  $scope.stringToMs = function(string) {
    var d = new Date(string);
    $scope.date = d.getTime();
  };



}]);
