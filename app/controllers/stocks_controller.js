stocks.controller('StocksCtrl', ['$http', '$scope', '$stateParams', 'PortfolioService', function($http, $scope, $stateParams, PortfolioService) {


  $scope.symbolFilter = ''
  $scope.currentSymbols =  PortfolioService.getSymbols();

  $scope.currentDate = new Date();
  $scope.stocks = {};
  $scope.currentSymbols.forEach( function(sym){
    $scope.stocks[sym] = {};
    var symbolFileString = '/' + sym + '_data.json';
    $http.get(symbolFileString).then(function(response) {
      response.data.dataset.data.forEach(function(daily) {
        $scope.stocks[sym][daily[0]] = daily[4];
        $scope.stocks[sym].symbol = sym;
      });
    });
  });
}]);

stocks.filter('stockFilter', function() {
    return function( items, search ) {
      var returnedItems = {};
      for (var key in items) {
        if (key.substring(0, search.length) == search) {
          returnedItems[key] = items[key];
        }
      }
      return returnedItems
    };
});
