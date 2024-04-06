interface TodoCard {
    todo: string,
    description: string,
    complete: boolean
}

export function Card(todo: TodoCard) {
    return <div>
        <h1>{todo.todo}</h1>
        <h2>{todo.description}</h2>
        <h3>{todo.complete}</h3>
    </div>
}