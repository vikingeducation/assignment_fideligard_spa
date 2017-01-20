Fideligard.factory('dateService', ['$rootScope', function ($rootScope) {
  var dateService = {};

  var _currentDate = {};

  dateService.updateCurrent = function (date) {
    _currentDate.value = date;

    $rootScope.$broadcast('date.updated');
  };

  dateService.setDateFromNumDays = function(num) {
    new_date = new Date('2014-01-01').add(num).day();
    _currentDate.value = new_date;
    $rootScope.$broadcast('date.updated');
  }

  dateService.getCurrent = function () {
    return _currentDate.value;
  };

  dateService.getCurrentNum = function () {
    var diff = _currentDate.value - new Date('2014/01/01');
    return Math.floor(diff/(1000 * 3600 * 24));
  };

  return dateService;
}]);