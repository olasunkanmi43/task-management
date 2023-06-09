const router = require("express").Router()

const {  getAllTasks, createNewTasks,
    getTaskById, deleteTaskById, updateTaskById} = require("../controllers/tasks")

 router.route('/').get(getAllTasks).post(createNewTasks) 
 router.route('/:id').get(getTaskById).patch(updateTaskById).delete(deleteTaskById)

 module.exports = router;