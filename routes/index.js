const express = require("express")
const router = express.Router()

const expenses = require("./modules/expenses")
const home = require("./modules/home")

router.use("/expenses", expenses)
router.use("/", home)

module.exports = router
