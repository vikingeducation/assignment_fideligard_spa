stocks.factory('stocksService', ['$http', function($http) {

  var obj = {};
  obj.dateObj = {};
  obj.dateObj.dateSelected = Date.parse("2014-07-18");

  var marketHistory = {};
  var history = {};
  history.list =[];
  obj.marketHistory = marketHistory;

  var symbols = ['GOOG', 'AAPL', 'FB', 'CVC', 'NFLX', 'AMZN', 'PFE', 'MSFT', 'C', 'F', 'NOK'].slice(0,2);


  //all market data when complete
  var getData = function(idx ,startDate, endDate) {
    return $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' +
      symbols[idx] + '%22%20and%20startDate%20=%20%22' +
      (startDate || '2013-12-01') +
      '%22%20and%20endDate%20=%20%22' +
      (endDate || '2014-12-31') +
      '%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
    .then(
      function(data) {
        addStockData(data, symbols[idx]);
        addPriceComparison(symbols[idx]);
      }, function (data) {
        console.log(data);
      });
  };


  // API call to get data
  for (var i = 0; i < symbols.length; i++) {
    getData(i);
  };

  var addStockData = function(data, symbol){
    var sym = symbol;
    marketHistory[sym] = data.data.query.results.quote;
  };

  var addPriceComparison = function(symbol){
    var stock = marketHistory[symbol];
    for (var i = 0; i < stock.length; i++){
      var day = stock[i];
      // // if don't want calculation for Dec. 2013 dates;
      // if ( day.Date <'2014-01-01') { continue; }
      day.dateNum = Date.parse(day.Date);
      // debugger;
      day.oneDay = obj.priceChangeNDays(symbol, i, 1);
      day.oneWeek = obj.priceChangeNDays(symbol, i, 5);
      day.oneMonth = obj.priceChangeNDays(symbol, i, 22);
    }
    // // instead of this which rewrites list
    // history.list = history.list.concat(stock);
    history.list.push.apply(history.list, stock);
    console.log (symbol + " done processing");
  };

  obj.priceChangeNDays = function(symbol, idx, days){
    if (idx + days >= marketHistory[symbol].length) return '-';
    return marketHistory[symbol][idx].Open - marketHistory[symbol][idx+days].Open;
  };

  obj.getAllStockData = function(){
    return history;
    // { symbol: , price, 1d, 7d, 30d}
  };

  obj.getSymbols = function(){
    return symbols;
  };

  // can be optimized later
  var getIndexInData = function(symbol){
    //starts from end of the yr moving farther into past
    // debugger;
    for (var i=0; i < marketHistory[symbol].length; i++){
      if (marketHistory[symbol][i].date == obj.dateObj.dateSelected){
        return i;
      }
      else if (marketHistory[symbol][i].date < obj.dateObj.dateSelected){
        return i-1;
      }
    }
    return 0; //if not found, edge case
  };

  obj.stockPrice = function(sym){
    debugger
    // var stockHistory = marketHistory[sym];
    var idx = getIndexInData(sym);
    return marketHistory[sym][idx].Open;
  };

  return obj;

}]);