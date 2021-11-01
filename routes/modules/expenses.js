const express = require("express")
const router = express.Router()

const Expense = require("../../models/expense")
const Category = require("../../models/category")

// route: 新增餐廳頁面
router.get("/new", (req, res) => {
  Category.find()
    .lean()
    .then((categories) => res.render("new", { categories }))
    .catch((error) => console.error(error))
})

// route: 編輯餐廳頁面
router.get("/:id/edit", (req, res) => {
  return Category.find()
    .lean()
    .then((categories) => res.render("edit", { categories }))
    .catch((error) => console.error(error))

  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => console.log(error))
})

// route: 新增餐廳API
router.post("/", (req, res) => {
  const userId = 1
  return Expense.create({ ...req.body, userId })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

// route: 刪除餐廳API
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)
  return Expense.findOne({ id })
    .then((expense) => expense.remove())
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

module.exports = router
