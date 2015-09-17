fideligard.factory('stocks',['$http', function($http){
  var retObj = {}
  var transpose = function(a) {
    return Object.keys(a[0]).map(
        function (c) { return a.map(function (r) { return r[c]; }); }
        );
    }

  var symbols = ['FB', 'TWTR']//, 'LNKD', 'GOOG']


  oneYearAgo = function(){
    d = new Date()
    selectedDate = d.setDate(d.getDate() - (366));
    return new Date(selectedDate)
  }

  var getDateStr = function(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    return dateStr = yyyy+'-'+mm+'-'+dd;
        ///            AAPL            GOOG
  }  //// results [[[day][2day]], [[day], [day2]]]

  var results = [];
  retObj.ajaxSuccess = function(response){
    console.log("success")
    results.push(response.data.query.results.quote) // push array onto results each response is for a
                                                    // differeny SYM
    var stockData = comparisonDays()
    retObj.trends = getTrends("FB", stockData)
  }
  var ajaxFailure = function(){console.log("fail")}

  var buildUrl = function(symbol){
    return "http://query.yahooapis.com/v1/public/yql?q= \
        select * from   yahoo.finance.historicaldata \
                 where  symbol    = '"+ symbol + "' \
                 and    startDate = '"+ getDateStr(oneYearAgo()) + "' \
                 and    endDate   = '"+ getDateStr(new Date()) + "' \
        &format=json \
        &diagnostics=true \
        &env=store://datatables.org/alltableswithkeys \
        &callback="
  };
  var ajaxRequest = function(){
    promises = []
    for (var i = 0; i < symbols.length; i++){
      var sym = symbols[i];
      var url = buildUrl(sym);
      promises.push($http.get(url))
    }
    return promises
  }

  var getData = function(dateStr){
    var data = [];
    for (var i = 0; i < results.length; i++){
      data.push($.grep(results[i], function(val){
        return val.Date == dateStr;
      }));
    }

    array = data.reduce(function(a, b){
     return a.concat(b);
    });
    return array
  };


  // selectDate = function(){
  //   d = new Date()
  //   selectedDate = d.setDate(d.getDate() - (-dateDiff));
  //   sendDate = new Date(selectedDate)
  //   dateOutput = getDateStr(sendDate)
  //   stockData = getData(dateOutput)
  //   comparisonDays()
  // };



  var comparisonDays = function(){
    var date = new Date(yesterday);

    var day0 = new Date(date.setDate(date.getDate() - 0));
    var day1 = new Date(date.setDate(date.getDate() - 1));
    var day7 = new Date(date.setDate(date.getDate() - 7));
    var day30 = new Date(date.setDate(date.getDate() - 30));

    arr = [day0, day1, day7, day30]
    retArr = []

    for (var i = 0; i < arr.length; i++) {
      var str = getDateStr(arr[i])
      retArr.push(getData(str))
    }

    return retArr /// [[apple stocks on [0],[1],[2],{3}}], [fb stocks on 0,1,2,3]]
  }


  var getTrends = function(sym, stockData){
    // console.log(stockData)
    var data = $.grep(stockData, function(val){
      return (val[0][0] && val[0][0].Symbol == sym) });

    i = 0;
    console.log("geting trends");
    console.log(data)

    // console.log(data[0][i][0]);

  };

  d = new Date();
  yesterday = new Date(d.setDate(d.getDate() - 1));
  dateOutput = getDateStr(yesterday);


  return retObj;

}])
