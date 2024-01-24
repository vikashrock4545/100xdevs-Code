const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vikashr4545:vikashr4545@cluster0.b5yn1fo.mongodb.net/todo-db')

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}