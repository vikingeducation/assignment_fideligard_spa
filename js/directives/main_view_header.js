StockPortfolioSimulator.directive('mainViewHeader', function(){

  return {
    restrict: "E",
    scope: {
    	header: "@",
    	changeView: "&",
    	viewName: "="
    },
    templateUrl: "/js/templates/shared/main_view_header.html"
  }

});