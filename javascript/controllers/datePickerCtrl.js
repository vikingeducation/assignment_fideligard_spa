tradeApp.controller('datePickerCtrl', [ '$scope',
                                        'dateRangeService',
                                        'stockDataService',
                                        function( $scope,
                                                  dateRangeService, stockDataService ){

$scope.datePicker = 0;

$scope.$watch('datePicker', function(newVal){
  stockDataService.updateDataForStockTable(newVal);
});

$scope.dateRange = function(){ return 248 - $scope.datePicker; };

$scope.datePicked = function(){ return dateRangeService.pickedDate($scope.datePicker); };

}]);