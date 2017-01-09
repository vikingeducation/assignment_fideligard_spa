var Fideligard = angular.module('Fideligard', ['ui.router', 'rzModule']);


// inject the services provided by ui-router
Fideligard.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          dateSlider: {
            templateUrl: 'js/templates/_date_slider.html',
            controller: 'DateCtrl',
          },
          stockPanel: {
            templateUrl: 'js/templates/_stock_panel.html',
          },
          portfolioPanel: {
            templateUrl: 'js/templates/_portfolio_panel.html',
          },
        }
      });
  }]);

Fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});