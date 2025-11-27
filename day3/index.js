//! Cookies in express.js


import express from 'express'
import cookieParser from 'cookie-parser';

const PORT = 8080;

const app = express();
app.use(cookieParser("Secert"))

app.get("/", (req, res) => {
    res.cookie("name", "express", {
        maxAge: 1000 * 60 * 60 * 24, // cookies life take MeliSecond 1000 
    });
    res.send("Hello world✋💀");
});

app.get("/product", (req, res) => {
    //? Various method to access cookies
    // console.log(req.cookies)     //! Show undefined
    // console.log(req.headers.cookie)  //! name=express
    // console.log("Cookies: ", req.cookies);  //! proper parser cookie


    console.log("Cookies: ", req.cookies);

    if (req.cookies.name && req.cookies.name === "express") {
        res.status(200).send({
            id: 1,
            name: "S7T-Shirt",
            price: "$500",
        });
    }

    res.status(403).send("You are not authorized to view this page") 

});

app.listen(PORT, () => {
    console.log("Server running at http://localhost:8080");
})