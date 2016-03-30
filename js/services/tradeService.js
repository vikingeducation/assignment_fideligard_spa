fideligard.factory('tradeService', function(){

  var calculateCost = function(quantity, price) {
    return quantity * price;
  };

  var checkQuantity = function(quantity, volume) {
    if (quantity < 1 || quantity > volume) {
      console.log("this is false");
      return false;
    } else {
      console.log("this is true");
      return true;
    }

  };

  return {
    calculateCost: calculateCost,
    checkQuantity: checkQuantity
  };

});
