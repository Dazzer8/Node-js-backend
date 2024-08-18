const express = require("express");

const { 
    getUserById, 
    creatUser, 
    updetUser, 
    deletAllUsers, 
    deletUserById,
    getAllUsers,
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/",getAllUsers);   //Get all users
userRouter.get("/:id",getUserById);  //get user by id localhost:port/user/:id
userRouter.post("/",creatUser);  //post all users
userRouter.patch("/:id",updetUser);  //patch userby id
userRouter.delete("/",deletAllUsers);  //delete all users
userRouter.delete("/:id",deletUserById);  //delete user by id
module.exports = userRouter;