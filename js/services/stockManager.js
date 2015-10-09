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
    console.log('Loaded ' + Object.keys(stockManager.stockData).length + ' of ' + stockManager.stockList.length);
    stockManager.needsRefresh = true;
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
    /*
    return this.stockData.map( function(record) {
      return stockCalculator.generate(record, date);
    });*/
  };


  stockManager.getPrice = function(symbol, date) {
    //console.log(this.stockData);
  };


  return stockManager;

}]);