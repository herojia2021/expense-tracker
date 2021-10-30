const mongoose = require("mongoose")
const autoIncrement = require("mongoose-auto-increment")

mongoose.connect("mongodb://localhost/expense-tracker", { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
autoIncrement.initialize(db)

db.on("error", () => {
  console.log("mongodb error!")
})

db.once("open", () => {
  console.log("mongodb connected!")
})

module.exports = db
