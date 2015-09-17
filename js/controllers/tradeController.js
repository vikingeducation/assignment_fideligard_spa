app.controller("tradeCtrl", ['$scope', '$stateParams', 'selectedDate', 
  function($scope, $stateParams, selectedDate){
  $scope.tradeData = {};
  $scope.tradeData.symbol = $stateParams.symbol;
  $scope.tradeData.date = selectedDate.getDate;
}]);
