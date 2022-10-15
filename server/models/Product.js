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
    type: Number,
    required: true,
    
  },
  image: {
    type: String,
    
  },
  quantity:{
    type: Number,


  },
  category: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  
});



const Product = model('Product', productSchema);

module.exports = Product;