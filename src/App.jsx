const App = () => {

  const handleClick = () => {
    alert("Button clicked")
  }

  return (

    <>
    <div>APP</div>
    <button onClick={handleClick}>Click me</button> //passed reference of the function to the button
    
    </>
  )
}

export default App

