import { Router } from "express";

const userRouter = Router();

userRouter.get("/create-users", (req, res) => {
  res.send("I'm user");
});

userRouter.get("/logged-user", (req, res) => {
  res.send("User logged here");
});

userRouter.get("/get-user", (req, res) => {
  res.send("Getting user...");
});

export default userRouter;