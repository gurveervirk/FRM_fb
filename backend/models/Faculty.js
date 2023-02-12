const mongoose = require('mongoose');
const { Schema } = mongoose;

const FacSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    empId:{
        type: Number,
        required: true
    },
    ins:{
        type: String,
        required: true
    },
    branches:{
        type: Array,
        required: true, 
    },
    subs:{
        type: Array,
        required: true, 
    }
  },
  { collection: "Faculty" });

  module.exports = mongoose.model('apps', FacSchema);