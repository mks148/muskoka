var mongoose= require('mongoose');


// my clientSchema to display or add  data in table according to this
var clientSchema = new mongoose.Schema({
	parentname: {
		type: String,
		required:'Name is required'
	},
parentlastname:{
	type:String,
	required:'LastName is required'
},
phone:{
	type:String,
	required:'Phone is required'
},
campername:{
	type:String,
	required:'campername is required'
},
notes:{
	type:String,
	required:'notes is required'
},
medical:{
	type:String,
	required:'medical is required'
},
code:{
	type:Number,
	required:'code is required'
}


});

module.exports = mongoose.model('Client', clientSchema);
