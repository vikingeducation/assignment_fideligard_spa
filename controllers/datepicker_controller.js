fideligard.controller('DatePickerCtrl', ['$scope', function($scope) {

  // 2014-01-01: 1388563200000
  // 2014-12-31: 1420012800000

  // these are for the datepicker slider, which works in ms:
  $scope.date = 1388563200000;

  $scope.msToString = function(ms) {
    var d = new Date();
    d.setTime(ms);
    $scope.dateString = d;
  };

  // these are for the datepicker input box, which works in strings:
  $scope.dateString = '2014-01-01';

  $scope.stringToMs = function(string, formIsValid) {
    console.log(formIsValid)
    if (formIsValid) {
      var d = new Date(string);
      $scope.date = d.getTime();
    }
  };



}]);
