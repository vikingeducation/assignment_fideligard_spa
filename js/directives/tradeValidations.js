simulator.directive('tradeValidations', ['portfolioLedger', 
  function(portfolioLedger){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl){
      
      // quantity validations, prevent issues with current and "future" balance
      // and quantities.  Future meaning we don't allow any buy or sell orders
      // that would invalidate existing, future orders.

      scope.$watchCollection('formData', function(fd){

        if (!fd.quantity || !fd.symbol || !fd.buySell || !fd.date ) return;

        if (fd.buySell == 'Buy') {
          var cbIsValid = portfolioLedger.cashOnHand(fd.date) >= 
                          fd.price * Number(fd.quantity);
          scope.tradeForm.quantity.$setValidity('currentBalance', cbIsValid);

          if (cbIsValid) {
            var fbIsValid = portfolioLedger.cashOnHand() >= 
                            fd.price * Number(fd.quantity);
            scope.tradeForm.quantity.$setValidity('futureBalance', fbIsValid);
          }
        } 

        if (fd.buySell == 'Sell') {
          var cqIsValid = portfolioLedger.quantityOnHand(fd.symbol, fd.date) >= 
                          Number(fd.quantity);
          scope.tradeForm.quantity.$setValidity('currentQuantity', cqIsValid);

          if (cqIsValid) {
            var fqIsValid = portfolioLedger.quantityOnHand(fd.symbol) >= 
                            Number(fd.quantity);
            scope.tradeForm.quantity.$setValidity('futureQuantity', fqIsValid);
          }          
        }

      });

    }
  };
}]);