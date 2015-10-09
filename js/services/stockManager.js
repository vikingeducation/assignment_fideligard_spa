fideligard.factory('stockManager',
  ['stockAPI', 'stockCalculator',
  function(stockAPI, stockCalculator) {

  var stockManager = {};

  stockManager.stockList = [
    'AAPL',
    'BOOM',
    'FOX',
    'EMC',
    'GE',
    'EBAY',
    'YUM',
    'HAL',
    'MON',
    'BUD',
    'SAM',
    'LULU'
  ];


  stockManager.stockData = {};
  stockManager.needsRefresh = false;
  stockManager.fullyLoaded = false;


  stockManager.refreshed = function() {
    this.needsRefresh = false;
  }


  stockManager.init = function(datesMinMax) {
    this.stockList.forEach( function(symbol) {
      stockAPI.getStock(symbol, datesMinMax[0], datesMinMax[1]).
        then( stockManager.saveData , stockManager.logError )
    });
  };


  stockManager.saveData = function(response) {
    var data = response.data.query.results.quote;
    var sym = data[0].Symbol;
    stockManager.stockData[sym] = data;
    stockManager.loadingProgress();
  };


  stockManager.loadingProgress = function() {
    var numberLoaded = Object.keys(stockManager.stockData).length;
    var total = stockManager.stockList.length;
    console.log('Loaded ' + numberLoaded + ' of ' + total);
    stockManager.needsRefresh = true;

    if (numberLoaded === total) {
      stockManager.fullyLoaded = true;
    };
  };


  stockManager.logError = function(response) {
    console.log('api error!');
    console.log(response);
    console.log('end api error!')
  };


  stockManager.getByDate = function(date) {
    var data = this.stockData;
    var output = [];
    for (var symbol in data) {
      output.push( stockCalculator.generate(data[symbol], date) );
    };
    return output;
  };


  stockManager.getPrice = function(symbol, date) {
    var validSymbol = stockManager.stockList.indexOf(symbol) !== -1;
    if (stockManager.fullyLoaded && validSymbol) {
      return stockCalculator.generate(stockManager.stockData[symbol], date).price;
    } else {
      return null;
    };
  };


  return stockManager;

}]);