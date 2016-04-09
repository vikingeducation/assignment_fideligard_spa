simulator.directive('tradeValidations', ['portfolioLedger', 
  function(portfolioLedger){
  return {
    restrict: 'A',
    require: '^form',
    link: function(scope, elem, attr, ctrl){
      function valdiate(quantity){
        var date = ctrl.date;
        var symbol = ctrl.symbol;
        var price = scope.formData.price;

        console.log(scope);

        // if (ctrl.buySell == "Buy") {
        //   if (portfolioLedger.cashOnHand(date) > )
        // } else {

        // }
      }
    }
  };
}]);