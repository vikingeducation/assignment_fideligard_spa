fideligard.factory('DatePickerService', function() {

  var picker = {};

  // 2014-01-01: 1388563200000
  // 2014-12-31: 1420012800000

  // this is for the datepicker slider, which works in ms:
  picker.date = 1393632000000;


  // this is for the datepicker input box, which works in strings:
  picker.dateString = '2014-03-01';


  return picker;

});