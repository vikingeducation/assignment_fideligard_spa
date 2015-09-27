tradeApp.controller('simCtrl',
  ['$scope', '$state',
  function($scope, $state){

$scope.panelOptions = [{panel: 'Trade',     path: 'index.simulator.trade'},
                       {panel: 'Transactions', path: 'index.simulator.transactions'},
                       {panel: 'Portfolio', path: 'index.simulator.portfolio'}];

$scope.panelSelectedPath = $scope.panelOptions.trade;

$scope.changePanel = function(panelPath){
  $state.go(panelPath);
};


}]);

