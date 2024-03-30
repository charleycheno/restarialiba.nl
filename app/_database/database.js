const mongoose = require('mongoose')
const Product = require('./models/Product')

main().catch(err => console.log(err))

async function main() {
   await mongoose.connect(process.env.MONGODB_URI + "/restarialiba")
}

async function createProduct(data) {
   await Product.create(data)
}

async function deleteProduct(data) {
   await Product.findByIdAndDelete(data)
}

module.exports = {
   createProduct,
   deleteProduct
}