simulator.factory('yahooApi', ['sharedData', '$http', '$filter', function(sharedData, $http, $filter){
  
  var getQuotes = function(){
    var start = $filter('date')(sharedData.dates.buffer, "yyyy-MM-dd");
    var end = $filter('date')(sharedData.dates.end, "yyyy-MM-dd");

    return $http.get('http://query.yahooapis.com/v1/public/yql?q=' +
      'select * from yahoo.finance.historicaldata where symbol in ("' +
      sharedData.symbols.join('","') + '")' +
      ' and startDate = "' + start + '"' +
      ' and endDate   = "' + end + '"' +
      '&format=json&diagnostics=true&env=store://datatables.org/alltableswithkeys&callback=');
  };

  return {
    getQuotes: getQuotes
  };

}]);


