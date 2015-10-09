fideligard.controller('TransactionsCtrl',
  ['$scope', '$state',
  function($scope, $state) {

    $scope.selectedState = $state.current.name;

    $scope.routeTo = function(state) {
      $state.go(state);
    };

}]);