const express =require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRouter");
dotenv.config({path: "./.env"});

const app = express();
app.use(express.json());
app.use("/user", userRouter);
//product
//order

app.all("*", (req, res) => {
    req.statusCode(400).json({
        status: "fail",
        massage: `Can't find ${req.originalUrl} on this server!`,
    });
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.massage || "Internal Server Error";
    err.status = err.status || "error";

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
    return;
});

module.exports = app;