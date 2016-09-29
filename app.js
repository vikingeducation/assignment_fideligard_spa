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
          templateUrl: "templates/normal/dateWidget.html",
          controller: "dateCtrl"
        } ,
        "stocksWidget@": {
          templateUrl: "templates/normal/dateWidget.html",
          controller: "stocksCtrl"
        }
      }
    })

    // .state('normal.trade', {

    // }
});

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});