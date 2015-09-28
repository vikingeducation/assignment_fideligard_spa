tradeApp.factory('portfolioService', [function(){

  var obj = {};

  var _portfolio = {}; // [ {date: {symbol: quantity, balance: num}}, {}, {}...]

  obj.updatePortfolio = function(symbol, quantity, date, balance){
    if ( _portfolio[symbol] ){
      _portfolio[symbol] += parseInt(quantity);
    } else {
      _portfolio[symbol] = parseInt(quantity);
    }
  };

  obj.getPortfolio = function(){
    return _portfolio;
  };

  return obj;

}]);