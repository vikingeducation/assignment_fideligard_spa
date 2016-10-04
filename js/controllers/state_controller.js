StockApp.controller("StateCtrl", ['$scope', '$state', function($scope, $state){

  $scope.chooseState = function(){
    if($scope.state === "trade"){
      $state.go('main.trade');
    } else if($scope.state === "transaction") {
      $state.go('main.transactions')
    }
  }
}]);