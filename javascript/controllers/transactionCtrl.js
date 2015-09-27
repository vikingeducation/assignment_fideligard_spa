tradeApp.controller('transactionCtrl', ['$scope', 'transactionService', function($scope, transactionService){

  $scope.transactions = transactionService.getTransactions();

  $scope.dateSort     = 0;
  $scope.priceSort    = 0;
  $scope.symbolSort   = 0;
  $scope.typeSort     = 0;
  $scope.quantitySort = 0;


  $scope.label = function(prop){
    var attr = {  'Date':'dateSort',
                  'Symbol':'symbolSort',
                  'Type':'typeSort',
                  'Quantity':'quantitySort',
                  'Price':'priceSort'  };
    return [prop, prop+' \u25B2', prop+' \u25BC'][$scope[attr[prop]] % 3];
  };

  $scope.sortCriteria = function(){
    var dateArr     = [null, "-date", "+date"];
    var priceArr    = [null, "-price", "+price"];
    var symbolArr   = [null, "-symbol", "+symbol"];
    var typeArr     = [null, "-type", "+type"];
    var quantityArr = [null, "-quantity", "+quantity"];

    var dateCriteria      = dateArr[$scope.dateSort % 3];
    var priceCriteria     = priceArr[$scope.priceSort % 3];
    var symbolCriteria    = symbolArr[$scope.symbolSort % 3];
    var typeCriteria      = typeArr[$scope.typeSort % 3];
    var quantityCriteria  = quantityArr[$scope.quantitySort % 3];

    var criteria = [];

    if (dateCriteria) criteria.push(dateCriteria);
    if (priceCriteria) criteria.push(priceCriteria);
    if (symbolCriteria) criteria.push(symbolCriteria);
    if (typeCriteria) criteria.push(typeCriteria);
    if (quantityCriteria) criteria.push(quantityCriteria);

    return (criteria);
  };

  $scope.cycleDate = function(){
    $scope.dateSort++;
  };

  $scope.cyclePrice = function(){
    $scope.priceSort++;
  };

  $scope.cycleSymbol = function(){
    $scope.symbolSort++;
  };

  $scope.cycleType = function(){
    $scope.typeSort++;
  };

  $scope.cycleQuantity = function(){
    $scope.quantitySort++;
  };



}]);