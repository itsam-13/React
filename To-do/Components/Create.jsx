import { useForm } from "react";
import { nanoid } from "nanoid";
import {toast} from "react-toastify"

const Create = (props) => {

    const todos = props.todos
    const settodos = props.settodos

    const { register,
        handleSubmit,
        reset,
        formState: { errors } 
    } = useForm()

    const submitHandler = (data) => {
        console.log(data);
        
        data.preventDefault();
        data.isCompleted = false;
        data.id = nanoid()

        const copytodos = [...todos]
        copytodos.push(data)
        settodos(copytodos)

        toast.success("Todo Created!!")

        reset()
    }

    return (
        <>
            <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Tasks</h1>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <input
                        {...register("title", {required : "title cannot be empty"})}
                        type="text"
                        placeholder="Enter task title..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <small>{errors?.title?.mssage}</small>
                    <br /><br />
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105">
                        Create ToDO
                    </button>
                </form>
            </div>
        </>
    )
}

export default Create
