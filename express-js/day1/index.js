import express from "express";
import userData from "./data/data.js"

const app = express();

const PORT = 8080;


// 1. Get Request (it is for fetching data from server)

app.get("/", (req, res) => {
    res.status(200).send("Hello world!")
})

// Industry Standards (for user data info)
app.get("/api/v1/users", (req, res) => {
    res.status(200).send(userData)
})




app.listen(PORT, (req, res)=> {
    console.log(`Server is running at ${PORT} PORT:`);
})    