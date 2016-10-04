StockSimulator.controller('dateCtrl', ['$scope', 'dateService', '$rootScope', function ($scope, dateService, $rootScope) {
	$scope.date = {
		value: 3,
		options: {
			floor: 0,
			ceil: 364,
			translate: function (value) {
				var startDate = new Date('2014/01/01')
				var transformed = startDate.setDate(startDate.getDate() + value);
				var dateFormat = new Date(transformed);
				return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
			}
		}
	};

	$scope.updateDate = function () {
		dateService.updateCurrent($scope.date.value);
		$rootScope.$broadcast('date.updated');
	};


}]);
