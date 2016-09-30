app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};
  var _symbols = [];
  var _dates = [];

  StockService.queryStocks = function() {
    return $http.get('js/data/stocks.json')
            .then(function(response) {
              // Grab symbols.
              _.forEach(
                _.uniq(
                  _.map(
                    response.data,
                    function(item) {
                      return item['Symbol'];
                    }
                  )
                ),
                function(symbol) {
                  _stockData[symbol] = {};
                  _stockData[symbol][2014] = {
                    days: []
                  };
                }
              );
              return response;
            })
            // .then(function(response) {
            //   // Grab dates.
            //   _.forEach(
            //     _.uniq(
            //       _.map(
            //         response.data,
            //         function(item) {
            //           return item['Date'];
            //         }
            //       )
            //     ),
            //     function(date) {
            //       response.data.forEach(function(item) {
            //         // If the item's date matches the current date in collection,
            //         // and if that date doesn't already have an object in
            //         // the form data.
            //         if (item['Date'] === date) {
            //           if (_stockData[item['Symbol']]) {
            //             if (_.isEmpty(_stockData[item['Symbol'][date]])) {
            //               _stockData[item['Symbol']][2014].days = [];
            //             }
            //           }
            //         }
            //       });
            //       return date;
            //     }
            //   );
            //   return response;
            // })
            .then(function(response) {
              _.forEachRight(
                response.data,
                function(item) {
                  _stockData[item['Symbol']][2014].days.push(item);
                }
              );
              return _stockData;
            })
            .catch(function(reason) {
              console.log(reason);
            });
  };

  StockService.getStocks = function() {
    return _stockData;
  };

  StockService.getPrevious = function (current, daysAgo, field) {
    if (_stockData[current] && _stockData[current+daysAgo]) {
      return _stockData[current+daysAgo][field];
    }
  };

  // Symbol: {
  //   Year: {
  //     Days: [
  //     ]
  //   }
  //   Year: {
  //     Days: [
  //     ]
  //   }
  //   Year: {
  //     Days: [
  //     ]
  //   }
  // }

  return StockService;

}]);
