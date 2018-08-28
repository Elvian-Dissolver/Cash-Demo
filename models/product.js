const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  
  title: String,
  description: String,
  image: String,
  price: String,
  stock: Number
})

module.exports = mongoose.model('Product', productSchema)
