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
    const { name } = req.query;

    if (name) {
        const user = userData.filter((user) => {
            return user.name === name
        })
        res.status(200).send(user)
    }
    // query parameters
    res.status(200).send(userData)
})

// Route parameters
app.get("/api/v1/users/:id", (req, res) => {
    console.log(req.params);

    res.status(200).send("User Found!")
})

app.listen(PORT, (req, res)=> {
    console.log(`Server is running at ${PORT} PORT:`);
})    