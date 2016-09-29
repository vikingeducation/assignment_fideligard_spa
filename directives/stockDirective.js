app.directive("stockRow", [function(){
  return {
    templateUrl: "directives/stockDirective.html",
    restrict: "A",
    scope: {
      stockCloseDate: "@"
    },
    link: function(scope){
    }
  };
}]);
