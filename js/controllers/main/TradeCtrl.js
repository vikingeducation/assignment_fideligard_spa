fideligard.controller('TradeCtrl',
  ['$scope', '$state', '$stateParams', 'dateService', 'bank', 'portfolio', 'stockManager', 'transactions',
  function($scope, $state, $stateParams, dateService, bank, portfolio, stockManager, transactions) {


    $scope.init = function() {
      $scope.selectedState = $state.current.name;

      $scope.bank = bank.availableCash;
      $scope.transaction = {
        symbol: $stateParams.symbol,
        type: 'BUY',
        quantity: 1,
        date: new Date( Number(dateService.currentDate) ),
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
      $scope.currentShares = portfolio.currentShares($scope.transaction.symbol);
      $scope.calcMaxQuantity();
    }


    $scope.processOrder = function(valid) {
      // log transaction in transactions
      transactions.create($scope.transaction);

      // adjust bank
      bank.payment($scope.transaction);

      // adjust portfolio
      portfolio.add($scope.transaction)

      // clear form? redirect?

      $scope.bank = bank.availableCash;
      $scope.currentShares = portfolio.currentShares($scope.transaction.symbol);
      $scope.calcMaxQuantity();
    };


    $scope.routeTo = function(state) {
      $state.go(state);
    };



    $scope.init();

}]);