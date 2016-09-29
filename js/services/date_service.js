app.factory('DateService', [function(){

  var _dateInfo = {
    currentDate: new Date('2014-01-01')
  };

  var getDateInfo = function(){
    return _dateInfo;
  }


  var getDate = function(){
    return _dateInfo.currentDate;
  };

  var setDate = function(date) {
    if (date > new Date('2014-01-01') && date < new Date('2015-01-01')) {
      return _dateInfo.currentDate = date;
    }
  };

  return {
    getDate: getDate,
    setDate: setDate,
    getDateInfo: getDateInfo
  };

}]);
