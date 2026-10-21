const { Schema, model  } = require('mongoose');

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            // need to probably create a date modifier
        },
        time: [
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