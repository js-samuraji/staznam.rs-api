const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user",
  },
  fullName: String,
  dob: Date,
  socialLinks: [String],
  image: String,
  blockList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  email: String,
  password: {
    type: String,
    select: false,
  },
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;