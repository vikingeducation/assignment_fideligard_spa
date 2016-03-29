fideligard.controller('stockCtrl',
  ['$scope', 'stockService',
   function($scope, stockService) {
     $scope.stockData = stockService.getStockData();
   }
]);
