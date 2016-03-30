fideligard.factory('analyticService', function(){

  var oneDayAgo = function(company, data, properDate, stockData) {
    var currentStock = data.close;

    var yesterday = new Date(properDate);
    yesterday.setDate(yesterday.getUTCDate() - 1);


    var year = yesterday.getUTCFullYear().toString();
    var month = (yesterday.getUTCMonth()+1);
    var day = yesterday.getUTCDate();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();
    yesterday = year + "-" + month + "-" + day;

    var targetStock = stockData[yesterday];

    if (currentStock && targetStock) {
      return (currentStock - targetStock[company].close);
    } else {
      console.log('fail');
      return '';
    }
  };

  return {
    oneDayAgo: oneDayAgo
  };

});
