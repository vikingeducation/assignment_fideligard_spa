fideligardApp.factory("dateService", [function() {
  
  var dateService = {}
  var _selectedDateIndex = {}; 

  dateService.getSelectedDate = function() {
    return _selectedDateIndex;
  };

  dateService.setSelectedDate = function(date) {
    angular.copy(date, _selectedDateIndex);
  };

  return dateService

}]);