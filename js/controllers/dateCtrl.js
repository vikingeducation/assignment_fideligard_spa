fideligard.controller("dateCtrl", ['$scope', 'date', function($scope, date){
  $scope.dateDiff = -1;
  $scope.dateOutput = date.getDateStr(date.getDate());

  $scope.getDate = function(){
    return date.getDate();
  };

  $scope.updateDate = function(dateDiff){
    date.setDate(dateDiff);
    $scope.dateOutput = date.getDateStr(date.getDate());
  };

  var dayDiff = function(dateInput){
    var msDiff = date.yesterday() - dateInput;
    var secDiff = msDiff/1000;
    var minDiff = secDiff/60;
    var hourDiff = minDiff/60;
    var dayDiff = hourDiff/24;
    return dayDiff
  }
  //
  $scope.$watch(date.getDate, function(newDate){
    if (newDate) {
      $scope.dateOutput = date.getDateStr(newDate);
      $scope.dateDiff = -Math.ceil(dayDiff(newDate))

    }
  })
}]);
