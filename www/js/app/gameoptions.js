define(['jquery'], function($) {
	
	var gameOptions = {
		musicVolume: 1,
		effectsVolume: 1
	};
	
	var GameOptions = {
		get: function(optionName) {
			return gameOptions[optionName];
		},
		
		set: function(optionName, value) {
			gameOptions[optionName] = value;
			if(typeof Storage != 'undefined' && localStorage) {
				localStorage.gameOptions = JSON.stringify(gameOptions);
			}
			return value;
		},
		
		load: function() {
			try {
				var savedOptions = JSON.parse(localStorage.gameOptions);
				if(savedOptions) {
					$.extend(gameOptions, savedOptions);
				}
			} catch(e) {
				// Nothing
			}
		}
	};
	
	return GameOptions;
});