var app = angular.module('Fildegard', ["ui.router"]);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('normal' , {
      url: '/',
      views: {
        "dateWidget@": {  
          templateUrl: "templates/normal/dateWidget.html"
        } 
      }
    })
});