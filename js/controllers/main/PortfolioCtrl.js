fideligard.controller('PortfolioCtrl',
  ['$scope', '$state',
  function($scope, $state) {


    $scope.init = function() {
      $scope.selectedState = $state.current.name;

      $scope.sort = "date";
      $scope.sortDescending = false;

      $scope.portfolio = [];
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


    $scope.routeTo = function(state) {
      $state.go(state);
    };


    $scope.init();

}]);