app.directive('stockTransactionRow',
[function() {
  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_transaction_row.html',
    scope: {
      transaction: '=',
    },
    link: function(scope) {
    }
  };
}]);
