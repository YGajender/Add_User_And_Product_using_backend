import mongoose from "mongoose";

const ProductSchema =new mongoose.Schema({
    Product_Name:String,
    Price:Number,
    Catagery:String,
    Discription:String,
    Tags:String
    
});
const ProductModel = mongoose.model("Products", ProductSchema);
export default ProductModel;