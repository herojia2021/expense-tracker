const exphbs = require("express-handlebars")
const handlebars = require("handlebars")
module.exports = (app) => {
  // setup template engine
  app.engine(
    "hbs",
    exphbs({
      defaultLayout: "main",
      extname: ".hbs",
    })
  )
  app.set("view engine", "hbs")

  // customize lookup helper
  handlebars.registerHelper("lookupex", function (outer, inner, key) {
    return outer[inner - 1][key]
  })
  // mongoose date to present date
  handlebars.registerHelper("presentDate", function (date) {
    let dateObj = new Date(date)
    return `${dateObj.getFullYear()}/${dateObj.getMonth() + 1}/${dateObj.getDate()}`
  })
  // calculate sum of expenses
  handlebars.registerHelper("sumOfAmount", function (expenses) {
    let sum = 0
    expenses.forEach(function (element) {
      sum += element.amount
    })
    return sum
  })
}
