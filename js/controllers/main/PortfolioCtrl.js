fideligard.controller('PortfolioCtrl',
  ['$scope', '$state', 'portfolio', 'dateService',
  function($scope, $state, portfolio, dateService) {


    $scope.init = function() {
      $scope.selectedState = $state.current.name;

      $scope.sort = "date";
      $scope.sortDescending = false;

      // can't start this at 0 every time we open Portfolio route
      // probably need one big controller to init everything across routes
      //portfolio.buildUp(dateService.currentDate, 0);
      $scope.portfolio = portfolio.present();

      // service needs to be on $scope in order to be $watched
      $scope.date = dateService;
      $scope.$watch('date.currentDate', $scope.setDate );
    };


    // need to figure out how to render in table


    $scope.setDate = function(newDate, oldDate) {
      //var prior = dateService.priorDate;
      $scope.currentDate = newDate;
      //if (newDate > prior) {
      //portfolio.reset();
      portfolio.buildUp(newDate, 0);
      //} else {
      //  portfolio.buildDown(prior, newDate);
      //};
      //console.log(new Date(newDate) + ", " + new Date(prior));
      $scope.portfolio = portfolio.present();
      console.log($scope.portfolio);
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