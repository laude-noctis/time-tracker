const router = require('express').Router();

const taskRoutes = require('./tasksRoutes');

router.use('/tasks', taskRoutes)

module.exports = router