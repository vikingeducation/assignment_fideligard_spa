app.filter('orderByObject', function(orderByObject) {
  return function(items) {
    return items.slice().reverse();
  };
});
