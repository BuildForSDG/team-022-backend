const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passHash: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number, required: true },
  maritalStatus: { type: String, enum: ['single', 'married'], required: true },
  sex: { type: String, required: true },
  sexOrientation: { type: String, required: true },
  religious: { type: String, enum: ['yes', 'no'], required: true },
  religion: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
