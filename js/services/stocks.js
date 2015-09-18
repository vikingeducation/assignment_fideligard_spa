fideligard.factory('stocks',['$http', function($http){
  var retObj = {};

  var transpose = function(a) {
    return Object.keys(a[0]).map(
        function (c) { return a.map(function (r) { return r[c]; }); }
        );
  };

  retObj.symbols = ['FB', 'TWTR', 'LNKD', 'GOOG', 'AAPL', 'SNE', 'ARX', 'TPE', 'KRX']

  oneYearAgo = function(){
    d = new Date();
    selectedDate = d.setDate(d.getDate() - (366));
    return new Date(selectedDate);
  };

  var getDateStr = function(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm;
    }
    return dateStr = yyyy+'-'+mm+'-'+dd;
        ///            AAPL            GOOG
  };  //// results [[[day][2day]], [[day], [day2]]]

  var results = [];

  var buildUrl = function(symbol){
    return "http://query.yahooapis.com/v1/public/yql?q= \
        select * from   yahoo.finance.historicaldata \
                 where  symbol    = '"+ symbol + "' \
                 and    startDate = '"+ getDateStr(oneYearAgo()) + "' \
                 and    endDate   = '"+ getDateStr(new Date()) + "' \
        &format=json \
        &diagnostics=true \
        &env=store://datatables.org/alltableswithkeys \
        &callback=";
  };

 retObj.ajaxRequest = function(){
    promises = [];
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
    array = data.reduce(function(a, b){
    return a.concat(b);
    });
    // retObj.getTrends(array)
    return array; //
  };



  var formatDays = function(){

    array = [0, 1, 7, 30];
    retArr = [];

    for (var i = 0; i < array.length; i++){
      base = new Date(yesterday);
      var num = array[i];
      day = new Date(base.setDate(base.getDate() - num))
      if (day.getDay() === 0){
        day = new Date(day.setDate(day.getDate() - 2))
      } else if (day.getDay() == 6){
        day = new Date(day.setDate(day.getDate() - 1))
      }
      retArr.push(day);

    }
    return retArr;

  };

  retObj.comparisonDays = function(){
    arr = formatDays();

    retArr = [];

    for (var i = 0; i < arr.length; i++) {
      var str = getDateStr(arr[i])
      retArr.push(retObj.getData(str));
    }

    return transpose(retArr); /// [[apple stocks on [0],[1],[2],{3}}], [fb stocks on 0,1,2,3]]
  };

  var d = new Date();
  var yesterday = new Date(d.setDate(d.getDate() - 1));
  dateOutput = getDateStr(yesterday);


  return retObj;

}]);
