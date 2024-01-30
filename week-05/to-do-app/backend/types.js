const zod = require('zod');

const createToDo = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1)
})

const updateToDo = zod.string().min(1)

module.exports = {
    createToDo: createToDo,
    updateToDo: updateToDo
}