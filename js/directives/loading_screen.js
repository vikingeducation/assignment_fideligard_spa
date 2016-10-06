app.directive('loadingScreen', ['$http' ,function ($http) {
  return {
    restrict: 'A',
    templateUrl: 'js/directives/loading_screen.html',
    link: function (scope, elem, attrs) {
      scope.isLoading = function () {
          return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function (v) {
        if(v){
            elem.show();
        }else{
            elem.hide();
        }
      });
    }
  };
}]);
