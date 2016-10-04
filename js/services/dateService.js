"use strict";
app.factory('dateService', function(){
	var stub = {};

	var _date = {index: 30};	


	stub.setDay = function(day) {
		_date.index = day;
    };

  stub.nextDay = function(){
  	_date.index ++;
  };

	stub.getDate = function(){
		return _date;
	};

	return stub;
});
