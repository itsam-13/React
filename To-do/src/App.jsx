import { useState } from "react"

const App = () => {

  const [todos, settodos] = useState([
    {id: 1, title: "kaam kar le", isCompleted: false}
  ])

const [title, settitle] = useState("")
const [completed, setcompleted] = useState("false")
// const [gender, setGender] = useState("male")
const [city, setCity] = useState("kol")



  return (
    <div>
      <h1>Create Tasks</h1>
      <form action="">
        <input 
        onChange={(e)=> settitle(e.target.value)} //value goes into usestate of title
        type="text"
        value={title} //data come from usestate title
        placeholder="title" />
        <br />

        <input type="checkbox" 
        onChange={(e)=> setcompleted(e.target.checked) 
        }
        />Completed
        <br /><br />

        {/* <input 
        value="male"
        onChange={(e) => setGender(e.target.value)}
        checked={gender == "male" && true}
        type="radio" />male

        <input 
        value="female"
        onChange={(e) => setGender(e.target.value)}
        checked={gender == "female" && true}
        type="radio" />female */}
        <br />
        <select value={city} onChange={(e)=> setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="kol">Kolkata</option>
          <option value="pu">Pune</option>
        </select>

        <button>Create ToDO</button>
      </form>
    </div>
  )
}

export default App
