fideligard.controller('stockCtrl',
  ['$scope', 'stockService',
   function($scope, stockService) {
     console.log("gets here");
     $scope.hi = "hello";
     $scope.stockData = stockService.getStockData();
   }
]);
