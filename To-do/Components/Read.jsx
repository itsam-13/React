const Read = (props) => {
    const todos = props.todos
    
    const renderTodos = todos.map(todo => {
        return <li key={todo.id}>{todo.title}</li>
    })
    return (
        <>
            <h1 style={{color: "tomato"}}>Pending Todos</h1>
            <ol>{renderTodos}</ol>
        </>
    )
}

export default Read
