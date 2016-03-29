fideligard.controller('dateCtrl',
  ['$scope',
   function($scope) {
     $scope.startDateMs = 1420070400; // Jan 1, 2015 UTC
     $scope.endDateMs = 1451520000; // Dec 31, 2015 UTC
     $scope.date = {
       dateMs: $scope.startDateMs,
       properDate: function() {
         console.log("hello");
         var dateObj = new Date(Date.UTC($scope.date.dateMs) * 1000);
         var year = dateObj.getFullYear().toString();
         var month = (dateObj.getMonth()+1).toString();
         var day = dateObj.getDate().toString();
         return year + "-" + month + "-" + day;
       }
    };
   }
]);
