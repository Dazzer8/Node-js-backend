const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use("/user", userRouter);

module.exports = app;