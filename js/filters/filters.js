"use strict";
app.filter('myCurrency', function(){
	return function(amount){
		var output = "$" + Math.abs(amount).toFixed(2);
		if(amount < 0){
			output = "-" + output;
		}
		else if(amount > 0){
			output = "+" + output;
		}

		return output;
	};
});

app.filter('objToArray', function(){
	return function(stocks){
		var result = [];
		for (var symbol in stocks){
			result.push(symbol);
		}
		return result;
	};
});