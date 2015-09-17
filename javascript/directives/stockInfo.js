tradeApp.directive('stockInfo', function(){
  return{
    templateUrl: 'javascript/directives/stockInfo.js',
    restrict: "E",
    scope: true
    // scope: {stockData: '=',
    //         stock: '=',
    //         tradeSymbol: '&'}

  };
});