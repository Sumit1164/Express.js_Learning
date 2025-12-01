import cookieParser from "cookie-parser";
import express from "express"
import session from "express-session";
const app = express();

app.use(session(
    {
        secret: "mysecret@",
        saveUninitialized: false, // me nahi chahata ki koi user bina login kre mera app use kre isliye use krte h
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24  // 1day avaliable
        }
    }
))

app.use(cookieParser("SUMITs7t"))

app.get("/", (req, res) => {
    console.log(req.session)
    console.log(req.session);
    res.send("Hello World!")
})
app.get("/login", (req, res) => {
    req.session.user = {
        name: "Sumit Tripathi",
        age: 21,
        email: "sumit7@gmail.com"
    }
    res.send(`${req.session.user.name} is logged in`)
})

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send('Logged out')
})

//9:46

app.listen(8080, () => {
    console.log("Server is running at port 8080");
    
})