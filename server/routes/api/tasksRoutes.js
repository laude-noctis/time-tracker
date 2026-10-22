const { ObjectId } = require('mongoose').Types;
const Task = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log('Getting all tasks')
    try {
        const allTasks = await Task.find({})
        res.json(allTasks)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.get('/:taskId', async (req, res) => {
    console.log('Getting one task')
    try {
        const oneTask = await Task.findOne({ _id: req.params.taskId });

        if (!oneTask) {
            return res.status(404).json({ message: 'no tasks here' })
        }

        res.json(oneTask)
    } catch (err) {
        console.error(err)
        res.status(500),json(err)
    }
});

router.post('/', async (req, res) => {
    console.log('creating a task')
    try {
        const createTask = await Task.insertOne(req.body)
        res.json(createTask)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    };
});

router.delete('/:taskId', async (req, res) => {
    console.log('deleting a task')
    try {
        const deleteTask = await Task.deleteOne({ _id: req.params.taskId });
        res.json(deleteTask)

        if (!deleteTask) {
            return res.status(),json({ message: 'task already gone'})
        }
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router