fideligard.controller('MainCtrl',
  ['$scope', 'dateService', 'portfolio',
  function($scope, dateService, portfolio) {

    $scope.init = function() {
      //portfolio.buildUp(dateService.currentDate, 0);
      console.log('main init');
    };


    $scope.init();

  }]);