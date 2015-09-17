fideligard.controller("homeCtrl",['$scope', '$http', function($scope, $http){

  //DQRQ
  var symbols = ['FB', 'TWTR', 'LNKD', 'GOOG']
  oneYearAgo = function(){
    d = new Date()
    $scope.selectedDate = d.setDate(d.getDate() - (365));
    return new Date($scope.selectedDate)
  }
  $scope.selectDate = function(){
    d = new Date()
    $scope.selectedDate = d.setDate(d.getDate() - (-$scope.dateDiff));
    sendDate = new Date($scope.selectedDate)
    $scope.dateOutput = $scope.getDateStr(sendDate)
    $scope.stockData = getData($scope.dateOutput)
    $scope.comparisonDays()
  };
  $scope.getDateStr = function(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    return dateStr = yyyy+'-'+mm+'-'+dd;

  }

  $scope.comparisonDays = function(){
    var retArr = []
    var date = new Date($scope.selectedDate);
    console.log(date)
    var day1 = new Date(date.setDate(date.getDate() - 1));
    var day7 = new Date(date.setDate(date.getDate() - 7));
    var day30 = new Date(date.setDate(date.getDate() - 30));

    console.log(day1)
    console.log(getData($scope.getDateStr(day1)));

    return retArr
  }

  var results = []
  var ajaxSuccess = function(response){
    results.push(response.data.query.results.quote)
    $scope.stockData = getData($scope.dateOutput);
  }
  var ajaxFailure = function(){}
  var buildUrl = function(symbol){
    return "http://query.yahooapis.com/v1/public/yql?q= \
        select * from   yahoo.finance.historicaldata \
                 where  symbol    = '"+ symbol + "' \
                 and    startDate = '"+ $scope.getDateStr(oneYearAgo()) + "' \
                 and    endDate   = '"+ $scope.getDateStr(new Date()) + "' \
        &format=json \
        &diagnostics=true \
        &env=store://datatables.org/alltableswithkeys \
        &callback="
  };

  (function(){
    for (var i = 0; i < symbols.length; i++){
      var sym = symbols[i];
      var url = buildUrl(sym);
      $http.get(url).then(ajaxSuccess, ajaxFailure)
    }

  })()

  var getData = function(dateStr){
    var data = []
    for (var i = 0; i < results.length; i++){
      data.push($.grep(results[i], function(val){
        return val.Date == dateStr
      }))
    }
    return $scope.stockData = data
  }

  $scope.dateDiff = -1;
  d = new Date()
  $scope.selectedDate = new Date(d.setDate(d.getDate() - 1));
  $scope.dateOutput = $scope.getDateStr($scope.selectedDate);


}])
