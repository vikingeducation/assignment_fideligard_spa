tradeApp.factory('stockDataService', ['$http',
                                      'dateRangeService',
                                      function($http,
                                                dateRangeService){

  var obj = {};

  var _allStockData = {};     // {AAPL: [0:{}, 1:{}, 2:{}...]}
  var _stocksTableData = [];  //=[{name: price: oneday : sevenday: month:}]

  var _symbolsOfStocksToGet = ['AAPL', 'FB', 'GOOG', 'F', 'SBUX', 'BX',
                                'PFE', 'WMB', 'GME', 'ZNGA', 'GRPN', 'LNKD'];

  var _endDate = dateRangeService.getEndDate();
  var _startDate = dateRangeService.getStartDate();

  obj.getStocksFromYahoo = function(){
    for(var i = 0; i < _symbolsOfStocksToGet.length ; i++){
      // Single symbol query used as custom queries are restricted
      $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22'+
        _symbolsOfStocksToGet[i] + '%22%20and%20startDate%20=%20%22'+
        _startDate + '%22%20and%20endDate%20=%20%22'+
        _endDate + '%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
      ).then(_responseCallback);
    }
  };

  var _responseCallback = function(response){
    var stockForCompany = response.data["query"]["results"]["quote"];
    _createAllStockData(stockForCompany);
    _dataForStocksTable(stockForCompany[0]['Symbol']);
  };

  var _createAllStockData = function(companyStock){
    _allStockData[companyStock[0]['Symbol']] = _buildCompanyDataArray(companyStock);
  };

  var _buildCompanyDataArray = function(companyStock){
    var companyArray = [];
    for (var i = 0; i < companyStock.length; i++){
      var dayData = {};
      dayData.Adj_Close = companyStock[i]['Adj_Close'];
      dayData.Close = companyStock[i]['Close'];
      dayData['Date'] = companyStock[i]['Date'];
      dayData.High = companyStock[i]['High'];
      dayData.Low = companyStock[i]['Low'];
      dayData.Open = companyStock[i]['Open'];
      dayData.Symbol = companyStock[i]['Symbol'];
      dayData.Volume = companyStock[i]['Volume'];
      companyArray.push(dayData);
    }
    return companyArray;
  };

  var _dataForStocksTable = function(company, startDate){
    var startDate = parseInt(startDate) || 0;
    _stocksTableData.push({
      name: company,
      date: _allStockData[company][startDate]['Date'],
      price: _allStockData[company][startDate].Open,
      oneday: _onedayComparison(_allStockData[company], startDate),
      sevenday: _sevendayComparison(_allStockData[company], startDate),
      month: _monthComparison(_allStockData[company], startDate)
    });
    return _stocksTableData;
  };

  var _onedayComparison = function(companyStockData, startDate){
    if (companyStockData[startDate+1]) {
      return companyStockData[startDate].Open - companyStockData[startDate+1].Open;
    } else {
      return 'N.A.';
    }
  };

  var _sevendayComparison = function(companyStockData, startDate){
    if (companyStockData[startDate+7]) {
      return companyStockData[startDate].Open - companyStockData[startDate+7].Open;
    } else {
      return 'N.A.';
    }
  };

  var _monthComparison = function(companyStockData, startDate){
    if (companyStockData[startDate+30]) {
      return companyStockData[startDate].Open - companyStockData[startDate+30].Open;
    } else {
      return 'N.A.';
    }
  };

  obj.updateDataForStockTable = function(startDate){
    _stocksTableData.splice(0, _stocksTableData.length);
    for(var company in _allStockData){
      _dataForStocksTable(company, startDate);
    }
  };

  obj.getStocksTableData = function(){
    return _stocksTableData;
  };

  obj.getAllStockData = function(){
    return _allStockData;
  };

  obj.getSymbols = function(){
    return _symbolsOfStocksToGet;
  };

  return obj;

}]);