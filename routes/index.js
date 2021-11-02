const express = require("express")
const router = express.Router()

const expenses = require("./modules/expenses")
const home = require("./modules/home")
const users = require("./modules/users")
//const error = require("./modules/error")
const { authenticator } = require("../middleware/auth")

router.use("/expenses", authenticator, expenses)
router.use("/users", users)
router.use("/", authenticator, home)
//router.use("*", error) // 暫時不使用404

module.exports = router
