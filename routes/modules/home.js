const express = require("express")
const router = express.Router()

const Expense = require("../../models/expense")
const Category = require("../../models/category")

// route: 所有支出清單
router.get("/", (req, res) => {
  // 取得排序選項
  const sortValStr = req.query.sort //"categoryId", "date", "amount"
  // 排序選項對應查詢
  const queryObj = {
    categoryId: { categoryId: "asc" },
    date: { date: "asc" },
    amount: { amount: "desc" },
  }
  // 設定顯示按鈕
  const uiConfig = {
    showNew: true, //新增按鈕
    showSort: true, //排序選項
    showReturn: false, //返回按鈕
  }
  // 提供boolean資訊給handlebars helper, 設定sort選項
  const sort = sortValStr ? { [sortValStr]: true } : { categoryId: true }

  // 只顯示登入者的資料
  //const userId = req.user._id
  Promise.all([
    (function getExpenses() {
      return Expense.find().lean().sort(queryObj[sortValStr])
    })(),
    (function getCategories() {
      return Category.find().lean().sort({ id: "asc" })
    })(),
  ])
    .then((results) => {
      res.render("index", { expenses: results[0], categories: results[1], sort, uiConfig })
    })
    .catch((error) => console.error(error))

  // return Expense.find()
  //   .lean()
  //   .sort(queryObj[sortValStr]) // desc
  //   .then((expenses) => res.render("index", { expenses, sort, uiConfig }))
  //   .catch((error) => console.error(error))
})

module.exports = router
