const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   name: String,
   description: String,
   category: String,
   versions: []
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

module.exports = Product