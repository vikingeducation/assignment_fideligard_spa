app.factory('DateService', [function(){

  var _date = new Date('2014-01-01');


  var getDate = function(){
    return _date;
  };

  var setDate = function(date) {
    return Promise.resolve(angular.copy(date, _date));
  };

  return {
    getDate: getDate,
    setDate: setDate
  };

}]);
