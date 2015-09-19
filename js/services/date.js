fideligard.factory('date',['$http', function($http){
  var retObj = {};
  var _today = new Date()
  var _dateSet = new Date(_today.setDate(_today.getDate() - 1))
  var _date = _dateSet

  retObj.yesterday = function(){
    var today = new Date();
    return new Date(today.setDate(today.getDate() - 1))
  }

  retObj.getDate = function(){
    return _date
  }

  retObj.setDate = function(dateDiff){

    if (typeof(dateDiff) === "string"){
      var newDate = new Date()
      _date = new Date(newDate.setDate(newDate.getDate() - (-dateDiff)))
    } else if (new Date(dateDiff) != "Invalid Date") {
      _date = dateDiff
    }
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
    var dateStr;
    return dateStr = yyyy+'-'+mm+'-'+dd;

  };


  return retObj;

}]);
