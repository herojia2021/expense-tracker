const mongoose = require("mongoose")
const Schema = mongoose.Schema
const autoIncrement = require("mongoose-auto-increment")

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
})

categorySchema.plugin(autoIncrement.plugin, {
  model: "Category",
  field: "id",
  startAt: 1,
  incrementBy: 1,
})

module.exports = mongoose.model("Category", categorySchema)
