fideligard.factory('date',['$http', function($http){
  var retObj = {};
  var _today = new Date()
  var _dateSet = new Date(_today.setDate(_today.getDate() - 1))
  var _date = _dateSet


  retObj.getDate = function(){
    return _date
  }

  retObj.setDate = function(dateDiff){
    var newDate = new Date()
    _date = new Date(newDate.setDate(newDate.getDate() - (-dateDiff)))
  };

  retObj.oneYearAgo = function(){
    var d = new Date();
    var selectedDate = d.setDate(d.getDate() - (366));
    return new Date(selectedDate);
  };

  retObj.getDateStr = function(dateInput){
    var dd = dateInput.getDate();
    var mm = dateInput.getMonth()+1; //January is 0!
    var yyyy = dateInput.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm;
    }
    return dateStr = yyyy+'-'+mm+'-'+dd;

  };


  return retObj;

}]);
