fideligard.controller("homeCtrl",['$scope', function($scope){
$scope.dateDiff = 0;

today = new Date()
d = today
$watch $scope.selectedDate = d.setDate(today.getDate()- $scope.dateDiff);

getDateStr = function(date){
  var dd = date.getDate();
  var mm = date.getMonth()+1; //January is 0!
  var yyyy = date.getFullYear();

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }
  return dateStr = mm+'/'+dd+'/'+yyyy;

}







}])
