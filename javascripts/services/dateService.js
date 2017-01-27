fideligard.factory('dateService', function() {
  var exports = {};

  var START_DATE = new Date("Jan 1, 2016");
  var END_DATE = new Date("Dec 31, 2016");

  exports.scalarToCalendarDate = function(scalar) {
    var date = new Date(START_DATE);
    date.setDate(date.getDate() + scalar);
    return Math.floor(date);
  };

  exports.calendarToScalarDate = function(date) {
    var ms = date - START_DATE;
    var seconds = ms / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    return Math.floor(days);
  };

  return exports;
});
