fideligard.controller('StockCtrl',
  ['$scope', 'dateService', 'stockService',
    function($scope, dateService, stockService) {

      $scope.currentDate = dateService.currentDate;
      $scope.stocks = stockService.stocks;

    }
  ]
);
