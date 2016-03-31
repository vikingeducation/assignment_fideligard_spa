fideligard.factory('analyticService', function(){

  var daysAgo = function(company, data, properDate, stockData, daysAgo) {
    var currentStock = data.close;
    var yesterday = new Date(properDate);
    yesterday.setDate(yesterday.getDate() - daysAgo);


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
      return '';
    }
  };

  return {
    daysAgo: daysAgo
  };

});
