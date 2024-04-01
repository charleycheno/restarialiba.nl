const mongoose = require('mongoose')
const Product = require('./models/Product')

main().catch(err => console.log(err))

async function main() {
   await mongoose.connect(process.env.MONGODB_URI + "/restarialiba")
}

async function getProduct(id) {
   return Product.findOne({ id: id })
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
   return Product.findOneAndUpdate({id: id}, update, {
      new: true,
      runValidators: true
   })
}

async function deleteProduct(id) {
   return Product.deleteOne({ id: id })
}

module.exports = {
   getProduct,
   getProducts,
   getProductsFromCategory,
   createProduct,
   updateProduct,
   deleteProduct
}