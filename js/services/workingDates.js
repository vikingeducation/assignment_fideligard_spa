simulator.factory('workingDates', [function(){

  var dates = {
    buffer: new Date('1/15/2014'),
    start: new Date('3/1/2014'),
    end: new Date('9/31/2014'),
    selected: new Date('5/1/2014'),
  };

  return dates;

}]);