import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"
import connect from "./connect";
import router from "../route";
import invalidJson from "../middleware/invalidJSONHandler";

dotenv.config();

const app = express();

// Connect to the MongoDB database
connect();

// Parse JSON bodies
app.use(express.json());

// Handle invalid JSON syntax errors
app.use(invalidJson);

// Parse cookies
app.use(cookieParser());
// allow cors only for development environment
if (process.env.NODE_ENV==="development"){
  app.use(cors({
    credentials:true,
    origin: 'http://127.0.0.1:3000',
    exposedHeaders: ['Cookie',"Authorization"]
  }))
}
app.use(express.static(path.join(__dirname,"public")))
// Routes
app.use("/api", router);
// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on http://localhost:5000");
});
