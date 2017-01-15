Fideligard.factory('transactionService', function () {

  var _transactions = [];
  var _userCash = 1000.00;
  var _userStocks = {};

  var transactionService = {};

  transactionService.getCashAvailable = function() {
    return _userCash;
  }

  transactionService.getUserStocks = function() {
    return _userStocks;
  }

  return transactionService;
});