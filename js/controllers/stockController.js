fideligard.controller('stockCtrl',
  ['$scope', 'stockService', 'analyticService',
   function($scope, stockService, analyticService) {
     $scope.stockData = stockService.getHistoryData();
     $scope.oneDayAgo = function(company, data, properDate, stockData) {
       analyticService.oneDayAgo(company, data, properDate, stockData);
     };
   }
]);
