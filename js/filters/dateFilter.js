app.filter("dateFilter", function(){
  return function(collection, date){
    return collection.filter(function(el) {
      var chosenDate = new Date(el.Date)
          targetDate = new Date(date)
      chosenDate.setHours(0,0,0,0);
      targetDate.setHours(0,0,0,0);
      targetDate.setDate(targetDate.getDate() - 1);
      return (chosenDate <= targetDate && chosenDate >= targetDate);
    });
  };
});

app.filter("beforeDateFilter", function(){
  return function(collection, date){
    return collection.filter(function(el) {
      var chosenDate = new Date(el.date)
          targetDate = new Date(date)
      chosenDate.setHours(0,0,0,0);
      targetDate.setHours(0,0,0,0);
      targetDate.setDate(targetDate.getDate() - 1);
      return (chosenDate <= targetDate);
    });
  };
});

app.filter("afterDateFilter", function(){
  return function(collection, date){
    return collection.filter(function(el) {
      var chosenDate = new Date(el.date)
          targetDate = new Date(date)
      chosenDate.setHours(0,0,0,0);
      targetDate.setHours(0,0,0,0);
      targetDate.setDate(targetDate.getDate() - 1);
      return !(chosenDate <= targetDate);
    });
  };
});

