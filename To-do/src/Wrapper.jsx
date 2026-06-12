import { createContext } from "react";

export const todoContext = createContext(null)

const Wrapper = (props) => {
    const [todos, settodos] = useState([
        { id: 1, title: "Task - 1", isCompleted: false }
    ])
    return (
        <todoContext.Provider value={[todos, settodos]}>{props.children}</todoContext.Provider>
    )
}

export default Wrapper
