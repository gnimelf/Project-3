const { Schema, model } = require('mongoose');


const productSchema = new Schema({

  name:{
    type: String,
    required: true,
    unique: false,
    trim:true,

  },
  description:{
    type: String,
    required: true,
    unique: false,
    trim:true,

  },
  price: {
    type: Float,
    required: true,
    
  },
  image: {
    type: String,
    
  },
  quantity:{
    type: Int,


  },
  category: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  
});



const Product = model('Product', productSchema);

module.exports = Product;