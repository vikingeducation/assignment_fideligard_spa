Fideligard.factory("PortfolioService", 
  ["StockService", "TradeService", "DateService",
  function(StockService, TradeService, DateService) {
    var PortfolioService = {};

    var _date = function() {
      return DateService.hyphenFormat();
    }

    var _trades = TradeService.getTrades();

    var _positions = []; //data for lower table

    var _overview; // data for upper table

    var _getPositions = function() {
      // console.log('filtering', _trades.length, 'trades')
      // filter _trades for those <= _date
      _positions = [];
      var filtered = _filterBeforeDate();

      // aggregate by symbol
      filtered.forEach(function(trade) {
        var position = PortfolioService.findPos(trade.symbol);
        console.log(trade.symbol, position, 'position')
        if (!position) {
          //if position obj doesn't exist for trades for this symbol, create one + populate with price info relative to selected date
          console.log('creating position for ', trade.symbol)
          var currentPrices = _findPrices(trade.symbol);
          _positions.push(
                position = {
                symbol: trade.symbol,
                quantity: 0,
                costBasis: 0,
                currentVal: 0,
                // price info relative to current date
                current: currentPrices.price,
                one: currentPrices.one,
                seven: currentPrices.seven,
                thirty: currentPrices.thirty
          })
        }
        // collect trade info: quantity, cost basis, current value, profit/loss (based on buy/sell)
        var type = trade.type ? 1 : -1;
        position.quantity += type * trade.quantity;
        position.costBasis += type * trade.quantity * trade.price;
        position.currentVal += position.quantity * position.current;
      })
    }

    var _filterBeforeDate = function() {
      var filtered = [];
      filtered.push(
        _trades.filter( function(trade) {
          return trade.date <= _date();
        })
      )
      console.log('trades <= current date:', filtered)
      return [].concat.apply([], filtered);
    }

    var _findPrices = function(sym) {
      return StockService.formatStockData().find( function(stock) {
        return stock.symbol === sym
      })
    }

    var _getOverview = function() {
      _overview = {
        costBasis: 0,
        currentVal: 0
      }
      
      _positions.forEach(function(position) {
        _overview.costBasis += position.costBasis;
        _overview.currentVal += position.currentVal;
      })
    }

    PortfolioService.findPos = function(sym) {
      return _positions.find(function(position) {
        return position.symbol === sym;
      })
    }

    PortfolioService.getPositions = function() {
      _getPositions();
      return _positions;
    }

    PortfolioService.getOverview = function() {
      _getOverview();
      return _overview;
    }

    return PortfolioService;
  }])