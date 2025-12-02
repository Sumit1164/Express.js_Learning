//! TASK MANAGER

import express from "express";
import session from "express-session";


const app = express();
const PORT = 8080;


// Global Middleware
app.use(express.json())



// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API📔");
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});





// -> npm i uuid for randome id generate