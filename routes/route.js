import express from "express";
import { getUsers,getOneIdUsers,createUser,deleteUser, putOneUsers } from "../controllers/userLogin.js";
import { createProduct,getProducts,getOneIdProducts,putOneProducts, deleteProduct } from "../controllers/addProduct.js";

const router = express.Router();

//ROUTES
router.post("/createUser",createUser);
router.get("/getUsers",getUsers);
router.get("/getOneIdUsers/:id",getOneIdUsers)
router.get("/putOneUsers/:id",putOneUsers)
router.delete("/deleteUser/:id", deleteUser); 


//PRODUCTS
router.post("/createProduct",createProduct);
router.get("/getProducts",getProducts);
router.get("/getOneIdProducts/:id",getOneIdProducts)
router.get("/putOneProducts/:id",putOneProducts)
router.delete("/deleteProduct/:id", deleteProduct); 


export default router;