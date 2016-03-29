fideligard.factory('historyService',
  ['stockService',
    function(stockService) {

      var _date = {};

      var parseData = (function() {
        var stockData = stockService.getStockData();

        for(var company in stockData) {
          for(var i = 0; i < stockData[company].length; i++) {
            var comp = stockData[company][i];
            _date[comp.Date] = _date[comp.Date] || {};
            _date[comp.Date][company] = {
              volume: comp.Volume,
              closing: comp.Close
            };
          }
        }

      })();

}]);
