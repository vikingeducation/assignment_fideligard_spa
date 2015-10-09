fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockManager',
  function($scope, dateService, stockManager) {

    $scope.sort = "symbol";
    $scope.sortDescending = false;

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


    $scope.toggleSort = function(column) {
      if (column === $scope.sort) {
        $scope.sortDescending ^= true;
      } else {
        $scope.sort = column;
        if (column === 'symbol') {
          $scope.sortDescending = false;
        } else {
          $scope.sortDescending = true;
        }
      };
    };


    $scope.getIcon = function(column) {
      if ($scope.sort === column) {
        return $scope.sortDescending
          ? 'glyphicon-chevron-up'
          : 'glyphicon-chevron-down';
      };
    };


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );

    $scope.manager = stockManager;
    $scope.$watch('manager.needsRefresh', $scope.refreshStocks );

  }]);