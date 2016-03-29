fideligard.controller('stockCtrl',
  ['$scope', 'historyService',
   function($scope, historyService) {
     $scope.stockData = historyService.getHistoryData();
     console.log($scope.stockData);
   }
]);
