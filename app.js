const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes")
const app = express()

app.use(routes)

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000.")
})
