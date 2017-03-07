x// based off of https://github.com/KinveyApps/HTML5-Starter/blob/master/www/js/app.js
var app = {
	events: {
		// Login
		'#login-button submit': 'login'
	}//,
	
	login: function(event) {
		// Prevent the form from being submitted
		event.preventDefault();
		
		// Remove the login-error
		$('#login-error').remove();
		
		// Login to Kinvey
		Kinvey.User.login(email, password)
			.then(function() {
				location.replace('/');
			})
			.catch(function(error) {
				$('#login-form').append('<p id="login-error" class="text-danger" style="margin-top: 10px;">' + error.message + '</p>');
			});
	}//,
};

/*// Initialize Kinvey
Kinvey.initialize({
    alert("initializing");
    appKey: 'kid_ByrZLAIwl',
    appSecret: '1c72c49283e14ca5a4191490a6ba4414'
});
.then(function(activeUser) {
                    if (!activeUser && authorizedHrefs.indexOf(location.pathname) !== -1) {
                      location.replace('/login.html');
                    } else {
                     return bindEvents();
                    }
                  })
                  .then(function() {
                    $('#loading-modal').modal('hide');
                  })
                  .catch(function(error) {
                    console.log(error);
                  });
               */
