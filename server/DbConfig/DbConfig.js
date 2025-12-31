import mongoose from "mongoose";

let isConnected = false;

const DBConnect = async () => {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB Connected");
};

export default DBConnect;
