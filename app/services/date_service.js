fideligard.factory('DateService', function() {

  var _currentDate = {}

  var setDate = function(date) {
    _currentDate.time = new Date(date);
  }

  var getDate = function() {
    return _currentDate
  }

  return {
    setDate: setDate,
    getDate: getDate
  }

})
