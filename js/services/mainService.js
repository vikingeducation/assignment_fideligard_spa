"use strict";
app.factory('mainService', ['accountService', function(accountService){
 	var stub = {};
	var _gameState; 

	stub.setState = function(state){
		_gameState = state;
		accountService.reset();
	};

	stub.getState = function(){
		return _gameState;
	};

	return stub;

}]);