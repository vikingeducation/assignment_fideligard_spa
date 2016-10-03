app.controller('PortfolioCtrl',
['stocks', '$scope', 'StockService', 'DateService', 'dates', '$stateParams', 'PortfolioService', "$state",
function(stocks, $scope, StockService, DateService, dates, $stateParams, PortfolioService, $state) {

  $scope.dateInfo = DateService.getDateInfo();
  $scope.portfolio = PortfolioService.getPortfolio();




}]);