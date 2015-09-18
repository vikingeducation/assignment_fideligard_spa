fideligard.factory('stocks',['$http', 'date', function($http, date){
  var retObj = {};

  var transpose = function(a) {
    if (!a) return
    return Object.keys(a[0]).map(
        function (c) { return a.map(function (r) { return r[c]; }); }
        );
  };

  retObj.symbols = ['FB', 'TWTR', 'LNKD', 'GOOG', 'AAPL', 'SNE', 'ARX', 'TPE', 'KRX']



  var results = [];

  var buildUrl = function(symbol){
    return "http://query.yahooapis.com/v1/public/yql?q= \
        select * from   yahoo.finance.historicaldata \
                 where  symbol    = '"+ symbol + "' \
                 and    startDate = '"+ date.getDateStr(date.oneYearAgo()) + "' \
                 and    endDate   = '"+ date.getDateStr(new Date()) + "' \
        &format=json \
        &diagnostics=true \
        &env=store://datatables.org/alltableswithkeys \
        &callback=";
  };

 retObj.ajaxRequest = function(){
    var promises = [];
    for (var i = 0; i < retObj.symbols.length; i++){
      var sym = retObj.symbols[i];
      var url = buildUrl(sym);
      promises.push($http.get(url));
    }
    return promises;
  };

  retObj.updateResults = function(newResults){
    results = newResults;
  };

  retObj.getData = function(dateStr){
    var data = [];
    for (var i = 0; i < results.length; i++){
      data.push($.grep(results[i], function(val){
        return val.Date == dateStr;
      }));
    }
    // flatens the data array
    if (data.length !== 0) {
      var array = data.reduce(function(a, b){
        return a.concat(b);
      });
    }
    // r
    if (array) return array; //
  };



  var formatDays = function(newDate){

    var array = [0, 1, 7, 30];
    var retArr = [];
    for (var i = 0; i < array.length; i++){
      var base = newDate;
      var num = array[i];
      var day = new Date(base.setDate(base.getDate() - num));
      if (day.getDay() === 0){
        day = new Date(day.setDate(day.getDate() - 2));
      } else if (day.getDay() == 6){
        day = new Date(day.setDate(day.getDate() - 1));
      }
      retArr.push(day);

    }

    return retArr;

  };

  retObj.comparisonDays = function(newDate){
    var arr = formatDays(new Date(newDate));

    var retArr = [];

    for (var i = 0; i < arr.length; i++) {
      var str = date.getDateStr(arr[i])
      retArr.push(retObj.getData(str));
    }
    return transpose(retArr);
  };

  return retObj;

}]);
