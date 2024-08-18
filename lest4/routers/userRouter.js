const express = require("express");
const { 
    updateUseraById, 
    deleteUserById, 
    getAllUsers, 
    getUserbyId, 
    createUser
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUserbyId);
userRouter.post("/",createUser);
userRouter.patch("/:id",updateUseraById);
userRouter.delete("/:id",deleteUserById);

module.exports = userRouter;