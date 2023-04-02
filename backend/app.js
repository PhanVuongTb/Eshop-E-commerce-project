import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// import db
import Connection from "./config/db";
import cookieParser from "cookie-parser";

// import routes

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
// mongoose
//   .set('strictQuery', false)
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Kết nối db thành công'))
//   .catch((error) => console.log(error));

//Router
app.get("/", (req, res) => {
  res.send("Backend is Running..");
});

// connection
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running port:  http://localhost:${PORT}`);
});
