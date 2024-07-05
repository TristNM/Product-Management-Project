const express = require("express");
const app = express();
require('dotenv').config();
const database = require("./config/database")
const port = process.env.PORT
const route = require("./routes/clients/index.route")

database.connect()
app.set("views", "./views")
app.set("view engine", "pug")

app.use(express.static("public"))
route(app);

app.listen(port, ()=> {
    console.log(port);
}) 
