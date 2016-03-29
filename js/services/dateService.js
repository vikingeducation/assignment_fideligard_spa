financialApp.factory('dateService', [function(){

  var _dateInfo = { startDate: new Date("1-2-2014"),
                    endDate: new Date("7-31-2014"),
                    dateSelection: 0,
                    currentDate: function() {
                      var start = this.startDate.getTime();
                      var selection = this.dateSelection * (1000*60*60*24);
                      var newDate = new Date( start + selection );
                      console.log(newDate)
                      return newDate;
                    },
                    dateRange: function() {
                      var range = Math.round( ( this.endDate.getTime() - this.startDate.getTime() ) / (1000*60*60*24) );
                        return range;
                    }
                  };

  var getDateInfo = function(date) {
    return _dateInfo;
  };

  return{
    getDateInfo: getDateInfo,
  };

}]);
