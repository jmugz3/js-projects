var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
// var testModel = new Schema({
// 	title	: 	{ type: String}, 
// 	version	:	{ type: Number , min: 0.0},
// 	author	: 	{ type: String, default : "jmugz3"},
// 	tested 	:	{ type: Boolean, default : false}	
	
// });

var testModel = new Schema({ 
		domain:	String,
		author: String,
		subreddit: String,
		title: String,
		over_18: Boolean, 
		edited: Boolean, 
		score: Number,
		url: String,
		permalink : String,
		visited : Boolean
	}, 
	{ collection: 'stories'});


module.exports = mongoose.model('Test', testModel);