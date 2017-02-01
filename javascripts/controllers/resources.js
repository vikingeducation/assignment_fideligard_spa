fideligard.controller('ResourceCtrl',
  ['$scope', 'dateService', 'portfolioService',
    function($scope, dateService, portfolioService) {
      $scope.dateService = dateService;
      $scope.$watch('dateService.currentDate.toDateString()', function() {
        $scope.dateString = dateService.currentDate.toDateString();
        $scope.resources = portfolioService.resources[$scope.dateString];
      });

    }
  ]
);
