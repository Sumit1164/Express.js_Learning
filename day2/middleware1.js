// Specific middleware

import express from "express";

const app = express();
const PORT = 8080

// Global middleware
function SayHiMiddleware(req, res, next) {
  console.log("Hi i'm middleware✋");
  next();
}

app.use(SayHiMiddleware);

app.get("/", SayHiMiddleware, (req, res) => {        // (SayHiMiddleware) call in function this is specific middleware
  res.send("Hello world!");
});

app.get("/users", (req, res) => {
  res.send("I'm user");
});

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});