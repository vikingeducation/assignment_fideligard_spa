simulator.directive('tradeValidations', ['portfolioLedger', 
  function(portfolioLedger){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl){
      
      // quantity validations, prevent issues with current and "future" balance
      // and quantities.  Future meaning we don't allow any buy or sell orders
      // that would invalidate existing, future orders.  

      // Could eliminate the current balance and quantity checks and only check
      // "future" since that's actually checking across the entire range of
      // the simulation, however having checks for both gives a nicer UX
      // with validation messages for both

      var quantityInput = scope.tradeForm.quantity;

      scope.$watchCollection('formData', function(fd){

        // don't run validations until form is filled out
        if (!fd.quantity || !fd.symbol || !fd.buySell || !fd.date ) return;

        if (fd.buySell == 'Buy') {
          // clear any 'Sell' validations
          quantityInput.$setValidity('currentQuantity', true);
          quantityInput.$setValidity('futureQuantity', true);

          // verify we have enough cash on hand for the purchase
          var cbIsValid = portfolioLedger.cashOnHand(fd.date) >= 
                          fd.price * Number(fd.quantity);
          quantityInput.$setValidity('currentBalance', cbIsValid);

          // if we have enough cash on hand, make sure the order won't
          // invalidate any existing orders
          if (cbIsValid) {
            var fbIsValid = portfolioLedger.cashOnHand() >= 
                            fd.price * Number(fd.quantity);
            quantityInput.$setValidity('futureBalance', fbIsValid);
          }
        } 

        if (fd.buySell == 'Sell') {
          // clear any 'Buy' validations
          quantityInput.$setValidity('currentBalance', true);
          quantityInput.$setValidity('futureBalance', true);

          // similar to cash on hand, make sure we have enough quantity
          // for the sell order
          var cqIsValid = portfolioLedger.quantityOnHand(fd.symbol, fd.date) >= 
                          Number(fd.quantity);
          quantityInput.$setValidity('currentQuantity', cqIsValid);

          // and again, if we have enough quantity make sure future orders
          // aren't invalidated
          if (cqIsValid) {
            var fqIsValid = portfolioLedger.quantityOnHand(fd.symbol) >= 
                            Number(fd.quantity);
            quantityInput.$setValidity('futureQuantity', fqIsValid);
          }          
        }

      });

    }
  };
}]);