import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/mydb";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB.");
      return;
    }

    await mongoose.connect(MONGO_URI);

    console.log("Connected to MongoDB locally!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
