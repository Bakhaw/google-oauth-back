import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: String,
    googleId: String,
    image: String,
    username: String,
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

export default User;
