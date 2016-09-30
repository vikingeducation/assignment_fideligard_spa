Fideligard.factory('dateService', [function() {

  var _date = {index: 40};

  dateService = {};

  dateService.setDate = function(index) {
    _date.index = index;
  }

  dateService.getDate = function() {
    return _date;
  }

  return dateService;

}])