app.factory('DateService', [function(){

  var _dateInfo = {
    currentDate: new Date('2014-01-01')
  };

  var getDateInfo = function(){
    return _dateInfo;
  };

  var getDate = function(){
    return angular.copy(_dateInfo,{});
  };

  // Might need to use this on stock service.
  var setDate = function(date) {
    var day = new Date(date);
    var currMonth = day.getUTCMonth() + 1;
    var currDay = day.getUTCDate();
    var currYear = day.getUTCFullYear();
    var currStr = currYear + "-" + currMonth + "-" + currDay;
    _dateInfo.currentDate = currStr;
  };

  return {
    getDate: getDate,
    setDate: setDate,
    getDateInfo: getDateInfo
  };

}]);
