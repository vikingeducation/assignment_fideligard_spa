StockApp.factory("stockService", ["$http", function($http){
  
  var service = {};

  //store all tickers in an object and have to them point to all their data
  var _stocks = {};
  
  service.getAPPL = function(){
    
    return $http({
      method: "GET",
      url: '/apple_data.json'
    }).then(function success(response){
      
      //I know the ticker is apple for now

      var appleData = {};
      angular.copy(response.data, appleData);

      _stocks["APPL"] = appleData.query.results.quote;

      return appleData;
    }, function error(response){
      console.log("there was an error getting apple");
      return response;
    })
  };

  service.findChange = function(ticker, date, daysBack){
    var pastIndex;
    var present;
    _stocks[ticker].forEach(function(day, index){
      if(day.Date === date){
        present = day;
        pastIndex = index - daysBack;
      }
    })

    var past = _stocks[ticker][pastIndex];

    var change = present.Close - past.Close;

    return change;
  };


  service.findDateForDay = function(ticker, date){
    console.log(ticker);
    console.log(date);
    //DATE IS UNDEFINED
    var targetDay = "not found";
    _stocks[ticker].forEach(function(day){
      console.log(day.Date);
      if(day.Date === date){
        targetDay = day;
      } 
    })
    return targetDay;
  }

  return service;

}]);