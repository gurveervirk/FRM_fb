const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    au:{
      type:Boolean,
      default: false
    }
  },
  { collection: "Users" }
);
const Users = mongoose.model("user", UserSchema);
module.exports = Users;
