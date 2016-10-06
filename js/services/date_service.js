app.factory('DateService', [function(){

  var DateService = {};

  var _dateInfo = {
    currentDate: new Date('2014-01-01')
  };

  DateService.getDateInfo = function(){
    return _dateInfo;
  };

  DateService.stringifyDate = function(day) {
    var currMonth = day.getUTCMonth() + 1;
    var currDay = day.getUTCDate();

    if (currDay.toString().length <= 1) {
      currDay = "0" + currDay.toString();
    }

    if (currMonth.toString().length <= 1) {
      currMonth = "0" + currMonth.toString();
    }

    var currYear = day.getUTCFullYear();

    return currYear + "-" + currMonth + "-" + currDay;
  };

  // Might need to use this on stock service.
  DateService.setDate = function(date) {
    var day = new Date(date);
    _dateInfo.currentDate = DateService.stringifyDate(day);
  };

  return DateService;
}]);
