const express = require('express')
const app = express()
const { todo } = require('./db')
const { createToDo, updateToDo } = require('./types');
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.post('/todos', async function(req, res) {
    const createPayload = req.body
    console.log(createPayload)
    const response = createToDo.safeParse(createPayload)
    if(!response.success) {
        res.status(404).json({
            message: "Wrong input types."
        })
    } else {
        await todo.create({
            title: response.data.title,
            description: response.data.description,
            completed: false
        })
        res.json({
            message: 'Successfully added todo to DB'
        })
    }
})

app.get('/todo', async function(req, res) {
    const response = await todo.find({})
    res.json({
        todos: response
    })
})

app.put('/completed', async function(req, res) {
    const id = req.body.id
    const response = updateToDo.safeParse(id)
    if(!response.success) {
        res.status(404).json({
            message: "Invalid ID"
        })
        return
    } else {
        try {
        const found = await todo.findOne({
            _id: id
        })
        if (found) {
            await todo.findOneAndUpdate(
                { _id: id },
                { completed: true }
            );
    
            res.json({
                message: 'Successfully updated'
            });
        } else {
            res.status(404).json({
                message: 'Todo not found'
            });
        }
    } catch(err) {
        res.status(500).json({
            message: 'Error updating'
        })
    }
    }
})

app.listen(3001)