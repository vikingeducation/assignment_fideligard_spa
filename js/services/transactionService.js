fideligard.factory('transactionService',
  ['userService',
    function(userService){

      var _transactions = [];

      var addTransaction = function(date, company, type, quantity, price) {
        _transactions.push({
          date: date,
          company: company,
          type: type,
          quantity: quantity,
          price: price
        });
        userService.minusBankroll(price);
      };

      var getTransactions = function() {
        return _transactions;
      };

      return {
        addTransaction: addTransaction,
        getTransactions: getTransactions
      };
}]);
