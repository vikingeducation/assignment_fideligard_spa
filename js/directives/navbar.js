StockApp.directive("navBar", function(){

  return {
    templateUrl: "js/templates/navbar.html",
    restrict: "E",
    scope: {},
    link: function(){
      console.log("DIRECTIVE LOADED");
    }
  }
})