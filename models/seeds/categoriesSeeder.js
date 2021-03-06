if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
const db = require("../../config/mongoose")
const Category = require("../category")

const categoriesData = require("./categories.json")

db.once("open", () => {
  Promise.all(
    categoriesData.categories.map((categoryObj) => {
      return Category.create({ id: categoryObj.id, name: categoryObj.name, class: categoryObj.class })
    })
  ).then(() => {
    console.log("create categories seed - done.")
    process.exit()
  })
})
