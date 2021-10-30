const mongoose = require("mongoose")
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment")

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    index: true,
    required: true,
  },
  categoryId: {
    type: Number,
    index: true,
    required: true,
  },
})

expenseSchema.plugin(autoIncrement.plugin, {
  model: "Expense",
  field: "id",
  startAt: 1,
  incrementBy: 1,
})

module.exports = mongoose.model("Expense", expenseSchema)
