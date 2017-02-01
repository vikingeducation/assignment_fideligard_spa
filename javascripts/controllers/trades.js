fideligard.controller('TradesCtrl',
  ['$scope', 'dateService', 'portfolioService',
    function($scope, dateService, portfolioService) {
      $scope.dateService = dateService;
      $scope.portfolioService = portfolioService;
      var update = function() {
        $scope.dateString = dateService.currentDate.toDateString();
        $scope.dateString = dateService.currentDate.toDateString();
        var tradeIds = portfolioService.trades.byDate[$scope.dateString];
        $scope.trades = [];
        for (var i = 0; i < tradeIds.length; i++) {
          $scope.trades.push(          portfolioService.trades.byId[tradeIds[i]]);
        }
      };
      $scope.$watch('dateService.currentDate.toDateString()', update);
      $scope.$watch('portfolioService.trades.byDate[dateString].length', update);
    }
  ]
);
