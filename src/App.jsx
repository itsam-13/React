const App = () => {

  //non parameterized function
  const handleClick = () => {
    alert("Button clicked")
  }
  //parameterized function
  const handleNewClick = (msg) => {
    alert(msg)
  }
  //calling a parameterized function inside a non parameterized function
  //const wrapperHandler = () => handleNewClick("Hello, Pookie!")


  //passed reference of the function to the button
  return (

    <>
    <h1>{3+4}</h1>
    <div>APP</div>
    <button onClick={handleClick}>Click me</button> 
    
    <button onClick={() => handleNewClick("Hello, Pookie!")}>Click me pookie</button>  
    
    </>
  )
}

export default App

