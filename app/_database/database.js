const mongoose = require('mongoose')
const Product = require('./models/Product')

main().catch(err => console.log(err))

async function main() {
   await mongoose.connect(process.env.MONGODB_URI + "/restarialiba")
}

async function getProducts() {
   return Product.find().sort({ name: 1 })
}

async function getProductsFromCategory(data) {
   return Product.find({ category: { $eq: data } })
}

async function createProduct(data) {
   return Product.create(data)
}

async function deleteProduct(data) {
   return Product.findByIdAndDelete(data)
}

module.exports = {
   getProducts,
   getProductsFromCategory,
   createProduct,
   deleteProduct
}