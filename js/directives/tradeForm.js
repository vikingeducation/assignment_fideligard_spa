"use strict";
app.directive('tradeForm', ['StocksService', 'dateService', 'accountService', function(StocksService, dateService, accountService){

	return{
		restrict: "E",
		templateUrl: "js/templates/tradeForm.html",
		scope: {
			symbol: "=",
			dates: "="
		},
		link: function(scope){
			scope.updateForm = function(){
				scope.formData.date = scope.dates[dateService.getDate().index];
				scope.formData.price = StocksService.currentPrice(scope.symbol);
			};

			scope.currentDate = dateService.getDate();
			scope.$watch('currentDate.index', function(){
      	scope.updateForm();
    	});

    	scope.account = accountService.getBalance();
    	scope.orderStatus = "";

			scope.formData = {};
			scope.updateForm();
			scope.formData.action = "buy";
			scope.formData.symbol = scope.symbol;
			scope.formData.quantity = 100;

			scope.placeTrade = function(){
				if(scope.formData.action === "buy"){
					//check buy
					if(accountService.checkValidBuy(scope.formData)){
						accountService.makeBuy(scope.formData);
						scope.orderStatus = "Order Placed!";
					}
					else{
						scope.orderStatus = "Not enough money!";
					}
				}
				else if(scope.formData.action === "sell"){
						//check sell
						if(accountService.checkValidSell(scope.formData)){
							accountService.makeSell(scope.formData);
							scope.orderStatus = "Sell confirmed!";
						}
						else{
							scope.orderStatus = "Invalid";
						}
				}
			};
			
		}
	};
}]);