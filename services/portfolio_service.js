Fideligard.factory('portfolioService', ['yqlService', function(yqlService) {

  var _portfolio = {};
  var _cash = {amount: 100000};

  var updateCash = function(cost) {
    _cash.amount += cost;
  };

  var _getCompanyTotalStock = function(sym) {
    var stocks = 0;
    angular.forEach(_portfolio[sym], function(transaction){
      stocks += transaction["amt"];
    })
    return stocks;
  }

  var _infoByDate = function(sym, date) {
    var stock = 0;
    var cost = 0;
    angular.forEach(_portfolio[sym], function(transaction){
      if (transaction["date"] <= date) {
        stock += transaction["amt"];
        cost += transaction["cost"];
      }
    })
    return {sym: sym, stock: stock, cost: cost};
  };

  var _totalByDate = function(date, currentQuotes) {
    var info = portfolio.getStockByDate(date);
    var cost = 0;
    var value = 0;
    angular.forEach(info, function(company) {
      var currentValue = currentQuotes[company.sym].Close;
      cost += company.cost;
      value += (company.stock * currentValue);
    })
    return {cost: cost, value: value};
  };

  portfolio = {};

  portfolio.makeTrade = function(sym, amt, cost, date) {
    var transaction = {
      date: date,
      amt: amt,
      cost: cost
    };
    if (_portfolio[sym]) {
      _portfolio[sym].push(transaction);
      updateCash(cost);
    } else {
      _portfolio[sym] = [transaction];
      updateCash(cost);
    }
  };

  portfolio.validTrade = function(sym, amt, cost, type) {
    if (type === 'buy') {
      if (cost < _cash.amount && cost > 0) {
        return true;
      }
    } else if (type === 'sell') {
      if (_portfolio[sym] && _getCompanyTotalStock(sym) >= amt)
        return true;
    }
    return false;
  };

  portfolio.getStockByDate = function(date) {
    var info = [];
    angular.forEach(_portfolio, function(value, key) {
      var companyInfo = _infoByDate(key, date);
      info.push(companyInfo);
    })
    return info;
  };

  portfolio.totalStats = function(date, quotes) {
    var dates = [date,
                 yqlService.changeDate(date, -1),
                 yqlService.changeDate(date, -7),
                 yqlService.changeDate(date, -30)];
    var results = [];
    angular.forEach(dates, function(date){
      var currentQuotes = quotes[date];
      results.push(_totalByDate(date, currentQuotes));
    });
    return results;
  };

  portfolio.getPortfolio = function() {
    return _portfolio
  };

  portfolio.getCash = function() {
    return _cash;
  };

  return portfolio;

}])