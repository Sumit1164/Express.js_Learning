// Global middleware

import express from 'express'

const app = express()
// Global middleware
function SayHiMiddleware(req, res, next) {
  console.log("Hi i'm middleware✋");
  next();
}

app.use(SayHiMiddleware);


app.get("/users", (req, res) => {
  res.send("I'm user");
});

app.get('/', (req, res) => {
    res.send("Hello world!😡")
})

app.listen(3000, () => {
    console.log("Server is running at PORT 3000")
});