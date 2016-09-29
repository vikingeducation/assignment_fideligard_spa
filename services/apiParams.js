app.factory('dateService', [function() {

  var _min;
  var _max;

  var stub = {};

  stub.storeMinMax = function(min, max) {
    _min = min;
    _max = max;
  }

  return stub;
}]);