fideligard.factory('stockManager',
  ['stockAPI',
  function(stockAPI) {

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


  stockManager.stockData = [];


  stockManager.getStocks = function(startDate, endDate) {
    this.stockList.forEach( function(symbol) {
      stockAPI.getStock(symbol, startDate, endDate).
        then( stockManager.saveData , stockManager.logError )
    });
  };


  stockManager.saveData = function(response) {
    stockManager.stockData.push(response.data.query.results.quote);
  };


  stockManager.logError = function(response) {
    console.log('api error!');
    console.log(response);
    console.log('end api error!')
  };


  return stockManager;

}]);