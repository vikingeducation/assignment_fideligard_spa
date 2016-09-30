Fideligard.factory('yqlService', ['$http', function($http) {

  var fideligardService = {};
  var _companies = ["AAPL","GOOG"];
  var _start = "2015/01/01";
  var _end = "2015/12/31";

  var _quotes = {};
  var _dateArray = [];

  var parseData = function(response) {
    var data = response.data.query.results.quote;

    // var startDate = new Date(_start);
    // var currentDate = new Date(_start);
    // var endDate = new Date(_end);
    // endDate.setDate(endDate.getDate() + 1)
    var quotes = {};

    // add dates to an array
    // while ( currentDate < endDate ) {
    //   var dateString = currentDate.toISOString().slice(0,10);
    //   quotes[dateString] = {};
    //   currentDate.setDate(currentDate.getDate() + 1);
    // }

    // angular.copy(Object.keys(quotes).sort(), _dateArray);

    for (var index in data) {
      if (quotes[data[index].Date]) {
        quotes[data[index].Date][data[index].Symbol] = data[index]
      } else {
        quotes[data[index].Date] = {};
        quotes[data[index].Date][data[index].Symbol] = data[index]
      }
    }
    angular.copy(Object.keys(quotes).sort(), _dateArray);
    return quotes;
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
      angular.copy( parseData(response), _quotes );
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