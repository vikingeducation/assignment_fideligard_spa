app.factory('dateService', [function() {

  var _date;
   

  var stub = {};

  stub.setDate = function(newDate) {
     _date = newDate;
  }

  stub.getDate = function() {
    return _date;
  };

  return stub;
}]);