const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3800;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/booking", (req, res)=>{
    res.render("booking");
});
app.get("/details", (req, res)=>{
    res.render("details");
});

app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`));