const asyncHandler = require("express-async-handler");
const { findOneAndUpdate, findByIdAndUpdate } = require("../model/mymodel");
const firstSchema = require("../model/mymodel");
const getAll = asyncHandler(async(req,res)=>{
    const detail = await firstSchema.find();
    res.send(detail);
    res.status(200).json(detail);
})
const addNew = asyncHandler(async(req,res)=>{
    const {book_name,author} = req.body;
    console.log(book_name,author);
    if(!book_name || !author ){
        res.status(400);
        throw new Error("All Fields needed");
    }
    const create = await firstSchema.create({book_name,author});
    res.status(200).send("Data Added");
})
const getOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const detailofid =await firstSchema.findById(id);
    res.status(200).json(detailofid);
})

const updateOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    // const detail = await firstSchema.findById(id);
    const update = await firstSchema.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(update);
})

const deleteOne = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const delet = await firstSchema.findByIdAndRemove(id);
    res.json(delet);
})

module.exports = {getAll,addNew,getOne,updateOne,deleteOne}