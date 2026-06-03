
import { useState } from "react";

const Create = (props) => {
    console.log(props);
    

    const [fullName, setFullName] = useState("")
    const [age, setAge] = useState(18)

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newUser = { fullName, age }
        console.log(newUser); //api -backend -database
        //set the user in the  setUsers
    }


    return (
        <div>
            <h1>register User</h1>
            <form action="" onSubmit={SubmitHandler}>

                <input
                    onChange={(e) => setFullName(e.target.value)} //changeHandler event in one line... arrow fnc
                    value={fullName}
                    type="text"
                    placeholder="Full Name" />

                <input type="number"
                    placeholder="Enter Age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />

                <button> Submit </button>

            </form>
        </div>
    )
}

export default Create
