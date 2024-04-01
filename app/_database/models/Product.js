const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
   id: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
      index: true,
      validate: {
         validator: function(v) {
           return !/\s/.test(v);
         },
         message: props => `The ID ${props.value} contains spaces. IDs should not contain spaces.`
       }
   },
   name: {
      type: String,
      trim: true,
      required: true,
   },
   description: {
      type: String,
      trim: true,
   },
   category: {
      type: String,
      lowercase: true,
      trim: true,
   },
   versions: []
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

module.exports = Product