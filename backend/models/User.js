// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  contactno : String,
  username: String,
  password: String,
  role: { type: String, enum: ['resident', 'collector', 'admin'], default: 'resident' }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_SECRET);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
