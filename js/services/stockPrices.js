simulator.factory('stockPrices', ['$filter', 'dateHelper', 'portfolioDates', 'yahooApi', 
  function($filter, dateHelper, portfolioDates, yahooApi){

  var _parsed = {};
  var _symbols = ["TWTR","YHOO","AAPL","GOOG","MSFT",
                  "ORCL","NXPI","AMZN","INTC"];

  var init = function(){
    // format our raw data into something that's easy to to view by date
    // and stock symbol, so we don't have to iterate the entire collection
    return yahooApi.getQuotes(_symbols, portfolioDates.buffer, portfolioDates.end)
      .then(function(response){    
        var raw = response.data.query.results.quote;

        raw.forEach(function(stockData){
          var date = stockData.Date;
          var symbol = stockData.Symbol;

          if (!_parsed[date]){
            _parsed[date] = {};
          }

          _parsed[date][symbol] = stockData;
        });

        _fill();
    });
  };

  var historical = function(selectedDate){
    // start historical data collection by making sure the day we're working
    // with has pricing data, otherwise return an empty object
    var results = [];

    _symbols.forEach(function(sym){
      var quoteForDate = price(sym, selectedDate);

      if ( quoteForDate ) {
        var selectedDatePrice = Number(quoteForDate.Close);
        result = _priceCompare(sym, selectedDate, selectedDatePrice);
        result.price = selectedDatePrice;
        result.symbol = sym;
        results.push(result);
      }
    });
    return results;
  };

  var price = function(symbol, date){
    // key into the parsed date for a certain date and stock symbol
    // will return null or undefined if date or stock symbol aren't found 
    var dateKey = $filter('date')(date, "yyyy-MM-dd");
    return _parsed[dateKey] ? _parsed[dateKey][symbol] : null;
  };

  var getSymbols = function(){
    return _symbols;
  };

  var _fill = function(){
    var range = dateHelper.datesInRange(
      portfolioDates.buffer, portfolioDates.end
    );

    // fill in any missing dates in the parsed data
    range.forEach(function(date){
      fdate = $filter('date')(date, "yyyy-MM-dd");
      if(!_parsed[fdate]){
        _parsed[fdate] = {};
      }
    });

    _symbols.forEach(function(sym){
      // iterate backwards through the range of dates, checking _parsed
      // if a missing price is found, skip back one day until we find the 
      // next available day and fill in pricing for missing day using that
      // data.  

      for(var i = range.length - 1; i>=0; i--){
        if ( !price(sym, range[i]) ){
          var checkDay = 1;
          while( checkDay <= 7 && !price(sym, range[i-checkDay]) ){
            checkDay++;
          }
          var fdate = $filter('date')(range[i], "yyyy-MM-dd");
          var fprice = price(sym, range[i-checkDay]);
          _parsed[fdate][sym] = fprice;
        }
      }
    });
  };
  
  var _priceCompare = function(symbol, compareDate, comparePrice){
    // setup a object to return with keys for each of the days we'll
    // check pricing on
    var result = {
      'day1':{  'dateOf': dateHelper.addDays(compareDate, -1) }, 
      'day7':{  'dateOf': dateHelper.addDays(compareDate, -7) }, 
      'day30':{ 'dateOf': dateHelper.addDays(compareDate, -30) }
    };

    var keys = Object.keys(result);
    keys.forEach(function(day, idx){
      var quote = price(symbol, result[day].dateOf);
      result[day].diff = quote ? comparePrice - Number(quote.Close) : null;
    });

    return result;
  };


  return {
    init: init,
    historical: historical,
    price: price,
    getSymbols: getSymbols,
  };

}]);