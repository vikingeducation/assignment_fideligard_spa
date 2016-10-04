# fideligard_yahoo_stocks
Buy low, sell high.

* Singlepaged Web Application with Angularjs front-end.
* Multi-Views and Nested States with ui.router
* custom filter, directives, controllers, and services
* Takes API data from Yahoo Finance API with AJAX request
* modular code

[hosted on github pages](http://adrianmui.me/fideligard_yahoo_stocks/)

**Main Author:**

> Adrian

**Contributors:**

> Dylan, Johnny

__________________________________________

PSEUDO-CODE:


Widgets:
  *Date
    min, max date

  *Stocks
    filter
    Data Table

  *Portfolio 
    Calculations table
    Data Table

Clicking Trade:
  brings you to trade page.

  question: how do i get to..

1. clicking trade.
2. mainpanel shows trade.
3. get the info of stockSYMB and stockINDEX to mainpanel
4. get main paenl to access from the stock service to populate data.

clicking trade --> gives info to stock controller
of the stock, and index.

selectdropdown in mainview --> uisrefs to the trade view
