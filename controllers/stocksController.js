app.controller("stocksCtrl", 
  ['$scope', 'dateService','stockService', 
  function($scope, dateService,stockService) {
  
  stockService.getStocks();
}])