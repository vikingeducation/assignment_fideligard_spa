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

  var setDate = function(date) {
    _dateInfo.currentDate = new Date(date);
  };

  return {
    getDate: getDate,
    setDate: setDate,
    getDateInfo: getDateInfo
  };

}]);
