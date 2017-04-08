var mongoose= require('mongoose');


// my clientSchema to display or add  data in table according to this
var clientSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required:'Name is required'
	},
lastname:{
	type:String,
	required:'LastName is required'
},

    starttime:{
        type:Number,
        required:'Start Date is required'
    },
    endtime:{
        type:Number,
        required:'Month is required'
    },
    date:{
        type:Number,
        required:'End Date is required'
    },
    parentname:{
        type:String,
        required:'End Month is required'
    }
});

module.exports = mongoose.model('Client', clientSchema);
