simulator.controller('PortfolioCtrl', ['$scope', 'portfolioDates', 'portfolioLedger',
  function($scope, portfolioDates, portfolioLedger){

  $scope.dates = portfolioDates;

  $scope.sort = {
    orderBy: 'symbol',
    orderByReverse: false,
  };

  $scope.$watch('dates.selected', function(date){
    $scope.stocks = portfolioLedger.buildForDate(date);
  });

}]);