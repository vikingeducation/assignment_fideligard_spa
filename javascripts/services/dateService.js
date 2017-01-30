fideligard.factory('dateService', function() {

  var exports = {};

  exports.START_DATE = new Date("Jan 1, 2016");
  exports.END_DATE = new Date("Dec 31, 2016");

  exports.scalarToCalendarDate = function(scalar) {
    var date = new Date(exports.START_DATE);
    date.setDate(date.getDate() + scalar);
    return date;
  };

  exports.calendarToScalarDate = function(date) {
    var ms = date - exports.START_DATE;
    var seconds = ms / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    return Math.floor(days);
  };

  exports.currentDate = new Date('Jul 1, 2016');

  return exports;
});
