// const express = require("express")
// const router = express.Router()

// router.get("/", (req, res)=> {
//     res.render("clients/pages/products/index.pug")
// }) 

// router.get("/edit", (req, res) => {
//     res.render("clients/pages/products/index.pug")
// })

// module.exports = router



const express = require("express")
const router = express.Router()

const controller = require("../../controllers/clients/products.controller")
router.get("/", controller.products) 

router.get("/edit", controller.products)

router.get("/create", controller.products)
module.exports = router