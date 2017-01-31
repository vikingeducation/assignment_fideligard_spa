fideligard.controller('TradeCreatorCtrl',
  ['$scope', 'dateService', 'stockService', 'portfolioService',
    function($scope, dateService, stockService, portfolioService) {
      $scope.dateService = dateService;
      $scope.currentDate = dateService.currentDate;

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
      $scope.formSubmitHandler = function(buyOrSell) {
        console.log("buy/sell", buyOrSell);
        var dateString = dateService.currentDate.toDateString();
        portfolioService.newTrade($scope.symbol, $scope.quantity, dateString, buyOrSell);
      };

      $scope.$watch('dateService.currentDate.toDateString()', function() {
        $scope.symbolChangeHandler();
        $scope.quantityChangeHandler();
      });
    }
  ]
);
