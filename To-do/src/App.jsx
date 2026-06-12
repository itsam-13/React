import Create from "../Components/Create"
import Read from "../Components/Read"



const App = () => {



  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="container mx-auto">
          <Create />
          <Read />
        </div>
      </div>
    </>
  )
}

export default App
