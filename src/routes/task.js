const express = require ('express');
const router = express.Router();

const {
    getAllTask,
    createTask,
    getOneTask,
    deleteTask,
    updateTask
} = require ("../controller/taskController");

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;