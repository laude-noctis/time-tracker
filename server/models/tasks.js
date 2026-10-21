const { Schema, model  } = require('mongoose');

const taskSchema = new Schema(
    {
        taskTitle: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // need to probably create a date modifier
        },
        times: [
            {
                start: {
                    type: String,
                    required: true
                },
                end: {
                    type: String,
                    required: true
                }
            },
        ],
    }
)

const Task = model('Task', taskSchema)

module.exports = Task