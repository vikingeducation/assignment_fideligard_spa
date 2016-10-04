// app.factory('StockService', ['$http', function($http) {
  // var StockService = {};
  // var _stockData = {};
//
//   var BASE_URI = 'http://query.yahooapis.com/v1/public/';
//   var RESOURCE = 'yql';
//   var TABLE = 'yahoo.finance.historicaldata';
//   var OTHER_INFO = '%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';
//
//   function _format(format) {
//     return ['&format=',format].join('');
//   }
//
//   function _queryParams () {
//     return ['?q=',_select('APPL', '2014-01-01', '2014-12-31'), _format('json')].join('');
//   }
//
//   // http://query.yahooapis.com/v1/public/yql?q=
//   // select * from yahoo.finance.historicaldata
//   //   where symbol = "AAPL"
//   //   and startDate = "2014-01-01"
//   //   and endDate = "2014-12-31"
//   // &format=json
//   // &diagnostics=true
//   // &env=store://datatables.org/alltableswithkeys &callback=
//
//
//
//   function _select(symbol,startDate,endDate) {
//     return [
//       'select*%20',
//       'from%20',
//       TABLE,
//       '%20where%20symbol%20=%20' + '%22' + symbol + '%22%20',
//       'and%20startDate%20=%20' + '%22' + startDate + '%22%20',
//       'and%20endDate%20=' + '%20%22' + endDate + '%22%20'
//     ].join('');
//   }
//
//
//
// // Our URL.
// // http://query.yahooapis.com/v1/public/yql
// // ?q=select*%20
// // from%20yahoo.finance.historicaldata
// // %20where%20symbol%20=%20
// // %22APPL%22%20
// // and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&
// // format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=
//
//
// // Reading's URL.
// // http://query.yahooapis.com/v1/public/yql
// // ?q=select*%20
// // from%20yahoo.finance.historicaldata
// // %20where%20symbol%20=%20
// // %22AAPL%22%20
// // and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&
// // format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=
//
// // Reading's URL
//
// // http://query.yahooapis.com/v1/public/yql?q=select*from+yahoo.finance.historicaldata
// // +where+symbol=%22AAPL%22+and+startDate=%222014-01-01%22+and+endDate=%222014-12-31%22&
// // format=json%20
// // &diagnostics=true&env=store://datatables.org/alltableswithkeys%20&callback=
//
//
//
//   // http://query.yahooapis.com/v1/public/yql?q=select*from+yahoo.finance.historicaldata+where+symbol=%22AAPL%22+and+startDate=%222014-01-01%22+and+endDate=%222014-12-31%22&format=json%20&diagnostics=true&env=store://datatables.org/alltableswithkeys%20&callback=
//
//
//   // http://query.yahooapis.com/v1/public/yql?q= select * from yahoo.finance.historicaldata where symbol = "AAPL" and startDate = "2014-01-01" and endDate = "2014-12-31" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys &callback=
//
//
//   // ?q=
//   // select * from   yahoo.finance.historicaldata
//   //          where  symbol    = "AAPL"
//   //          and    startDate = "2011-09-11"
//   //          and    endDate   = "2014-02-11"
//   // &format=json
//   // &diagnostics=true
//   // &env=store://datatables.org/alltableswithkeys
//   // &callback=
//
//
//   function _buildURL () {
//     return [BASE_URI, RESOURCE, _queryParams(), OTHER_INFO].join('');
//   }
//
//   StockService.all = function() {
//     // console.log(_buildURL());
//     // $http.get(
//     //   _buildURL()
//     // ).then(function(response) {
//     //   console.log(response);
//     // });
//     // $http.get('http://query.yahooapis.com/v1/public/yql?q=select*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
//     //   .then(function(response) {
//     //     console.log(response);
//     //   }).catch(function(reason) {
//     //     console.log(reason);
//     //   });
//   };
//
//   return StockService;
// }]);
