tradeApp.factory('dateRangeService', ['$http',function($http){

  var obj = {};

  var today = new Date('December 31, 2014');

  var _endDate = new Date(new Date().setDate(today.getDate()-93)).toISOString().slice(0,10);
  console.log("end date is "+_endDate); // 2014-12-31 was -274

  var _startDate = new Date(new Date().setDate(today.getDate()-457)).toISOString().slice(0,10);
  console.log("start date is "+_startDate); // 2014-01-01 was -638

  obj.pickedDate = function(days){
    var picked_date = new Date(new Date().setDate(today.getDate()-93-dayCount(parseInt(days)))).toISOString().slice(0,10);
    console.log("picked date is "+ picked_date);
    return picked_date;
  };

  obj.getEndDate = function(){
    return _endDate;
  };

  obj.getStartDate = function(){
    return _startDate;
  };

  var dayCount = function(days){
    if (days % 5 === 0){
      return days += (2 + 2 * days/5);
    } else {
      return days += (2 * days/5);
    }
  };

  return obj;

}]);