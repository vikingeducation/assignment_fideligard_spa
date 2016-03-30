fideligard.factory('tradeService', function(){

  var calculateCost = function(quantity, price) {
    return quantity * price;
  };

  var checkQuantity = function(quantity, volume) {
    quantity = parseInt(quantity);
    volume = parseInt(volume);
    if (quantity < 1 || quantity > volume) {
      console.log("should fail");
      return false;
    } else {
      console.log("should return");
      return true;
    }

  };

  return {
    calculateCost: calculateCost,
    checkQuantity: checkQuantity
  };

});
