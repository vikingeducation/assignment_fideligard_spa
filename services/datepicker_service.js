fideligard.factory('DatePickerService', function() {

  var picker = {};

  // 2014-01-01: 1388563200000
  // 2014-12-31: 1420012800000

  // these are for the datepicker slider, which works in ms:
  picker.date = 1388563200000;

  picker.msToString = function(ms) {
    var d = new Date();
    d.setTime(ms);
    picker.dateString = d;
  };


  

  // these are for the datepicker input box, which works in strings:
  picker.dateString = '2014-01-01';

  picker.stringToMs = function(string, formIsValid) {
    if (formIsValid) {
      var d = new Date(string);
      picker.date = d.getTime();
    }
  };




  return picker

});