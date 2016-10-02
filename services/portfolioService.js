fideligardApp.factory("portfolioService", [function() {

  var _cashAvailable = 100000

  portfolioService.availableCash = function() {
    return _cashAvailable
  }


  return portfolioService
}])