const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  avatar: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  likes: { type: Array },
  favorites: { type: Array }
});

module.exports = mongoose.model("User", UserSchema );
