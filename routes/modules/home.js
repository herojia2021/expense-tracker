const express = require("express")
const router = express.Router()

const Expense = require("../../models/expense")
const Category = require("../../models/category")

// route: 所有支出清單
router.get("/", (req, res) => {
  // 只顯示籂選項目
  const categoryId = Number(req.query.category || 0)

  // 只顯示登入者的資料
  const userId = req.user.id
  Promise.all([
    (function getExpenses() {
      return categoryId ? Expense.find({ userId, categoryId }).lean().sort({ date: "desc" }) : Expense.find({ userId }).lean().sort({ date: "desc" })
    })(),
    (function getCategories() {
      return Category.find().lean().sort({ id: "asc" })
    })(),
  ])
    .then((results) => {
      res.render("index", { expenses: results[0], categories: results[1], categoryId })
    })
    .catch((error) => console.error(error))
})

module.exports = router
