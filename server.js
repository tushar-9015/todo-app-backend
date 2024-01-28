import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import connectDB from "./src/databse/db.js";
import todoRouter from "./src/routes/todoRoute.js";
import testRouter from "./src/routes/testRoute.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use("/api", todoRouter);
app.use("/test", testRouter);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
