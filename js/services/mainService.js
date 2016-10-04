"use strict";
app.factory('mainService', function(){
 	var stub = {};
	var _gameState; 

	stub.setState = function(state){
		_gameState = state;
	};

	stub.getState = function(){
		return _gameState;
	};

	return stub;

});