import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    Name:String,
    userName:String,
    email_Id:String,
    mobile_Number:Number,
    password:String,
    conferm_password:String
    
});
const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;