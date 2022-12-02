const taskSchema = require('../model/task');
const express = require('express');
const app = express();
//create task
const createTask = async(req, res)=>{
    const Task = await taskSchema.create(req.body);
    res.status(200).json({Task});
};

//get all tasks
const getAllTask = async(req, res)=>{
    const Task = await taskSchema.find({}); 
    res.status(200).json({Task}); 
};

//get one task
const getOneTask = async(req, res)=>{
    const id = req.params['id'];
    const Task = await taskSchema.findOne({_id: id});
    res.status(200).json({Task});
    console.log(Task);
    //console.log(id);
};
//delete task
const deleteTask = async(req, res) => {
    const id = req.params['id'];
    const Task = await taskSchema.findByIdAndDelete({_id: id});
    res.status(200).json({Task});
};
//update task
const updateTask = async(req, res) => {
    const id = req.params['id'];
    const Task = await taskSchema.findOneAndUpdate({_id: id}, req.body);
    res.status(200).json({Task});
};
  
module.exports = {
    createTask,
    getAllTask,
    getOneTask,
    deleteTask,
    updateTask
};
