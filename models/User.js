const { Schema, model } = require('mongoose')
// eslint-disable-next-line import/no-extraneous-dependencies
const { hash, compare } = require('bcrypt');

// Define the user schema
const userSchema = new Schema({
  name: { type: String, required: true }, // User's name
  email: { type: String, required: true }, // User's email (required)
  password: { type: String, required: true }, // User's password (required)
});

// Middleware to hash the password before saving to the database
userSchema.pre('save', async function (next) {
  // Hash the password using bcrypt with a salt round of 10
  const hashed = await hash(this.password, 10);
  this.password = hashed; // Set the hashed password back to the schema
  next(); // Move to the next middleware
});

// Method to validate the user's password during login
userSchema.methods.isValidPassword = async function (password) {
  const user = this;
  // Compare the provided password with the hashed password in the database
  const compared = await compare(password, user.password);
  return compared; // Return true if passwords match, false otherwise
};

// Create the User model based on the schema
const User = model('User', userSchema);

module.exports = { User } // Export the User model for use in the application
