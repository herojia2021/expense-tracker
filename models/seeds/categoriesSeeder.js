const db = require("../../config/mongoose")
const Category = require("../category")

const categoriesData = require("./categories.json")

db.once("open", () => {
  Promise.all(
    categoriesData.categories.map((categoryObj) => {
      return Category.create({ name: categoryObj.name, class: categoryObj.class })
    })
  ).then(() => {
    console.log("create categories seed - done.")
    process.exit()
  })
})
