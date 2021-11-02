const bcrypt = require("bcryptjs")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const db = require("../../config/mongoose")
const User = require("../user")
const Expense = require("../expense")

const expensesData = require("./expenses.json")

db.once("open", () => {
  Promise.all(
    expensesData.users.map((userObj) => {
      return bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(userObj.password, salt))
        .then((hash) =>
          User.create({
            name: userObj.name,
            email: userObj.email,
            password: hash,
          })
        )
        .then((user) => {
          const userId = user.id
          return Promise.all(
            userObj.expenses.map((expensesObj) => {
              return Expense.create({
                name: expensesObj.name,
                date: expensesObj.date,
                amount: expensesObj.amount,
                userId: expensesObj.userId,
                categoryId: expensesObj.categoryId,
              })
            })
          )
        })
    })
  ).then(() => {
    console.log("create expenses seed - done.")
    process.exit()
  })
})
