fideligard.controller('stockCtrl',
  ['$scope', 'stockService', 'analyticService',
   function($scope, stockService, analyticService) {
     $scope.stockData = stockService.getHistoryData();
     $scope.daysAgo = function(company, data, properDate, stockData, daysAgo) {
       return analyticService.daysAgo(company, data, properDate, stockData, daysAgo);
     };
   }
]);
