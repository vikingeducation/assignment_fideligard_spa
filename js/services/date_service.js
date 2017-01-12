Fideligard.factory('dateService', function () {
  var dateService = {};

  var _currentDate = {};

  dateService.updateCurrent = function (date) {
    console.log(date);
    _currentDate.value = date;
  };

  dateService.getCurrent = function () {
    return _currentDate.value;
  };

  dateService.getValidFormattedDate = function(date) {
    new_date = new Date('2014-01-01').add(date).day();
    console.log(new_date)
    while (new_date.is().saturday() || new_date.is().sunday()) {
      new_date = new_date.add(1).day();
    }
    return new_date.toISO();
  }

  return dateService;
});