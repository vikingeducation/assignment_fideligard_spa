fideligard.controller('tradeCtrl',
  [
    '$scope', '$stateParams', 'tradeService',
      function($scope, $stateParams, tradeService) {
        $scope.company = $stateParams.company;
        $scope.date = $stateParams.date;
        $scope.data = $stateParams.data;

        $scope.calculateCost = function(quantity) {
          return tradeService.calculateCost(quantity, $scope.data.close);
        };

        $scope.checkQuantity = function(quantity) {
          return tradeService.checkQuantity(quantity, $scope.data.volume);
        };
      }
  ]);
