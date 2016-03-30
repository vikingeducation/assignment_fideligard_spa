fideligard.controller('tradeCtrl',
  ['$scope',
  '$stateParams',
  'tradeService',
  'userService',
  'transactionService',
    function($scope,
      $stateParams,
      tradeService,
      userService,
      transactionService) {

        $scope.company = $stateParams.company;
        $scope.date = $stateParams.date;
        $scope.data = $stateParams.data;
        $scope.bankroll = userService.getBankroll();
        $scope.statusColor = 'red';

        $scope.calculateCost = function(quantity) {
          return tradeService.calculateCost(quantity, $scope.data.close);
        };

        $scope.checkQuantity = function(quantity) {
          return tradeService.checkQuantity(quantity, $scope.data.volume);
        };

        $scope.orderStatus = function() {
          if ($scope.tradeForm.$valid) {
            $scope.statusColor = 'green';
            return 'VALID';
          } else {
            $scope.statusColor = 'red';
            return 'INVALID';
          }
        };
    }
  ]);
