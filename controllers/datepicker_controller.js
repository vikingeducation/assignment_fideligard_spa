fideligardApp.controller('datepickerCtrl', ['$scope', '$window', function($scope, $window){
  $scope.ourDate = 0;
  $scope.showInput = false;

  $($window.document).on('click', function(e){
    console.log(e);
  });

  $scope.setShowInput = function() {
    $scope.showInput = true;
  };
}]);
