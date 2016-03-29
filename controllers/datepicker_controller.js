fideligard.controller('DatePickerCtrl', ['$scope', function($scope) {

  // 2014-01-01: 1388563200000
  // thru 2014-12-31: 1420012800000
  // milliseconds per day: 86400000
  $scope.date = 1388563200000;

  

  $scope.dateString = function() {
    var d = new Date();
    d.setTime($scope.date)
    return d.toLocaleDateString(); // '2014-03-04'
  }

  // $scope.inputDate = $filter($scope.date)(Date.now(), 'yyyy-MM-dd');

  $scope.inputDate = function() {
    var d = new Date();
    return d.setTime($scope.date)
  }



}]);