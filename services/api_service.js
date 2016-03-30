// fideligard.factory('apiService', ['$http', function($http){

//   var apiObj = {};

//   apiObj.getAll = function(stockSymbol) {
//     var prefix = "http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22";
//     var postfix = "%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=";

//     // console.log("making API call to:" + prefix + stockSymbol + postfix)

//     return $http.get(prefix + stockSymbol + postfix);
//   }

//   return apiObj;



// }])