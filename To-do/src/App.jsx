import { Fragment, useState } from "react"
import Create from "./Create"
import Read from "./Read"



const App = () => {

  const [todos, settodos] = useState([
    {id: 1, title: "Task - 1", isCompleted: false}
  ])

  return (
    <Fragment>
      <Create todos = {todos} settodos = {settodos}/>
      <Read todos = {todos} settodos = {settodos}/>
    </Fragment>
  )
}

export default App
