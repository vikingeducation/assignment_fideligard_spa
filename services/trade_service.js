fideligard.factory('TradeService', ['StocksService', function(StocksService) {

  var obj = {};


  obj.calculateCost = function(price, quantity) {
    return price * quantity;
  };






  return obj;

}]);