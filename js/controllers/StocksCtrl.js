fideligard.controller('StocksCtrl',
  ['$scope', 'dateService', 'stockAPI',
  function($scope, dateService, stockAPI) {


    ($scope.setDate = function(newDate) {
      $scope.currentDate = newDate;
      $scope.stocks = [stockAPI.getStocks($scope.currentDate)];
    })(dateService.currentDate);


    // service needs to be on $scope in order to be $watched
    $scope.date = dateService;
    $scope.$watch('date.currentDate', $scope.setDate );


  }]);