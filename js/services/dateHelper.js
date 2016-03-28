simulator.factory('dateHelper', function(){

  var _MS_PER_DAY = 1000 * 60 * 60 * 24;

  var diffInDays = function(a, b) {
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  };

  var addDays = function(date, days){
    var result = new Date(date);
    result.setDate(result.getDate() + Number(days));
    return result;
  };

  return {
    diffInDays: diffInDays,
    addDays: addDays,
  };
});