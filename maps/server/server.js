Accounts.onCreateUser(function (options, user) {
  if (options.profile) {
		//want the users facebook pic and it is not provided by the facebook.service
		options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
		data = user.services.facebook;
		user.profile = options.profile;
		user.profile.voted = false;
	}
    return user;
});

Accounts.loginServiceConfiguration.remove({
		service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
		service: "facebook",
		appId: "829928090368832",
		secret: "dcbeb9de3f4d45ba71d8407cdcc13d7a"
});