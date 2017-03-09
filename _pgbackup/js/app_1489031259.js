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
	},
    
    create_employee: function(event) {
        alert("Creating User");
     	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
			var errorMessage = error.message;
            // ...
            alert("The following error occured: " + errorMessage);
        });
    }
};