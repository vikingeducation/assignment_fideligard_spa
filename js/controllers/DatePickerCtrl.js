fideligard.controller('DatePickerCtrl',
  ['$scope', '$filter',
  function($scope, $filter) {

    // date numbers expressed in milliseconds
    $scope.minDate = Number(new Date('01/01/2014'));
    $scope.maxDate = Number(new Date('12/31/2014'));
    $scope.step = 1000*60*60*24;
    $scope.currentDate = $scope.minDate;
    $scope.currentDateText = $filter('date')($scope.currentDate, "M/d/yyyy")
    $scope.rangePercent = 0;


    $scope.updateLabel = function() {
      $scope.currentDateText = $filter('date')($scope.currentDate, "M/d/yyyy")
      var label = angular.element(document.querySelector('.datepicker-label'));
      $scope.rangePercent = ($scope.currentDate - $scope.minDate)/($scope.maxDate - $scope.minDate);
      label.css('margin-left', $scope.rangePercent*100 + '%');
    }


    $scope.unfocus = function() {
      document.dateTextForm.dateText.blur();
    }

    $scope.updateDateText = function() {
      var input = document.dateTextForm.dateText.value;
      // validate

      // update $scope.currentDate
      console.log($scope.currentDate);
      $scope.currentDate = Number(new Date(input));
      // update position?
      console.log($scope.currentDate);
    }

  }]);