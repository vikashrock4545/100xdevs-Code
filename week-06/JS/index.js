const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


const todos = [
    {
        title: "to do 1",
        description: "This is to do 1",
        id: 1

    }, {
        title: "to do 2",
        description: "This is to do 2",
        id: 2
    }, {
        title: "to do 3",
        description: "This is to do 3",
        id: 3
    }, {
        title: "to do 4",
        description: "This is to do 4",
        id: 4
    }, {
        title: "to do 5",
        description: "This is to do 5",
        id: 5
    }, {
        title: "to do 6",
        description: "This is to do 6",
        id: 6
    }, {
        title: "to do 7",
        description: "This is to do 7",
        id: 7
    }, {
        title: "to do 8",
        description: "This is to do 8",
        id: 8
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

app.get('/todo', (req, res) => {
    
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === parseInt(req.query.id, 10)) {
            res.json({
                todos: todos[i]
            });
            return;
        }
    }
    res.json({
        message: "No to do found"
    });
});


app.listen(3001)