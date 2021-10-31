const express = require("express")
const router = express.Router()

const Expense = require("../../models/expense")

// route: 新增餐廳頁面
router.get("/new", (req, res) => {
  return res.render("new")
})

// route: 編輯餐廳頁面
router.get("/:id/edit", (req, res) => {
  return res.render("edit")
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render("edit", { restaurant }))
    .catch((error) => console.log(error))
})

// route: 新增餐廳API
router.post("/", (req, res) => {
  const userId = req.user._id
  return Restaurant.create({ ...req.body, userId })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error))
})

module.exports = router
