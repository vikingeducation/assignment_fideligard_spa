https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css

https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js
https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js
https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js

http://query.yahooapis.com/v1/public/yql?q=
select * from   yahoo.finance.historicaldata
         where  symbol    = "AAPL"
         and    startDate = "2011-09-11"
         and    endDate   = "2014-02-11"
&format=json
&diagnostics=true
&env=store://datatables.org/alltableswithkeys
&callback=

Top level
  navbar
  main area

Routing
  3 views in each state:
  Trading state
    Top
      date picker
    Left
      stock data
    Right
      trading
  Transaction state
    Top
      date picker
    Left
      stock data
    Right
      transactions
  Portfolio state
    Top
      date picker
    Left
      stock data
    Right
      portfolio

Top Panel View - 'DatePickerCtrl'
  Date Picker Widget
    minimum date
    maximum date
    current date
    current date editable (within min/max)

Left Panel View - 'DataCtrl'
  Stock Data Widget
    Stocks table
    table - Symbol, Price, 1d, 7d, 30d, Trade link
    populate from static data
    then hook up the API service
      avoid unnecessary API calls
    Filter (text field)
    clicking headings orders by that heading
    refactor for skinny controller

Right Panel View - 'MainPanelCtrl'
  Trade Widget
    Add route for "trade"
    Clicking "Trade" in stocks widget opens it up
    Trade form w/ place order button
    Display cash available
    Display validity of order
    Validations - only allow if valid
    Auto-pop dates and stock symbol
    Keep track of the transation when submitted
    Watch out for "time travel"

  Transactions Widget
    Add route for transactions
    Allow switching trade/transactions w/ dropdown
    Table of transactions
    Filtering of transactions
    Sorting of transactions
    Seeding transactions

  Portfolio Widget
    Add route
    2 tables
    portfolio table - all the info
      currentValue = quantity * currentPrice
      costBasis = moneySpentBuying - moneyEarnedSelling
      1d,7d,30d - compare values with that many days ago
        trading days only!
    cash in table to show balance
    trade link goes to that route (pre-populate trading form)
    aggregated stats table at top

  Make sure it works!

  Optional gamification
