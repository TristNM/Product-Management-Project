const express = require("express")
const router = express.Router()

const controller = require("../../controllers/clients/home..controllers");
router.get("/", controller.home) 

module.exports = router 