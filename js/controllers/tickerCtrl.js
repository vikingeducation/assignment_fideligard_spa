fideligard.controller("tickerCtrl",['$scope', '$http', 'stocks', 'date',
                            function($scope, $http, stocks, date){

  var currentDate = date.getDate();
  var results = [];



  $scope.$watch(date.getDate, function(newDate, oldDate) {

    $scope.trends = stocks.comparisonDays(newDate);
  });

  var ajaxSuccess = function(response){
    results.push(response.data.query.results.quote); // push array onto results each response is for a
                                                    // differeny SYM
    stocks.updateResults(results);
    var newDate = date.getDate();
    $scope.trends = stocks.comparisonDays(newDate);
  };

  var ajaxFailure = function(){console.log("fail");};

// wait until ajax in service is complete.

  var promises = stocks.ajaxRequest();

  for (var i = 0; i < promises.length; i++) {
    promises[i].then(ajaxSuccess, ajaxFailure);
  }


}]);
