import mongoose from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowecase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

export const User = mongoose.model("User", userSchema);
