simulator.factory('sharedData', [function(){

  var data = {
    symbols: ["TWTR","YHOO","AAPL","GOOG","MSFT","ORCL","NXPI","AMZN","INTC"],
    dates: {    
      buffer: new Date('1/15/2015'),
      start: new Date('3/1/2015'),
      end: new Date('7/1/2015'),
      selected: new Date('5/1/2015'),
    }
  };

  return data;

}]);