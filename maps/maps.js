if (Meteor.isClient) {
	Handlebars.registerHelper('loggedIn',function(input){
    return Meteor.user()!=null;
  })

  	Template.user_loggedin.events({
    "click #accountSettings": function(e, tmpl) {
      userAcct = Meteor.user();
	  console.log(userAcct);
      var result = "Name: " + userAcct.services.facebook.name;
      result += "\n Gender: " + userAcct.services.facebook.gender;
      result += "\n ID: " + userAcct.services.facebook.id;
      result += "\n User Name: " + userAcct.services.facebook.username;
    }
  });
  
  Template.user_loggedin.currentUserInfo = function(){
	console.log(Meteor.user());
	return Meteor.user();
  }
  
  Template.user_loggedin.userPicture = function(){
	var id = Meteor.user().services.facebook.id;
	return "http://graph.facebook.com/" + id + "/picture/?type=large";
  }
  
  function getFBId(){
	return Meteor.user().services.facebook.id;
  }
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
