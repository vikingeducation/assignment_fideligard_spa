financialApp.factory('dateService', [function(){

  var _dateInfo = {
    startDate: new Date("2-1-2014"),
    endDate: new Date("8-30-2014"),
    dateSelection: 0,
    currentDate: new Date("2-1-2014"),
    dateRange: function() {
      return findDateRange( this.startDate, this.endDate );
    },
    setCurrentDate: function() {
      this.currentDate = offsetDate(  this.startDate,
                                      this.dateSelection );
    },
    getDateString: function(){
      return dateToString( this.currentDate );
    },
    oneDayAgo: function(){
      var otherDate = offsetDate( this.currentDate, -1 );
      return dateToString( otherDate );
    },
    oneWeekAgo: function(){
      var otherDate = offsetDate( this.currentDate, -7 );
      return dateToString( otherDate );
    },
    oneMonthAgo: function(){
      var otherDate = offsetDate( this.currentDate, -30 );
      return dateToString( otherDate );
    },
  };

  var getDateInfo = function(date) {
    return _dateInfo;
  };

  var dateToString = function(date) {
    var year = date.getFullYear();
    var tempMonth = (date.getMonth()+1);
    var month = (tempMonth <= 9 ? "0" : "") + tempMonth;
    var tempDay = date.getDate()
    var day = (tempDay <= 9 ? "0" : "") + tempDay;
    return year + "-" + month + "-" + day;
  };

  var offsetDate = function(date, offset) {
    var start = date.getTime();
    var selection = offset * (1000*60*60*24);
    var newDate = new Date( start + selection );
    return newDate;
  };

  var findDateRange = function(start, end) {
    var range = Math.round( ( end.getTime() - start.getTime() ) / (1000*60*60*24) );
      return range;
  }

  return{
    getDateInfo: getDateInfo,
    dateToString: dateToString,
    offsetDate: offsetDate,
    findDateRange: findDateRange,
  };

}]);
