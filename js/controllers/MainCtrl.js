fideligard.controller('MainCtrl',
  ['$scope', 'stockManager', 'dateService',
  function($scope, stockManager, dateService) {


    $scope.init = function() {
      console.log('main init');

      // ajax calls
      // wrap this in a promise to trigger start?
      stockManager.init(dateService.getMinMaxDateText(-40, 0));

      // $scope.start();
    };


    $scope.start = function() {
      console.log('start');
      // stockManager.init()

      // do I need these?
      // DatePickerCtrl.init()
      // StocksCtrl.init()
      // TradeCtrl.init()
      // TransactionsCtrl.init()
      // PortfolioCtrl.init()
    }


    //$scope.init();

  }]);