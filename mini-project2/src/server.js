//! TASK MANAGER

import express from "express";
import session from "express-session";



import authRoute from "./routes/auth.routes.js"



const app = express();
const PORT = 8080;



// Global Middleware
app.use(express.json())

app.use(session({
    secret: "My-secret-key is I don't know",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge:100*60 *60 *24
    }
}))


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Task Manager API📔");
})


app.use("/auth", authRoute)


app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});





// -> npm i uuid for randome id generate