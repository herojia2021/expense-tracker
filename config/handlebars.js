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
  handlebars.registerHelper("nestLookUp", function (outer, inner, key) {
    return outer[inner - 1][key]
  })
  // mongoose date to present date
  handlebars.registerHelper("formatDate", function (date, sep) {
    let dateObj = new Date(date)
    let yyyy = dateObj.getFullYear().toString()
    let mm = (dateObj.getMonth() + 1).toString()
    if (mm.length < 2) mm = `0${mm}`
    let dd = dateObj.getDate().toString()
    if (dd.length < 2) dd = `0${dd}`

    return `${yyyy}${sep}${mm}${sep}${dd}`
  })
  // calculate sum of expenses
  handlebars.registerHelper("sumOfAmount", function (expenses) {
    let sum = 0
    expenses.forEach(function (element) {
      sum += element.amount
    })
    return sum
  })
  // is arg1 equal arg2
  handlebars.registerHelper("isEqual", function (arg1, arg2, options) {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this)
  })
}
