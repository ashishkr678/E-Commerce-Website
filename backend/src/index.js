const express = require("express")
const cors = require("cors")
const app = express()
const { connectDb } = require("./config/db")
require('dotenv').config()

app.listen(`${process.env.PORT}`, async() => {
    await connectDb();
    console.log("E-Commerce api listing on PORT :",`${process.env.PORT}`);
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    return res.status(200).send({message : "welcome to ecommerce api - node",status:true})
})

const authRouters = require("./routes/auth.route.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route.js");
app.use("/api/users", userRouters);

module.exports = app;