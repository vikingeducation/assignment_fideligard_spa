app.factory('PortfolioService', ['StockService', '$http', '$q', function(StockService, $http, $q) {

  // portfolioDates is array of objects, each of which contains cash on that day, and portfolio on that day
  var _stocks = StockService.allStocks();
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
      _portfolio[date] = {};
      _portfolio[date].cash = {};
      _portfolio[date].cash.symbol = "CASH";
      _portfolio[date].cash.quantity = 100000;
      _portfolio[date].cash.costBasis = 100000;
      _portfolio[date].cash.currentPrice = 1;
      _portfolio[date].cash.oneDay = 0;
      _portfolio[date].cash.sevenDay = 0;
      _portfolio[date].cash.thirtyDay = 0;
      _.forEach(_stockSymbols, function(symbol){
        _portfolio[date][symbol] = {};
        _portfolio[date][symbol].symbol = symbol;
        _portfolio[date][symbol].quantity = 0;
        _portfolio[date][symbol].costBasis = 0;
        _portfolio[date][symbol].currentPrice = _stocks[date][symbol].price;
        _portfolio[date][symbol].oneDay = 0;
        _portfolio[date][symbol].sevenDay = 0;
        _portfolio[date][symbol].thirtyDay = 0;
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
        if (orderObj.buySell == 1) {
          if (_portfolio[_dates[i]].cash.quantity < (orderObj.price * orderObj.quantity)) {
            return false;
        }
        } else {
          var currentQuantity = _portfolio[orderObj.date][orderObj.symbol].quantity
          console.log(currentQuantity);
          if (_portfolio[_dates[i]][orderObj.symbol].quantity < currentQuantity - orderObj.quantity) {

            return false;
          }
        }
        _futureOrders.push(_dates[i]);
      }
    }
    _futureOrders.push(orderObj.date);
    if (orderObj.buySell === -1) {
      return checkSellValidity(orderObj);
    } else {
      return true;
    }
  };

  var _updatePortfolio = function(orderObj) {
    _.forEach(_futureOrders, function(date) {
      var portfolioObj = _portfolio[date];
      portfolioObj[orderObj.symbol].quantity += (orderObj.quantity * orderObj.buySell);
      portfolioObj[orderObj.symbol].costBasis += (orderObj.price * orderObj.quantity * orderObj.buySell);
      portfolioObj[orderObj.symbol].currentValue = (portfolioObj[orderObj.symbol].currentPrice * portfolioObj[orderObj.symbol].quantity);
      portfolioObj[orderObj.symbol].profitLoss = (portfolioObj[orderObj.symbol].currentValue - portfolioObj[orderObj.symbol].costBasis);
      portfolioObj.cash.quantity -= (orderObj.price * orderObj.quantity * orderObj.buySell);
      portfolioObj.cash.costBasis -= (orderObj.price * orderObj.quantity * orderObj.buySell);
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