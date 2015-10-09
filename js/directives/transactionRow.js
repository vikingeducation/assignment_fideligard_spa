fideligard.directive('transactionRow', function() {
  return {
    templateUrl: 'js/directives/transactionRow.html',
    restrict: 'A',
    scope: {
      transaction: '='
    }
  };
});