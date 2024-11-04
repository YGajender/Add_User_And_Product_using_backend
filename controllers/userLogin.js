import express from "express";
import UserModel from "../models/userLogin.js";


export async function createUser(req, res) {
   try {
      console.log(req.body)
      const createnewUser = new UserModel(req.body);
      await createnewUser.save();
      res.status(201).json(createnewUser)
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add User' })
   }
}

export async function getUsers(req, res) {
   try {
      const Users = await UserModel.find();
      res.status(200).json(Users);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to Add User' })
   }
}

export async function getOneIdUsers(req, res) {
      console.log("is working")
      const Users = await UserModel.findById(req.params.id)
      console.log(Users)
      res.status(200).json(Users);
}

export async function putOneUsers(req, res) {
   try {
      const updateOneUsers = await BorrowerModel.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true } 
      );
      if (!updateOneUsers)
         return res.status(404).json({ error: 'Borrower not found' });
         res.status(200).json(updateOneUsers);
   } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update single data', details: err.message });
   }
}

export async function deleteUser(req, res) {
   const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
   console.log(deleteUser);
   if (deleteUser) {
      res.status(200).json({ message: 'User deleted successfully' });
   } else {
      res.status(404).json({ message: 'User not found' });
   }
}

