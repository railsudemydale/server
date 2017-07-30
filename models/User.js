const mongoose = require('mongoose');
//const Schema = mongoose.Schema; note: Line 2 and Line 3 are identical
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
