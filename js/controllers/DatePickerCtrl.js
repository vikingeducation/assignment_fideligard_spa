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
    $scope.dateInput = false;

    $scope.updateLabel = function() {
      $scope.currentDateText = $filter('date')($scope.currentDate, "M/d/yyyy")
      var label = angular.element(document.querySelector('.datepicker-label'));
      $scope.rangePercent = ($scope.currentDate - $scope.minDate)/($scope.maxDate - $scope.minDate);
      label.css('margin-left', $scope.rangePercent*100 + '%');
    }

    $scope.inputDate = function() {
      // create text input
      // focus that input
      $scope.dateInput = true;
      var inputField = angular.element(document.querySelector('#datepicker-input'));
      inputField.css('left', $scope.rangePercent*100 + '%').css('top', 0)
      /*
      var label = angular.element(document.querySelector('.datepicker-label'));
      var newInput = angular.element("<input type=text id='datepicker-input' ng-model='currentDate'>")
      label.append(newInput);
      newInput.css('left', $scope.labelX).css('top', $scope.labelY);
      */
    }

  }]);