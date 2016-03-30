fideligard.factory('portfolioService', ['stockService', function(stockService){

  var stockData = stockService.getStockData();

  var daysAgo = function(transaction, properDate, daysAgo) {
    var oldDate = new Date(properDate);
    oldDate.setDate(oldDate.getDate() - daysAgo);


    var year = oldDate.getUTCFullYear().toString();
    var month = (oldDate.getUTCMonth()+1);
    var day = oldDate.getUTCDate();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    oldDate = year + "-" + month + "-" + day;

    var targetStock = stockData[oldDate];

    if (targetStock) {
      return (transaction.price - targetStock[transaction.company].close) * transaction.quantity;
    }

  };

  return {
    daysAgo: daysAgo
  };

}]);
