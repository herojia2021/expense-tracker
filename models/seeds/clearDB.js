if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const db = require("../../config/mongoose")

db.once("open", () => {
  Promise.all([
    (function dropUser() {
      return db.dropCollection("users")
    })(),
    (function dropExpense() {
      return db.dropCollection("expenses")
    })(),
    (function dropCategory() {
      return db.dropCollection("categories")
    })(),
    (function dropIdentitycounters() {
      return db.dropCollection("identitycounters")
    })(),
  ])
    .then((results) => {
      console.log("drop collections - done.")
      process.exit()
    })
    .catch((error) => console.error(error))
})
