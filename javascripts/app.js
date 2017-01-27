var fideligard = angular.module('fideligard', ['ui.router']);

fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('', {
      url: "/",
      views: {
        'dateSlider': {
          templateUrl: '/javascripts/templates/dateSlider.html',
          //controller: 
        }
      }
    })

});
