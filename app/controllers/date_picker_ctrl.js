fideligard.controller('DatePickerCtrl', [
  '$scope', 'DateService', 'date',
  function($scope, DateService, date) {
    $scope.currentDate = date;

    $scope.setDate = function() {
      console.log('setting date')
      var date = parseInt($scope.currentDate)
      DateService.setDate(date);
    }

}]);
