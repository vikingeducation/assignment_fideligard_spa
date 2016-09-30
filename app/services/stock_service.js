fideligard.factory('StockService', ['$http', function($http){

  var obj = {}
  var stocks = [];

  obj.getStocks = function() {
    return $http({
      url: '/data/aapl.json',
      method: 'GET'
    })
    .then(function(response){
      angular.copy(response.query.results, stocks)
    })
  }

// dates object
// var _datesObject = {
//   2016-01-01: {
//   'AAPL': {
//
//   },
//   'TSLA': {
//
//   }
// }

// var datesArray = Object.keys(_dateObject).sort()


}])
