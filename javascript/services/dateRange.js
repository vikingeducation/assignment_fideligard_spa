tradeApp.factory('dateRangeService', ['$http',function($http){

  var obj = {};

  var today = new Date('December 31, 2014');

  var _endDate = new Date(new Date().setDate(today.getDate()-275)).toISOString().slice(0,10);

  var _startDate = new Date(new Date().setDate(today.getDate()-639)).toISOString().slice(0,10);

  obj.pickedDate = function(days){
    return new Date(new Date().setDate(today.getDate()-275-dayCount(parseInt(days)))).toISOString().slice(0,10);
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