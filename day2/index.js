import express from "express";

const app = express();
// const PORT = 8080

// Global middleware
function SayHiMiddleware(req, res, next) {
  console.log("Hi i'm middleware✋");
  next();
}

app.use(SayHiMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/users", (req, res) => {
  res.send("I'm user");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

// 1. Global middleware
// 2. Specific route middleware
// 3. Inbuilt middleware
