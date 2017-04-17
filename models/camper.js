var mongoose= require('mongoose');


// my clientSchema to display or add  data in table according to this
var camperSchema = new mongoose.Schema({
   process:{
       type:String,
       required:'Process is required'
   },
   phone:{
       type:String,
       required:'Phone is required'
   },
   campername: {
       type:String,
       required: 'Camper Name is Requuired'
   },
   campername2:{
       type:String
   },
   campername3:{
       type:String
   },
   code:{
       type:String,
       required:'Code is required'
   },
   Note:{
       type:String
   },
   created_at:{
       type: Date,
       required: true,
       default: Date.now
   },
});

module.exports = mongoose.model('Camper', camperSchema);
