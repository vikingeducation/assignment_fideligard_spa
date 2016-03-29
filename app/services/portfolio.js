stocks.factory('PortfolioService', ['$http', function($http) {

  var PortfolioService = {};
  var stocks = [];
  var testLength = 3;
  var testSymbols = ['MSFT', 'INTC', 'AAPL', 'ORCL', 'MMM', 
          'NFLX', 'NVDA', 'TSLA', 'BIDU', 'CSCO', 'EBAY', 'GOOG' ];
  var testPrice = [ 30.01, 18.22, 21.31];
  var testNames = ['Microsoft', 'Intel', 'Oracle'];
  var historicalData = {};

  PortfolioService.createStock = function(index) {
    var stock = {};
    stock.symbol = testSymbols[index];
    stock.name = testNames[index];
    stock.price = testPrice[index];
    // stock.description = testSymbols[index];
    // stock.id = currentStockID;
    // currentStockID++;
    stocks.push( stock );
  };

  PortfolioService.getStocks = function() {
    return stocks;
  };

  PortfolioService.getSymbols = function() {
    return testSymbols;
  };  

  PortfolioService.setupPortfolio = function() {
    if (stocks.length === 0) {
      for(var i = 0; i < testLength; i++) {
        PortfolioService.createStock(i);
      }
    }
  };

  PortfolioService.initializeHistoricalData = function() {
    testSymbols.forEach( function(sym){
      historicalData[sym] = {};
    });
    console.log('im here hist data');
   //  var loginString = "http://api.kibot.com/?action=login&user=guest&password=guest";
    
   //  var loginObj = {
   //    method: "GET",
   //    url: loginString
   //  };

   // $http(loginObj).then( function(response) {
   //      console.log('got login');
   //  });

   //  var urlString = "http://api.kibot.com/";
   //  var apiOptions = {
   //    "action": "history",
   //    "symbol": "MSFT",
   //    "interval": "daily",
   //    "period": "365"
   //  };

   //  var optionsString = "?";
   //  for (var key in apiOptions) {
   //    optionsString = optionsString + key + "=" + apiOptions[key] + "&";
   //  }


   //  console.log(optionsString);
   //  var queryString = urlString + optionsString;
   //  console.log(queryString);

   //  var queryString = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json"
   //  var queryObj = {
   //    method: "GET",
   //    url: queryString
   //  };

   // $http(queryObj)
   //  .then(function(response) {
   //      console.log('got response');
   //      console.log(response);
   //  });

    console.log(historicalData);
  };

  PortfolioService.getHistoricalData = function() {
    // if (stocks.length === 0) {
    //   for(var i = 0; i < testLength; i++) {
    //     PortfolioService.createStock(i);
    //   }
    // }
  };

  PortfolioService.setupPortfolio();

  return PortfolioService;
}]);

