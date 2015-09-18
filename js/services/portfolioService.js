app.factory("portfolioService", 
  ["$filter",
   "transactionService",
    function($filter, transactionService){

      var overallPortfolio = {};

      var portfolioBeforeCurrentDate = {};

      function _updatePortfolio(transactions, pf) {
        for (var key in pf) {
          delete pf[key];
        }
        transactions.forEach(function(ele){
          if (pf[ele.symbol]) {                            // If already has this stock
            if (ele.action == "true") {                    // If buy
              pf[ele.symbol].quantity += ele.quantity;
              pf[ele.symbol].costBasis += ele.quantity * ele.price;
            } else {                                       // If sell
              pf[ele.symbol].quantity -= ele.quantity;
              pf[ele.symbol].costBasis -= ele.quantity * ele.price;
            }
          } else {                                        // If not already has this stock
            pf[ele.symbol] = {};                                
            pf[ele.symbol].quantity = ele.quantity;
            pf[ele.symbol].costBasis = ele.quantity * ele.price;
          }
        })
      };

      function calcBeforeCurrentDate(date) {
        // console.log("date", date);
        // console.log("before", portfolioBeforeCurrentDate);
        var transactionsBefore = $filter("beforeDateFilter")(transactionService.transactions.record, date);
        _updatePortfolio(transactionsBefore, portfolioBeforeCurrentDate);
        // console.log("after", portfolioBeforeCurrentDate);
      }

      function calcOverall() {
        _updatePortfolio(transactionService.transactions.record, overallPortfolio);
      }

      return {
        overallPortfolio: overallPortfolio,
        portfolioBeforeCurrentDate: portfolioBeforeCurrentDate,
        calcOverall: calcOverall,
        calcBeforeCurrentDate: calcBeforeCurrentDate
      }

    }]
)