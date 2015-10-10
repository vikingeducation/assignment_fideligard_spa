fideligard.factory('bank', function() {

  var bank = {};


  bank.availableCash = 5000;


  bank.payment = function(transaction) {
    var cashFlow = transaction.price * transaction.quantity;
    if (transaction.type === 'BUY') {
      cashFlow *= -1;
    };
    bank.availableCash += cashFlow;
  };


  return bank;

});