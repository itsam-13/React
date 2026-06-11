import {  useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {

    const todos = props.todos
    const settodos = props.settodos

    const [title, settitle] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        const newtodo = {
            id: nanoid(),
            title: title,
            isCompleted: false
        }
        //setting new todo task
        settodos([...todos, newtodo]) //one-line
        settitle("") //title empty karne ke liye
    }

    return (
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => settitle(e.target.value)} //value goes into usestate of title
                    type="text"
                    value={title} //data come from usestate title
                    placeholder="title" />
                <br /><br />


                <button>Create ToDO</button>
            </form>
        </>
    )
}

export default Create
