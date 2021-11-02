const express = require("express")
const session = require("express-session")
const useHandlebars = require("./config/handlebars")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const flash = require("connect-flash")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

//setup mongoose must before route, because of initialize mongoose-auto-increment
require("./config/mongoose")
const usePassport = require("./config/passport")
const routes = require("./routes")

const app = express()
const port = process.env.PORT

// setup handlebars
useHandlebars(app)

// setup static-file path
app.use(express.static("public"))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride("_method"))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash("success_msg") // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash("warning_msg") // 設定 warning_msg 訊息
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
