const express = require("express");
const app = express();
const todoRoutes = require('./routes/todoRoute.js'); 
const {connectDB}=require('./config/db.js')
const cors = require("cors")
const dotenv = require("dotenv");

dotenv.config();


// console.log("process......", process.env);

connectDB();
// middleware
app.use(express.json());
app.use(express.urlencoded());
// cors middleware
app.use(cors({
    origin:["https://frontend-iota-three-57.vercel.app", "http://localhost:5173"]
}))


//apis
app.get("/", (req, res) => {
    res.status(200).send("hi iam good")
});

app.use("/api/todos", todoRoutes);

app.listen(4000, (req, res) => {
    console.log("server running in port 4000");
});

