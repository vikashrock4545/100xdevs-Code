const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const todos = [
    {
        title: "todo1",
        description: "desc1", 
        id:1
    },
    {
        title: "todo2",
        description: "desc2", 
        id:2
    },
    {
        title: "todo3",
        description: "desc3", 
        id:3
    },
    {
        title: "todo4",
        description: "desc4", 
        id:4
    },
    {
        title: "todo5",
        description: "desc5", 
        id:5
    },
    {
        title: "todo6",
        description: "desc6", 
        id:6
    },
    {
        title: "todo7",
        description: "desc7", 
        id:7
    }
]

app.get('/todos', (req, res) => {
    let randomToDos = []
    for(let i = 0; i < 7; i++) {
        const randomNumber = Math.floor(Math.random() * 7);
        const randomToDo = todos[randomNumber]
        if(!randomToDos.includes(randomToDo)) {
            randomToDos.push(randomToDo)
        }
    }
    res.json({
        todos: randomToDos
    })
})

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const response = a + b
    res.send(response.toString())
});
app.get('/interest', (req, res) => {
    const p = parseFloat(req.query.p)
    const r = parseFloat(req.query.r)
    const t = parseFloat(req.query.t)
    const interest = (p*r*t)/100
    const total = p + interest
    res.json({
        total,
        interest,
    })
})
app.listen(3000)
