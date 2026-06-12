import { useState } from "react"
import Create from "../Components/Create"
import Read from "../Components/Read"



const App = () => {

  const [todos, settodos] = useState([
    {id: 1, title: "Task - 1", isCompleted: false}
  ])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="container mx-auto">
          <Create todos = {todos} settodos = {settodos}/>
          <Read todos = {todos} settodos = {settodos}/>
        </div>
      </div>
    </>
  )
}

export default App
