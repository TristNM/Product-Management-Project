const productsRoutes = require("./products.route")
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("clients/pages/home/index.pug")
    })
    app.use("/products", productsRoutes) 
} 