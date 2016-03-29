var fideligard = angular.module('fideligard', ['ui.router', 'ngMaterial']);











fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});