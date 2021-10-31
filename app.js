const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
//setup mongoose must before route, because of initialize mongoose-auto-increment
require("./config/mongoose")
const routes = require("./routes")

const app = express()

// setup handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", "hbs")

// setup static-file path
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000.")
})
