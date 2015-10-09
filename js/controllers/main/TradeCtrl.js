fideligard.controller('TradeCtrl',
  ['$scope', 'dateService', 'bank', 'portfolio', 'stockManager',
  function($scope, dateService, bank, portfolio, stockManager) {


    $scope.init = function() {
      $scope.bank = bank.availableCash;

      $scope.transaction = {
        symbol: 'AAPL',
        type: 'BUY',
        quantity: 1,
        date: new Date(dateService.currentDate),
        price: null
      };

      $scope.currentShares = portfolio.currentShares($scope.transaction.symbol);
      $scope.calcMaxQuantity();

      // Listener to auto-populate data as it is loaded
      $scope.mgr = stockManager;
      $scope.$watch('mgr.stockData', function(newData) {
        $scope.transaction.price = stockManager.getPrice($scope.transaction.symbol, $scope.transaction.date);
        $scope.maxQuantity = $scope.calcMaxQuantity();
      }, true);
    }


    $scope.calcMaxQuantity = function() {
      if ($scope.transaction.type === 'BUY') {
        $scope.maxQuantity = $scope.calcMaxBuyQuantity();
      } else {
        $scope.maxQuantity = $scope.currentShares;
      };

      // set it on the DOM element b/c DOM loads before $scope
      angular.element(document.querySelector('.number-input')).attr('max', $scope.maxQuantity);
    };


    $scope.calcMaxBuyQuantity = function() {
      if ($scope.transaction.price) {
        return Math.floor($scope.bank / $scope.transaction.price);
      } else {
        return 1
      };
    }



    $scope.status = function(valid) {
      if(valid) {
        return "VALID"
      } else {
        return "INVALID"
      };
    }


    $scope.refresh = function() {
      $scope.transaction.price = stockManager.getPrice($scope.transaction.symbol, $scope.transaction.date);
      $scope.calcMaxQuantity();
    }


    $scope.processOrder = function(valid) {
      console.log('buy!');
    }



    $scope.init();

}]);