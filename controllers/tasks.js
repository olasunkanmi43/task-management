const Task = require("../models/Task")
const asyncWrapper = require("../middleware/async")

const getAllTasks = asyncWrapper(async(req,res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})


const createNewTasks = asyncWrapper(async(req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
})

const getTaskById = asyncWrapper(async(req,res) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({_id: taskId})
    if(!task) {
        return next(createCustomError(`Task not found with id: ${taskId}`, 404))
    }
    res.status(200).json(task)
})


const deleteTaskById = asyncWrapper(async(req,res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId})
    if(!task) {
        return next(createCustomError(`Task not found with id: ${taskId}`, 404))
    }
    res.status(200).json("Delete Successfully!!")
})

const updateTaskById = asyncWrapper(async(req,res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
        new: true,
        runValidators: true
    })
    if(!task) {
        return next(createCustomError(`Task not found with id: ${taskId}`, 404))
    }
    res.status(200).json(task)
})

module.exports = {
    getAllTasks, createNewTasks,
    getTaskById, deleteTaskById, updateTaskById
}