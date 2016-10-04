StockApp.factory("dateService", [function(){
  
  var service = {};

  

  service.startDate = "2015-01-02";

  service.endDate = "2015-12-31";

  service.validDate = function(date){
    var start = new Date(service.startDate);
    var finish = new Date(service.endDate);
    var current = new Date(date);

    if(current >= start && current <= finish){
      return true;
    } else {
      return false;
    }
  };
  

  //SELECTED DATE
  service.selectedDate = service.startDate;


  var startDate = new Date(service.startDate);
  var endDate = new Date(service.endDate);

  var _range = [];
  while(startDate < endDate){
    if(startDate.getDay() > 0 && startDate.getDay() < 6){
      _range.push(angular.copy(startDate));
    }
    
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
  }
  _range.push(endDate);

  _range = _range.map(function(date){
    date = date.toISOString();
    
    return date.slice(0, 10);
  })


  service.range = function(){
    return _range;
  }
  

  //Went crazy with funcitonality I don't need...

  // var _oneDayAgo = undefined;

  // var _sevenDaysAgo = undefined;

  // var _thirtyDaysAgo = undefined;

  // var _setOneDayAgo = function(){
  //   var currentDate = service.selectedDate;
  //   currentDate = new Date(currentDate);
  //   var oneDay = new Date(currentDate.setDate(currentDate.getDate() - 1));
  //   bar = oneDay;
  //   _oneDayAgo = oneDay.toISOString();
  //   _oneDayAgo = _oneDayAgo.splice(0, 10);
  // };

  // var _setSevenDaysAgo = function(){
  //   var currentDate = service.selectedDate;
  //   currentDate = new Date(currentDate);
  //   var sevenDay = new Date(currentDate.setDate(currentDate.getDate() - 1));
  //   _sevenDaysAgo = sevenDay.toISOString().splice(0, 10);
  // };

  // var _setThiryDaysAgo = function(){
  //   var currentDate = service.selectedDate;
  //   currentDate = new Date(currentDate);
  //   var thirtyDay = new Date(currentDate.setDate(currentDate.getDate() - 1));
  //   _thirtyDaysAgo = thirtyDay.toISOString().splice(0, 10);
  // };

  // service.updateHistory = function(){
  //   _setOneDayAgo();
  //   _setSevenDaysAgo();
  //   _setThirtyDaysAgo();
  // },

  // service.updateHistory();



  // service.oneDayAgo = function(){
  //   return _oneDayAgo
  // };

  // service.sevenDaysAgo = function(){
  //   return _sevenDaysAgo;
  // };

  // service.thirtyDaysAgo = function(){
  //   return _thirtyDaysAgo;
  // }
  

  return service;

}]);