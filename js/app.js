var simulator = angular.module( 'simulator', ['ui.router', 'ui.bootstrap'] );

simulator.config( function($stateProvider, $urlRouterProvider ){

  $urlRouterProvider.otherwise('/portfolio');

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      views: {
        'date': {
          templateUrl: 'js/templates/_date.html',
          controller: 'DateCtrl'
        },
        'stocks': {
          templateUrl: 'js/templates/_stocks.html'
        },
        'main': {
          templateUrl: 'js/templates/_mainWrapper.html'
        }
      }
    })

    .state('main.portfolio', {
      url: '/portfolio',
      templateUrl: 'js/templates/main/_portfolio.html'
    });

});