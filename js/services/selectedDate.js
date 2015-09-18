app.factory('selectedDate', function(){
  var dates = {};

  // function getDate() {
  //   return _currentDate;
  // };

  function setDate(offset) {
    var baseDate = new Date('01/01/2014');
    var startDate = new Date(baseDate);
    startDate.setDate(startDate.getDate()+Number(offset));
    dates.currentDate = startDate;
  };

  return {
    // getDate: getDate,
    setDate: setDate,
    dates: dates
  }
})
