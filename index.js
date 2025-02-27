const express = require("express");
const app = express();
require('dotenv').config();
const database = require("./config/database")
const port = process.env.PORT
const systemConfig = require("./config/system")
const route = require("./routes/clients/index.route")
const routeAdmin = require("./routes/admin/index.route")
database.connect()
app.set("views", "./views")
app.set("view engine", "pug")

app.locals.prefixAdmin = systemConfig.prefixAdmin
app.use(express.static("public"))
route(app);
routeAdmin(app);

app.listen(port, ()=> {
    console.log(port);
}) 
