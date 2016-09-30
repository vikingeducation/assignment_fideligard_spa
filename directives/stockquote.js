Fideligard.directive("stockquote", function() {

  return {
    templateUrl: "directives/stockquote.html",
    restrict: "A",
    scope: {
      symbol: "=",
      value: "=",
      quotes: "=",
      dates: "=",
      date: "="
    },
    link: function(scope) {
      scope.one = function() {
        var prev = scope.quotes[scope.dates[scope.date.index-1]];
        var prev_val = prev[scope.symbol].Close;
        return prev_val;
      }
      scope.seven = function() {
        var prev = scope.quotes[scope.dates[scope.date.index-7]];
        var prev_val = prev[scope.symbol].Close;
        return prev_val;
      }
      scope.thirty = function() {
        var prev = scope.quotes[scope.dates[scope.date.index-30]];
        var prev_val = prev[scope.symbol].Close;
        return prev_val;
      }
    }
  }

});