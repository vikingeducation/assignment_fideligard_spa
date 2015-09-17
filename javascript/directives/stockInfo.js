tradeApp.directive('stockInfo', function(){
  return{
    templateUrl: 'javascript/directives/stockInfo.js',
    restrict: "E",
    scope: {stockData: '='}

  };
});