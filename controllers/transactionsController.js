app.controller("transactionsCtrl",
  ['$scope', '$stateParams', 'stocks', 'portfolioService',
  function($scope, stateParams, stocks, portfolioService) {

    console.log("stateparams smybol IS: ", stateParams.symb);

    console.log("transactions");
    console.log(portfolioService.getTransactions());

}]);
