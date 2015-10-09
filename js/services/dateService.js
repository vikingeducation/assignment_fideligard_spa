fideligard.factory('dateService', function() {

  var dateService = {};

  // date numbers expressed in milliseconds
  dateService.minDate = Number(new Date('01/02/2014'));
  dateService.maxDate = Number(new Date('12/31/2014'));
  dateService.step = 1000*60*60*24;
  dateService.currentDate = dateService.minDate;


  dateService.setCurrentDate = function(date) {
    dateService.currentDate = date;
  };

  dateService.getCurrentDate = function() {
    return dateService.currentDate;
  };



  return dateService;

});