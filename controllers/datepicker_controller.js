fideligard.controller('DatePickerCtrl', ['$scope', 'DatePickerService', function($scope, DatePickerService) {


  $scope.date = DatePickerService.date;

  $scope.msToString = function(ms) {
    var d = new Date();
    d.setTime(ms);
    $scope.dateString = d;
    DatePickerService.dateString = $scope.dateString;
    DatePickerService.date = $scope.date;
    // console.log("dateString in service: " + DatePickerService.dateString)
  };



  $scope.dateString = DatePickerService.dateString;

  $scope.stringToMs = function(string, formIsValid) {
    if (formIsValid) {
      var d = new Date(string);
      $scope.date = d.getTime();
      DatePickerService.date = $scope.date;
      DatePickerService.dateString = $scope.dateString;
      // console.log("date in service: " + DatePickerService.date)
    }
  };



}]);
