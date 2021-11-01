const express = require("express")
const router = express.Router()

const expenses = require("./modules/expenses")
const home = require("./modules/home")
const users = require("./modules/users")

router.use("/expenses", expenses)
router.use("/", home)
router.use("/users", users)

module.exports = router
