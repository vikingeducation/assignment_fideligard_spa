stocks.controller('stocksCtrl',
  [ '$scope' , 'stocksService', '$filter',
  function($scope, stocksService, $filter){

    console.log('controller initiated');

    $scope.symbols = stocksService.getSymbols();

    $scope.history = stocksService.getAllStockData();
    $scope.dateObj = stocksService.dateObj;

    $scope.lastSort = {};

    $scope.sortSelection = function(input){
      console.log('sorting');
      // debugger
      if (!input) return "";
      if (input != $scope.lastSort.type){
        $scope.lastSort = {type: input, order: '+'};
        return $scope.sortSelect = "+" + input;
      }
      else if ($scope.lastSort.order == '+'){
        $scope.lastSort.order = '-';
        return $scope.sortSelect = "-" + input;
      }
      else {
        $scope.lastSort.order = '+';
        return $scope.sortSelect = "+" + input;
      }
    };


  }]);