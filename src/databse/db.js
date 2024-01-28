import mongoose from "mongoose";
import { DB_NAME } from "../../constant.js";

const connectDB = async () => {
  console.log(DB_NAME);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(` CONNECTING TO DB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`ERROR HAS OCCURED WHILE CONNECTING TO DB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
