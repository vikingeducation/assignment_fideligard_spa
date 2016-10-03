app.directive('routeDropdown', [function () {

  return {
    restrict: 'E',
    templateUrl: 'js/directives/route_dropdown.html',
    scope: {
      currentView: '='
    },
    link: function(scope) {
    }
  };

}]);
