fideligard.controller("tickerCtrl",['$scope', '$http', 'stocks', function($scope, $http, stocks){

  //DQRQ


// wait until ajax in service is complete.

var promises = stocks.ajaxRequest()

for (var i = 0; i < promises.length; i++) {
  promises[i].then(stocks.ajaxSuccess, stocks.ajaxFailure)
}


stocks.trends()
// trends sent to view to populate table




}]);
