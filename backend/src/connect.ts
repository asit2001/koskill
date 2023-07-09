import mongoose from "mongoose";

/**
 * Connects to the MongoDB database.
 */
export default function connect() {
  // Get the MongoDB URI from the environment variable or use a default URI
  const URI = process.env.MONGODB || "mongodb://127.0.0.1:27017/koskill";

  // Connect to the MongoDB database
  mongoose.connect(URI).then(() => {
    console.log("Connected to database");
  });
}
