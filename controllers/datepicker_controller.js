fideligardApp.controller('datepickerCtrl', ['$scope', 'stocksService', "dateService", function($scope,stocksService, dateService){

  $scope.tempDate = 151;
  $scope.showInput = false;
  $scope.currentlySelectedDate = dateService.getSelectedDate() || {}

  $scope.$watch('tempDate', function(newValue) {
    $scope.selectedDate = $scope.translateDate(newValue);
  });

  $scope.translateDate = function(dateIndex) {
    var date = stocksService.getTimestampByDateIndex(dateIndex);  
    var d = new Date(date);
    d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );;
    return d.toDateString();
  }


  $scope.cancelDateChange = function() {
    $scope.showInput = false;
    $scope.tempDate = dateService.getSelectedDate().date;
  }

  $scope.submitDateChange = function(selectedDate) {
    var date = stocksService.getDateIndexFromDate(selectedDate);
    dateService.setSelectedDate({date: date})
    $scope.tempDate = dateService.getSelectedDate().date;
    $scope.showInput = false;
  }

  $scope.setShowInput = function() {
    $scope.showInput = true;
  }


}]);
