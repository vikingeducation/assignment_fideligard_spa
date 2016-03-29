financialApp.factory('dateService', [function(){

  var _startDate = new Date("1-2-2014");
  var _endDate = new Date("7-31-2014");

  var getStartDate = function(){
    return _startDate;
  };

  var getEndDate = function(){
    return _endDate;
  };

  var getDateSelection = function(){
    return _dateSelection["selection"];
  };

  var convertDate = function(date){
    return (new Date(date));
  };

  var dateRange = function(){
    var range = Math.round( ( _endDate.getTime() -_startDate.getTime() ) / (1000*60*60*24) );
      return range;
  };

  return{
    convertDate: convertDate,
    dateRange: dateRange,
    getStartDate: getStartDate,
    getEndDate: getEndDate,
    getDateSelection: getDateSelection

  };

}]);