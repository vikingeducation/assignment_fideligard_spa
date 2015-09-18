fideligard.controller("tradeCtrl",['$scope', '$http', 'stocks', 'date',function($scope, $http, stocks, date){

$scope.viewDate = new Date()
var dateRef = date.getDate();

$scope.$watch(date.getDate, function(newDate, oldDate) {
  $scope.viewDate = newDate;

});

$scope.updateDate = function(){
  console.log("ng-change");
};



}]);
