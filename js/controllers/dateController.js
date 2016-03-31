fideligard.controller('dateCtrl',
  ['$scope',
   function($scope) {
     $scope.startDateMs = 1420070400; // Jan 1, 2015 UTC
     $scope.endDateMs = 1451520000; // Dec 31, 2015 UTC
     $scope.date = {
       dateMs: $scope.startDateMs,
       properDate: function() {
         var dateObj = new Date($scope.date.dateMs * 1000);
         var year = dateObj.getUTCFullYear().toString();
         var month = (dateObj.getUTCMonth()+1);
         var day = dateObj.getUTCDate();

         if (month < 10) month = "0" + month.toString();
         if (day < 10) day = "0" + day.toString();
         return year + "-" + month + "-" + day;
       }
    };
   }
]);
