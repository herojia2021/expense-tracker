const express = require("express")
const router = express.Router()

const Expense = require("../../models/expense")
const Category = require("../../models/category")

// route: 新增頁面
router.get("/new", (req, res) => {
  Category.find()
    .lean()
    .then((categories) => res.render("new", { categories }))
    .catch((error) => console.error(error))
})

// route: 編輯頁面
router.get("/:id/edit", (req, res) => {
  const id = Number(req.params.id)
  Promise.all([
    (function getExpenses() {
      return Expense.findOne({ id }).lean()
    })(),
    (function getCategories() {
      return Category.find().lean().sort({ id: "asc" })
    })(),
  ])
    .then((results) => {
      res.render("edit", { expense: results[0], categories: results[1] })
    })
    .catch((error) => console.error(error))
})

// route: 新增API
router.post("/", (req, res) => {
  const userId = 1
  return Expense.create({ ...req.body, userId })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

// route: 編輯API
router.put("/:id", (req, res) => {
  const id = Number(req.params.id)
  return Expense.findOne({ id })
    .then((expense) => {
      for (const [key, value] of Object.entries(req.body)) {
        expense[key] = value
      }
      return expense.save()
    })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

// route: 刪除API
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  return Expense.findOne({ id })
    .then((expense) => expense.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

module.exports = router
