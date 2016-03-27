simulator.controller('DateCtrl', ['$scope', function($scope){
  $scope.startDate = new Date('1/1/2015');
  $scope.endDate = new Date('12/31/2015');
  $scope.selectedDate = new Date('4/1/2015'); 
}]);