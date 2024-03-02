const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const TODOS = [{
    id: 1,
    title: "Go to gym1",
    description: "Go to gym from 8-10 PM",
    completed: false
},
{
    id: 2,
    title: "Go to gym2",
    description: "Go to gym from 8-11 PM",
    completed: false
},
{
    id: 3,
    title: "Go to gym3",
    description: "Go to gym from 8-12 PM",
    completed: false
},
{
    id: 4,
    title: "Go to gym4",
    description: "Go to gym from 9-10 PM",
    completed: false
},
{
    id: 5,
    title: "Go to gym5",
    description: "Go to gym from 7-9 PM",
    completed: false
},
{
    id: 6,
    title: "Go to gym6",
    description: "Go to gym from 7-8 PM",
    completed: false
}]

app.get('/notifications', (req, res) => {
    res.json({
        network: parseInt(Math.random()*6),
        jobs: parseInt(Math.random()*9),
        messaging: parseInt(Math.random()*10),
        notifications: parseInt(Math.random()*40)
    })
})

app.get('/todos', (req, res) => {
    const id = parseInt(req.query.id)
    const todo = TODOS.find(todo => todo.id === id);
    res.json({
        todos: todo
    })
})

app.listen(3000)