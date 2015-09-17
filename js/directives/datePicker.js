app.factory("datePicker", function(){
  return {
    restrict: "E",
    templateUrl: "js/directives/datePicker.html",
    scope: {
      datemodel: "="
    }
  };
});
