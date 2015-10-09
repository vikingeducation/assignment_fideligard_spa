fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockManager',
  function($scope, dateService, stockManager) {


    // hits API
    stockManager.init( dateService.getMinMaxDateText(-40, 0) );

    $scope.setDate = function(newDate) {
      $scope.currentDate = newDate;
      $scope.refreshStocks();
    };


    $scope.refreshStocks = function(needsRefresh) {
      if (needsRefresh) {
        $scope.stocks = stockManager.getByDate($scope.currentDate);
        stockManager.refreshed();
      };
    };


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );

    $scope.manager = stockManager;
    $scope.$watch('manager.needsRefresh', $scope.refreshStocks );

  }]);