app.factory('DateService', ['StockService', function(StockService){


  var _dates = StockService.allDates();

  var _dateInfo = {
    currentIndex: 0,
    currentDate: _dates[0]
  };



  var getDateInfo = function(){
    return _dateInfo;
  }


  var getDate = function(){
    return _dateInfo.currentIndex;
  };

  var setDate = function(date) {
    _dates = StockService.allDates()
    _dateInfo.currentDate = _dates[date];
    return _dateInfo.currentIndex = date;
  };

  return {
    getDate: getDate,
    setDate: setDate,
    getDateInfo: getDateInfo
  };

}]);
