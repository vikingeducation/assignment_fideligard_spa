Fideligard.controller('DateCtrl', ['$scope', 'dateService', '$rootScope',
  function($scope, dateService, $rootScope) {
    $scope.date = {
      value: 150,
      options: {
        floor: 0,
        ceil: 364,
        translate: function (value) {
          var startDate = new Date('2014/01/01')
          var transformed = startDate.setDate(startDate.getDate() + value);
          var dateFormat = new Date(transformed);
          return (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate() + '-' + dateFormat.getFullYear();
        }
      }
    };

    $scope.updateDate = function () {
      dateService.setDateFromNumDays($scope.date.value);
    };

    $scope.$on('date.updated', function () {
      $scope.date.value = dateService.getCurrentNum();
    });

    $scope.updateDate();
  }
]);


