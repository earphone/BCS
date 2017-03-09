// based off of https://github.com/KinveyApps/HTML5-Starter/blob/master/www/js/app.js
var app = {
	events: {
		// Login
		'#login-button submit': 'login'
        '#create-employee-button submit': 'create_employee'
	},
	
	login: function(event) {
		// Prevent the form from being submitted
		event.preventDefault();
		
		// Remove the login-error
		$('#login-error').remove();
	}
};