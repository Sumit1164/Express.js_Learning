//! Cookies in express.js


import express from 'express'
const PORT = 8080;

const app = express();
app.get("/", (req, res) => {
    res.cookie("Name", "express", {
        maxAge:1000 *10  //60 * 60 *24 // cookies life take milisecond 1000 
    })
    res.send("Hello world✋💀")
})

app.get("/product", (req, res) => {
    // console.log(req.cookies)     //! Show undefined
    console.log(req.headers.cookie)
    req.status(200).send({
        id: 1,
        name: "S7T-Shirt",
        price:"$500"
    })
})

app.listen(PORT, () => {
    console.log("Server running at http://localhost:8080", PORT)
})