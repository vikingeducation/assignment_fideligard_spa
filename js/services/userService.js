fideligard.factory('userService', function() {

  var _bankroll = 10000000;

  var getBankroll = function() {
    return _bankroll;
  };

  var addBankroll = function(amount) {
    _bankroll += amount;
  };

  var minusBankroll = function(amount){
    _bankroll -= amount;
  };

  return {
    getBankroll: getBankroll,
    addBankroll: addBankroll,
    minusBankroll: minusBankroll
  };
});
