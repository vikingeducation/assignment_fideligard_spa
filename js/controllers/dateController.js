fideligard.controller('dateCtrl',
  ['$scope',
   function($scope) {
     $scope.startDateMs = 1420070400; // Jan 1, 2015 UTC
     $scope.endDateMs = 1451520000; // Dec 31, 2015 UTC
     $scope.date = { date: $scope.startDateMs };
   }
]);
