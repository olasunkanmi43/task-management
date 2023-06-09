const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlenght: [40, 'Name can not be more than 40 characters']
    },

    completed: {
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Task', TaskSchema)