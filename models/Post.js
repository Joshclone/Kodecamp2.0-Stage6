const mongoose = require('mongoose');
const { Schema } = mongoose;



const ProfileSchema = new Schema({
    name: String,
    course: String,
    year: Number,

});

const crudOperation = mongoose.model('Profile', ProfileSchema);
module.exports =  {crudOperation}

