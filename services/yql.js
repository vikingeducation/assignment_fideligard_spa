Fideligard.factory('yqlService', ['$http', function($http) {

  var fideligardService = {};
  var _companies = ["AAPL"];
  var _start = "2014/12/01";
  var _end = "2015/12/31";

  var _quotes = {};
  var _dateArray = [];

  var scrubData = function() {
    for (var i = 0; i < 30; i++) {
      scrubDate(_dateArray[i]);
    }
    for (var i = 30; i < _dateArray.length - 1; i++) {
      scrubDate(_dateArray[i]);
      extendDate(_dateArray[i]);
    }
    // angular.copy(Object.keys(_quotes).sort(), _dateArray);
  };

  var convertToDate = function(date) {
    var newDate = date.replace(/-/g,"/");
    var realDate = new Date(newDate);
    return realDate;
  };

  var changeDate = function(date, change) {
    var newDate = convertToDate(date);
    newDate.setDate(newDate.getDate() + change);
    return newDate.toISOString().slice(0,10);
  }

  var scrubDate = function(date) {
    var data = _quotes[date];
    // var currentDate = convertToDate(date);
    // currentDate.setDate(currentDate.getDate() + 1);
    // var dateString = currentDate.toISOString().slice(0,10);
    // currentDate.setDate(currentDate.getDate() + 1);
    // var dateString2 = currentDate.toISOString().slice(0,10);
    var dateString = changeDate(date, 1);
    if (Object.keys(_quotes[dateString]).length === 0) {
      _quotes[dateString] = data;
    }
  };

  var priceChange = function(date, sym, change) {
    var currentPrice = _quotes[date][sym].Close;
    var newDate = changeDate(date, -change);
    var changePrice = _quotes[newDate][sym].Close;
    _quotes[date][sym][String(change)] = currentPrice - changePrice;
  };

  var extendDate = function(date) {
    angular.forEach(_quotes[date], function(data, sym) {
      priceChange(date, sym, 1);
      priceChange(date, sym, 7);
      priceChange(date, sym, 30);
    });
  };

  var parseData = function(response) {
    var data = response.data.query.results.quote;
    var startDate = new Date(_start);
    var currentDate = new Date(_start);
    var endDate = new Date(_end);
    endDate.setDate(endDate.getDate() + 1)
    // var quotes = {};

    while ( currentDate < endDate ) {
      var dateString = currentDate.toISOString().slice(0,10);
      _quotes[dateString] = {};
      currentDate.setDate(currentDate.getDate() + 1);
    }

    angular.copy(Object.keys(_quotes).sort(), _dateArray);

    for (var index in data) {
      _quotes[data[index].Date][data[index].Symbol] = data[index]
    }

    // angular.copy(Object.keys(_quotes).sort(), _dateArray);
    // return quotes;
  };

  var urlBuilder = function(companyArray) {
    var companyString = "'" + companyArray.join("','") + "'";

    return 'http://query.yahooapis.com/v1/public/yql?q=' +
              'select * from yahoo.finance.historicaldata ' +
              'where symbol in (' + companyString + ') ' +
              'and startDate = "' + _start + '" ' +
              'and endDate = "' + _end + '" ' +
              '&format=json '+
              '&diagnostics=true ' +
              '&env=store://datatables.org/alltableswithkeys ' +
              '&callback=';
  };

  fideligardService.apiStocks = function() {
    var url = urlBuilder(_companies);
    console.log("sending data")
    return $http.get(url).then(function(response) {
      console.log("data returned")
      parseData(response);
      scrubData();
    }) ;
  };

  fideligardService.getStocks = function() {
    return _quotes;
  };

  fideligardService.getDates = function() {
    return _dateArray;
  };

  fideligardService.apiStocks();

  return fideligardService;

}]);