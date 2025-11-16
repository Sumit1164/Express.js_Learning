import express from "express";
import userRouter from "./routers/user.routes.js";
const app = express();

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
