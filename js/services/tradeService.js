fideligard.factory('tradeService', function(){

  var calculateCost = function(quantity, price) {
    return quantity * price;
  };

  return {
    calculateCost: calculateCost
  };

});
