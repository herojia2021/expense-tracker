const db = require("../../config/mongoose")
const Expense = require("../expense")
const User = require("../user")
const Category = require("../category")

db.once("open", () => {
  for (let i = 0; i < 10; i++) {
    Category.create({ name: "name-" + i })
  }

  for (let i = 0; i < 10; i++) {
    User.create({ name: "name-" + i })
  }

  for (let i = 0; i < 10; i++) {
    Expense.create({
      name: "name-" + i,
      date: 1,
      amount: 1,
      userId: 1,
      categoryId: 1,
    })
  }
  console.log("done")
})
