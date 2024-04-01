const mongoose = require('mongoose')
const Product = require('./models/Product')

main().catch(err => console.log(err))

async function main() {
   await mongoose.connect(process.env.MONGODB_URI + "/restarialiba")
}

async function getProducts() {
   return Product.find().sort({ name: 1 })
}

async function getProductsFromCategory(category) {
   return Product.find({ category: { $eq: category } }).sort({ name: 1 })
}

async function createProduct(document) {
   return Product.create(document)
}

async function updateProduct(id, update) {
   return Product.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true
   })
}

async function deleteProduct(id) {
   return Product.findByIdAndDelete(id)
}

module.exports = {
   getProducts,
   getProductsFromCategory,
   createProduct,
   updateProduct,
   deleteProduct
}