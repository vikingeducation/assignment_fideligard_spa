app.directive('stockIndexRow', function() {

  return {
    restrict: 'A',
    templateUrl: 'js/directives/stock_index_row.html',
    scope: {
      stock: "=",
      symbol: "=",
      date: "="
    }
  };

});
