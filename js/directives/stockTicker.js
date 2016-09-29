app.directive('stockTicker', function(){
	return{
		restrict: "E",
		templateUrl: 'js/templates/stockTicker.html',
		scope: {
			stock: "="
		}
	};
});