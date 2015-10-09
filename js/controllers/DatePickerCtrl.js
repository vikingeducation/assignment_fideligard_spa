fideligard.controller('DatePickerCtrl',
  ['$scope', '$filter', 'dateService',
  function($scope, $filter, dateService) {

    // date numbers expressed in milliseconds
    $scope.minDate = dateService.minDate;
    $scope.maxDate = dateService.maxDate;
    $scope.step = dateService.step;
    $scope.currentDate = dateService.currentDate;


    $scope.setCurrentDateText = function() {
      $scope.currentDateText = $filter('date')($scope.currentDate, "M/d/yyyy")
    };


    $scope.updateDate = function() {
      dateService.setCurrentDate($scope.currentDate);
      $scope.updateLabel();
    }

    $scope.updateLabel = function() {
      $scope.setCurrentDateText();
      var rangePercent = ($scope.currentDate - $scope.minDate)/($scope.maxDate - $scope.minDate);
      var label = angular.element(document.querySelector('.datepicker-label'));
      label.css('margin-left', rangePercent*100 + '%');
    }


    $scope.unfocus = function() {
      document.dateTextForm.dateText.blur();
    };


    $scope.updateDateText = function() {
      var input = new Date(document.dateTextForm.dateText.value);

      if (input >= $scope.minDate && input <= $scope.maxDate) {
        $scope.currentDate = Number(new Date(input));
        $scope.updateDate();
      } else {
        console.log('value out of range');
        $scope.setCurrentDateText();
      };
    };

    ($scope.init = function() {
      $scope.setCurrentDateText();
    })();

  }]);