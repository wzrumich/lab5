var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
	var description = request.query.description;
	if (name == undefined) {
		name = "undefinedName";
	}
	if (description == undefined) {
		description = "undefinedDescription";
	}
	data.friends.push({
		"name" : name,
		"description" : description,
		"imageURL" : "http://lorempixel.com/250/250/people"
	})
	response.render('index', data);
 }