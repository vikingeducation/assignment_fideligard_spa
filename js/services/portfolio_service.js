app.factory('PortfolioService', ['StockService', '$http', '$q', function(StockService, $http, $q) {

  // portfolioDates is array of objects, each of which contains cash on that day, and portfolio on that day

  var _stockSymbols = StockService.getStockSymbols();
  var _dates = StockService.allDates();
  var _portfolio = {};
  var _transactions = {
    all: []
  };
  var _futureOrders = [];
  var _preventTrade = {};


  var _buildPortfolio = function(){
    _.forEach(_dates, function(date) {
      _portfolio[date] = {
        cash: 100000
      };
      _.forEach(_stockSymbols, function(symbol){
        _portfolio[date][symbol] = 0;
      });
    });
  };
  

  var getPortfolio = function(){
    if (_.isEmpty(_portfolio)) {
      _buildPortfolio();
    };
    return _portfolio;
  };

  var placeOrder = function(orderObj) {
    if (checkFutureOrders(orderObj) === false) {
      return false;
    } else {
      _updatePortfolio(orderObj);
      _transactions.all.push(orderObj);
      return true;
    }
  };

  var checkFutureOrders = function(orderObj) {
    _futureOrders = [];
    for (var i = 0; i < _dates.length; i++) {
      if (_dates[i] > orderObj.date) {
        console.log(_portfolio[_dates[i]].cash);
        if (_portfolio[_dates[i]].cash < (orderObj.price * orderObj.quantity)) {
          return false;
        }
        _futureOrders.push(_dates[i]);
      }
    }
    _futureOrders.push(orderObj.date);
    return true;
  }
  var _updatePortfolio = function(orderObj) {
    _.forEach(_futureOrders, function(date) {
      var portfolioObj = _portfolio[date];
      portfolioObj[orderObj.symbol] += (orderObj.quantity * orderObj.buySell);
      portfolioObj.cash -= (orderObj.price * orderObj.quantity * orderObj.buySell);
    });
  }

  var getTransactions = function(){
    return _transactions
  }





  // [
  //   {
  //     date: '2015-01-02',
  //     cash: 100000,
  //     iterate thorugh Stock symbols and set to 0
  //   }
  // ]

  return {
    getPortfolio: getPortfolio,
    placeOrder: placeOrder,
    getTransactions: getTransactions
  };


}]);