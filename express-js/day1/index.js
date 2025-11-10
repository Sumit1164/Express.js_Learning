import express from "express";
import userData from "./data/data.js"
import data from "./data/data.js";

const app = express();
app.use(express.json());

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
  const { id } = req.params;
  const parsedId = parseInt(id);
  const user = userData.find((user) => user.id === parsedId);

  res.status(200).send(user, "User Found!"); //200 OK
})

// 2. POST Request (it is for sending data to server)
app.post("/api/v1/users", (req, res) => {
    const { name, displayname } = req.body
    const newUser = {
        id: userData.length + 1,
        name,
        displayname
    }
    userData.push(newUser)
    res.status(201).send({
        message: "User added successfully",
        data:newUser
    })

    // 201 Created, 400 Bad Request, 404 Not Found
})


// 3. PUT





app.listen(PORT, (req, res)=> {
    console.log(`Server is running at ${PORT} PORT:`);
})    