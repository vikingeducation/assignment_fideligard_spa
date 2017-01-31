fideligard.controller('TradeCreatorCtrl',
  ['$scope', 'dateService', 'stockService',
    function($scope, dateService, stockService) {
      $scope.dateService = dateService;

      $scope.symbolChangeHandler = function() {
        var date = dateService.currentDate.toDateString();
        $scope.currentStock = stockService.dates[date][$scope.symbol];
        if ($scope.currentStock) {
          $scope.stockPrice = $scope.currentStock.closing;
        }
      };
      $scope.quantityChangeHandler = function() {
        $scope.totalCost = $scope.stockPrice * $scope.quantity;
      };

      $scope.$watch('dateService.currentDate.toDateString()', function() {
        $scope.symbolChangeHandler();
        $scope.quantityChangeHandler();
      });
    }
  ]
);
