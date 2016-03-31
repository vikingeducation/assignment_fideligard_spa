# App architecture

Root Parent
1. dashboard (has navbar)

Views on dashboard (these are always on the screen)
1. stocks
2. datePicker
3. <ui-view></ui-view>

Under the nested <ui_view> (these change depending on user flow)
1. portfolio
2. trade
3. transaction

```
$stateProvider
  .state('dashboard',{
    url: '',
    views: {
      'stocks': {
        templateUrl: 'stocks.html',
      },
      'datePicker': {
        templateUrl: 'datePicker.html',
      },
    }
  })
  .state('dashboard.portfolio', {
    url: '/portfolio',
    templateUrl: 'portfolio.html'
  })
  .state('dashboard.trade', {
    url: '/trade',
    templateUrl: 'trade.html'
  })
  .state('dashboard.transaction', {
    url: '/transaction',
    templateUrl: 'transaction.html'
  })
```
