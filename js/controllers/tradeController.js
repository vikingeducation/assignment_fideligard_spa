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

        //This is the current Trade parameters
        $scope.company = $stateParams.company;
        $scope.date = $stateParams.date;
        $scope.data = $stateParams.data;
        $scope.user = {bankroll: userService.getBankroll()};
        $scope.statusColor = 'red';
        $scope.button = {value: false};

        $scope.calculateCost = function(quantity) {
          return tradeService.calculateCost(quantity, $scope.data.close);
        };

        $scope.checkQuantity = function(quantity) {
          return tradeService.checkQuantity(quantity, $scope.data.volume);
        };

        $scope.orderStatus = function() {
          if ($scope.tradeForm.$valid) {
            $scope.statusColor = 'green';
            $scope.button.value = false;
            return 'VALID';
          } else {
            $scope.statusColor = 'red';
            $scope.button.value = true;
            return 'INVALID';
          }
        };

        $scope.addTransaction = function(isFormValid) {
          if (isFormValid) {
            transactionService.addTransaction($scope.date, $scope.company, "BUY", $scope.quantity, $scope.calculateCost($scope.quantity));
          }
        };
    }
  ]);
