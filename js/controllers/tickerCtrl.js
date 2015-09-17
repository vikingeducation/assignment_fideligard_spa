fideligard.controller("tickerCtrl",['$scope', '$http', 'stocks', function($scope, $http, stocks){

  //DQRQ

  var results = []

  var ajaxSuccess = function(response){
    console.log("success")
    results.push(response.data.query.results.quote) // push array onto results each response is for a
                                                    // differeny SYM
    stocks.updateResults(results)
    $scope.trends = stocks.comparisonDays()
  }

  var ajaxFailure = function(){console.log("fail")}

// wait until ajax in service is complete.

  var promises = stocks.ajaxRequest()

  for (var i = 0; i < promises.length; i++) {
    promises[i].then(ajaxSuccess, ajaxFailure)
  }


  // trends sent to view to populate table




}]);
