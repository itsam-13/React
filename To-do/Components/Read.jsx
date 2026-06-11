import "./Read.css"

const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos
    const deleteHandler = (id)=>{
        console.log(id);
        const filter = todos.filter(todos => todos.id != id)
        settodos(filter)
    }

    const renderTodos = todos.map(todos => {
        return (<li key={todos.id}>
            {todos.title} | <span omClick={deleteHandler(todos.id)}>Delete
            </span>
        </li>
        )
    })
    return (
        <>
            <h1 className="read_list_heading">Pending Todos</h1>
            <ol>{renderTodos}</ol>
        </>
    )
}

export default Read
