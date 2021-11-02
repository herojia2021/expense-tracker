const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
  // 確保類別順序, id 不使用 autoIncrement
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Category", categorySchema)
