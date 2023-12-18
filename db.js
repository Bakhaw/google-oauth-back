import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/asteria?authSource=admin")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Error when connecting to MongoDB", err));
