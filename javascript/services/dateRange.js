tradeApp.factory('dateRangeService', ['$http',function($http){

  var obj = {};

  var today = new Date();

  var _endDate = new Date(new Date().setDate(today.getDate()-1)).toISOString().slice(0,10);

  var _startDate = new Date(new Date().setDate(today.getDate()-360)).toISOString().slice(0,10);

  obj.setEndDate = function(days){
    _endDate = new Date(new Date().setDate(today.getDate()-1-days)).toISOString().slice(0,10);
    console.log(_endDate);
  };

  obj.getEndDate = function(){
    return _endDate;
  };

  obj.getStartDate = function(){
    return _startDate;
  };

  return obj;

}]);