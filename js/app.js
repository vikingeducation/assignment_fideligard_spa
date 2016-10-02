var StockApp = angular.module("StockApp", ['ui.router']);

























StockApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);