StockPortfolioSimulator.directive('mainViewHeader', function(){

  return {
    restrict: "E",
    scope: {
    	header: "@"
    },
    templateUrl: "/js/templates/shared/main_view_header.html"
  }

});