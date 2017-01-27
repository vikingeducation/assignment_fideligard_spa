fideligard.directive('dateSlider', function() {
  return {
    templateUrl: '/javascripts/directives/dateSlider.html',
    restrict: 'E',
    scope: {
      scalarDate: '=',
      startDate: '=',
      endDate: '=',
      scalarToCalendarDate: '&',
    }
  };
});
