import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// import db
import Connection from "./config/db";
import cookieParser from "cookie-parser";

// import routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";

//components
const app = express();
dotenv.config();

// middleware
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    //     origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// connnect database
Connection();

//Router
app.get("/", (req, res) => {
  res.send("Backend is Running..");
});
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// connection
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running port:  http://localhost:${PORT}`);
});
