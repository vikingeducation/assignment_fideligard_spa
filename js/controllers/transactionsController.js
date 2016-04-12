simulator.controller('TransactionsCtrl', ['$scope', '$stateParams', '$filter', 'portfolioLedger',
  function($scope, $stateParams, $filter, portfolioLedger){

  $scope.sort = { orderBy: 'date', orderByReverse: false };

  $scope.headers = [
    {label: 'Date',   setOrderBy: 'date'},
    {label: 'Symbol', setOrderBy: 'symbol'},
  ];

  $scope.transactions = portfolioLedger.getTransactions();
  $scope.new = $scope.transactions[$stateParams.newIdx];

  $scope.search = function(trs){
    // indexOf can be used on strings (yay javascript :)
    // so we take our search query and see if indexOf returns something
    // besides -1 (which means it didn't find anything)
    // for date we convert to trs date to string so we can use same method

    var fdate = $filter('date')(trs.date, 'shortDate');

    return (angular.lowercase(trs.symbol).indexOf(angular.lowercase($scope.trsFilter) || '') !== -1 ||
            angular.lowercase(trs.type).indexOf(angular.lowercase($scope.trsFilter) || '') !== -1 || 
            (fdate.indexOf($scope.trsFilter) || '') !== -1);
  };

}]);