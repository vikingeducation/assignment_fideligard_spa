fideligard.controller("tickerCtrl",['$scope', '$http', 'stocks', function($scope, $http, stocks){

  var results = [];

  var ajaxSuccess = function(response){
    results.push(response.data.query.results.quote) // push array onto results each response is for a
                                                    // differeny SYM
    stocks.updateResults(results);
    $scope.trends = stocks.comparisonDays()
  };

  var ajaxFailure = function(){console.log("fail")};

// wait until ajax in service is complete.

  var promises = stocks.ajaxRequest()

  for (var i = 0; i < promises.length; i++) {
    promises[i].then(ajaxSuccess, ajaxFailure)
  }


}]);
