tradeApp.controller('stocksCtrl',  [  '$scope',
                                      'stockDataService',
                                      function( $scope,
                                                stockDataService
                                              ){

// allStocks = stockDataService.getAllStockData();
// stock = stockDataService.getStocksTableData();

  $scope.nameSort     = 0;
  $scope.priceSort    = 0;
  $scope.onedaySort   = 0;
  $scope.sevendaySort = 0;
  $scope.monthSort    = 0;

  $scope.stocks = stockDataService.getStocksTableData();
  $scope.symbols = stockDataService.getSymbols();

  $scope.symbolReturn = function(symbolFilter){
    var i = $scope.symbols.indexOf(symbolFilter);
    return $scope.symbols[i];
  };

  $scope.label = function(prop){
    var attr = {  'Symbol':'nameSort', 'Price':'priceSort', '1d':'onedaySort',
                  '7d':'sevendaySort', '30d':'monthSort'  };
    return [prop, prop+' \u25B2', prop+' \u25BC'][$scope[attr[prop]] % 3];
  };

  $scope.sortCriteria = function(){
    var nameArr     = [null, "-name", "+name"];
    var priceArr    = [null, "-price", "+price"];
    var oneDayArr   = [null, "-oneday", "+oneday"];
    var sevenDayArr = [null, "-sevenday", "+sevenday"];
    var monthArr    = [null, "-month", "+month"];

    var nameCriteria      = nameArr[$scope.nameSort % 3];
    var priceCriteria     = priceArr[$scope.priceSort % 3];
    var oneDayCriteria    = oneDayArr[$scope.onedaySort % 3];
    var sevenDayCriteria  = sevenDayArr[$scope.sevendaySort % 3];
    var monthCriteria     = monthArr[$scope.monthSort % 3];

    var criteria = [];

    if (nameCriteria) criteria.push(nameCriteria);
    if (priceCriteria) criteria.push(priceCriteria);
    if (oneDayCriteria) criteria.push(oneDayCriteria);
    if (sevenDayCriteria) criteria.push(sevenDayCriteria);
    if (monthCriteria) criteria.push(monthCriteria);

    return (criteria);
  };

  $scope.cycleName = function(){
    $scope.nameSort++;
  };

  $scope.cyclePrice = function(){
    $scope.priceSort++;
  };

  $scope.cycleOneDay = function(){
    $scope.onedaySort++;
  };

  $scope.cycleSevenDay = function(){
    $scope.sevendaySort++;
  };

  $scope.cycleMonth = function(){
    $scope.monthSort++;
  };

}]);