const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true ,unique:true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [0, "wrong min price"],
    max: [20000, "wrong max price"],
  },
  discountPercentage: {
    type: Number,
    min: [1, "wrong min discountPercentage"],
    max: [100, "wrong max discountPercentage"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
    default: 0,
  },
  stock: { type: Number, min: [0, "wrong min Stock"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});


//To delete the '_id' in the virtual field and instead we use 'id'
const virtual = productSchema.virtual('id');
virtual.get(function(){
  return this._id;
})
productSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){
    delete ret._id;
  }
})

exports.Product = mongoose.model("Product", productSchema);
