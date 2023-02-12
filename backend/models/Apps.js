const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppsSchema = new Schema({
    userW:{
        type: Array,
        default: {}
    },
    userA:{
        type: Object,
        default: {}
    },
    ins:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true, 
    },
    sub:{
        type: String,
        required: true, 
    },
    year:{
        type: String,
        required: true, 
    },
    vacs:{
        type: Number,
        default: 3
    }
  },
  { collection: "Apps" });

  module.exports = mongoose.model('apps', AppsSchema);