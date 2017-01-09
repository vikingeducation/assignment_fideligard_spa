Fideligard.factory('dateService', function () {
  var dateService = {};

  var currentDate = {};

  dateService.updateCurrent = function (date) {
    console.log(date);
    currentDate.value = date;
  };

  dateService.getCurrent = function () {
    return currentDate.value;
  };

  return dateService;
});