fideligard.filter('positive', function() {
  return function(number) {
    if (number >= 0) {
      return "+";
    }
  };
});
