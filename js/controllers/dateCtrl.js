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
}]);
