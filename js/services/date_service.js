StockApp.factory("dateService", [function(){
  
  var service = {};

  var _checkHoliday = function(dt_date) {
    // check simple dates (month/date - no leading zeroes)
      var n_date = dt_date.getDate(),
       n_month = dt_date.getMonth() + 1;

      var s_date1 = n_month + '/' + n_date;

      if (   s_date1 == '1/1'   // New Year's Day
          || s_date1 == '6/14'  // Flag Day
          || s_date1 == '7/4'   // Independence Day
          || s_date1 == '11/11' // Veterans Day
          || s_date1 == '12/25' // Christmas Day

      ) return true;

      // weekday from beginning of the month (month/num/day)
      var n_wday = dt_date.getDay(),
      n_wnum = Math.floor((n_date - 1) / 7) + 1;
      var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

      if (   s_date2 == '1/3/1'  // Birthday of Martin Luther King, third Monday in January
        || s_date2 == '2/3/1'  // Washington's Birthday, third Monday in February
        || s_date2 == '5/3/6'  // Armed Forces Day, third Saturday in May
        || s_date2 == '9/1/1'  // Labor Day, first Monday in September
        || s_date2 == '10/2/1' // Columbus Day, second Monday in October
        || s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November

      ) return true;
      // weekday number from end of the month (month/num/day)

      var dt_temp = new Date (dt_date);

      dt_temp.setDate(1);

      dt_temp.setMonth(dt_temp.getMonth() + 1);

      dt_temp.setDate(dt_temp.getDate() - 1);

      n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;

      var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;

      

      if (s_date3 == '5/1/1'  // Memorial Day, last Monday in May

      ) return true;



      // misc complex dates

      if (s_date1 == '1/20' && (((dt_date.getFullYear() - 1937) % 4) == 0) 

      // Inauguration Day, January 20th every four years, starting in 1937. 

      ) return true;

        

      if (n_month == 11 && n_date >= 2 && n_date < 9 && n_wday == 2

      // Election Day, Tuesday on or after November 2. 

      ) return true;

      

      return false;

  };

  

  

  service.startDate = "2015-01-02";

  service.endDate = "2015-12-31";

  service.validDate = function(date){
    var start = new Date(service.startDate);
    var finish = new Date(service.endDate);
    var current = new Date(date);

    if(current >= start && current <= finish){
      return true;
    } else {
      return false;
    }
  };



  

  //SELECTED DATE
  service.selectedDate = service.startDate;

  // need to substract four hours in milliseconds from the new days
  var startDateMS = new Date(service.startDate).getTime() - 14400000;
  var endDateMs = new Date(service.endDate).getTime() - 14400000;

  var startDate = new Date(startDateMS);
  var endDate = new Date(endDateMs);

  var _range = [];



  while(startDate <= endDate){
    if(startDate.getDay() > 0 && startDate.getDay() < 6 && !_checkHoliday(startDate) ){
      _range.push(angular.copy(startDate));
    }
    
    startDate = new Date(startDate.getTime() + 86400000);
  }
  _range.push(endDate);

  _range = _range.map(function(date){
    date = date.toISOString();
    
    return date.slice(0, 10);
  })


  service.range = function(){
    return _range;
  }
  

  
  

  return service;

}]);