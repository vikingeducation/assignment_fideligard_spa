fideligardApp.controller('datepickerCtrl', ['$scope', '$window', 'stocksService', function($scope, $window, stocksService){
  $scope.tempDate = 0;
  $scope.showInput = false;

  (function() {
    $scope.date = stocksService.getSelectedDate();
  })();

  $scope.anotherFunction = function () {
    if (e.target !== $("#date-slider")[0] && $scope.showInput) {
      $scope.showInput = false;
      console.log("setting show input to false");
    }
    console.log($scope);
    console.log(e.target);
    console.log($scope.showInput);
  };

  $scope.submitDateChange = function() {
    $scope.currentDate = $scope.tempDate;
    $scope.showInput = false;
  };

  $scope.cancelDateChange = function () {
    $scope.tempDate = $scope.currentDate;
    $scope.showInput = false;
  };

  $scope.setShowInput = function() {
    $scope.showInput = true;
    console.log("setting show input to tru")
  };
}]);
