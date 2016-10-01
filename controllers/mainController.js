app.controller("mainCtrl",
  ['$scope', '$state', '$location',
  function($scope, $state, $location) {

  $scope.nameFilter = "";
  console.log('hello from mainCtrl');

  $scope.widgets = [

    {
      name: "portfolio",
      route: "normal.portfolio"
    },
    {
      name: "trade",
      route: "normal.trade"
    },
    {
      name: "transactions",
      route: "normal.transactions"
    }
  ];

  $scope.changeView = function(){
    console.log("selectedRoute: ", $scope.selectedView);
    $state.go($scope.selectedView.route); // path not hash
  
  }


}]);
