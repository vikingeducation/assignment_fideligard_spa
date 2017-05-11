Fideligard.factory("DateService", ["_", 
  function(_) {
    var DateService = {};

    var _date = new Date(2016, 0, 90); // initialized form value

    DateService.date = function() {
      return _date;
    }

    DateService.hyphenFormat = function() {
      var date = _date.toISOString().slice(0,10);
      return date; // 2017-01-01 format
    }

    DateService.stringFormat = function() {
      var date = _date.toDateString();
      date = date.slice(4, 10) + ',' + date.slice(10)
      return date; // Jan 1, 2017 format
    }

    // processes date input from slider form
    DateService.setDateValue = function(value) {
      _date = new Date(2016, 0, value)
      return _date;
    }

    return DateService;
  }])