fideligardApp.filter("addPlusSign", function() {
  return function(n) {
    var filteredCollection;
    if (n > 0) {
      return "+" + n;
    } else {
      return n
    }
  }
})