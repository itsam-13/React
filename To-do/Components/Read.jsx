import "./style.css"
import {toast} from "react-toastify"


const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos
    const deleteHandler = (id)=>{
        console.log(id);
        const filter = todos.filter(todos => todos.id != id)
        settodos(filter)
        toast.error("Todo Deleted!!")
    }

    const renderTodos = todos.map(todos => {
        return (<li key={todos.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-500 mb-2">
            <span className="text-gray-800 font-medium">{todos.title}</span>
            <button onClick={() => deleteHandler(todos.id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200 transform hover:scale-105">
                Delete
            </button>
        </li>
        )
    })
    return (
        <>
            <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Pending Todos</h1>
                <ul className="space-y-2">{renderTodos}</ul>
            </div>
        </>
    )
}

export default Read
