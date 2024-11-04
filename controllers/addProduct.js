import express from "express";
import ProductModel from "../models/addProduct.js";


export async function createProduct(req, res) {
   try {
      console.log(req.body)
      const createnewProduct = new ProductModel(req.body);
      await createnewProduct.save();
      res.status(201).json(createnewProduct)
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add Product' })
   }
}

export async function getProducts(req, res) {
   try {
      const Products = await ProductModel.find();
      res.status(200).json(Products);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add Product' })
   }
}

export async function getOneIdProducts(req, res) {
      console.log("is working")
      const Products = await ProductModel.findById(req.params.id)
      console.log(Products)
      res.status(200).json(Products);
}

export async function putOneProducts(req, res) {
   try {
      const updateOneProducts = await BorrowerModel.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true } 
      );
      if (!updateOneProducts)
         return res.status(404).json({ error: 'Borrower not found' });
         res.status(200).json(updateOneProducts);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update single data', details: err.message });
   }
}

export async function deleteProduct(req, res) {
   const deleteProduct = await ProductModel.findByIdAndDelete(req.params.id);
   console.log(deleteProduct);
   if (deleteProduct) {
      res.status(200).json({ message: 'Product deleted successfully' });
   } else {
      res.status(404).json({ message: 'Product not found' });
   }
}

