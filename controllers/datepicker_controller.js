fideligard.controller('DatePickerCtrl', ['$scope', function($scope) {

  // 2014-01-01: 1388563200000
  // thru 2014-12-31: 1420012800000
  // milliseconds per day: 86400000
  $scope.date = 1388563200000;



  $scope.msToString = function(ms) {
    var d = new Date();
    d.setTime(ms);
    // $scope.date = ms;
    // return d; // '2014-03-04'
    $scope.dateString = d;
  };


  $scope.dateString = '2014-01-01';


  $scope.stringToMs = function(string) {
    var d = new Date(string);
    $scope.date = d.getTime();
    // return d.getTime();
  };



  $scope.inputDate = function() {
    var d = new Date();
    return d.setTime($scope.date);
  };



}]);
