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
