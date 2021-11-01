const express = require("express")
const session = require("express-session")
const useHandlebars = require("./config/handlebars")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

//setup mongoose must before route, because of initialize mongoose-auto-increment
require("./config/mongoose")
const usePassport = require("./config/passport")
const routes = require("./routes")

const app = express()

// setup handlebars
useHandlebars(app)

// setup static-file path
app.use(express.static("public"))

app.use(
  session({
    secret: "ThisIsMySecret",
    resave: false,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride("_method"))

usePassport(app)

app.use(routes)

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000.")
})
