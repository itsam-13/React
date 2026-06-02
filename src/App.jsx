// const App = () => {

//   //non parameterized function
//   const handleClick = () => {
//     alert("Button clicked")
//   }
//   //parameterized function
//   const handleNewClick = (msg) => {
//     alert(msg)
//   }
//   //calling a parameterized function inside a non parameterized function
//   //const wrapperHandler = () => handleNewClick("Hello, Pookie!")


//   //passed reference of the function to the button
//   return (

//     <>
//     <h1>{3+4}</h1>
//     <div>APP</div>
//     <button onClick={handleClick}>Click me</button> 
    
//     <button onClick={() => handleNewClick("Hello, Pookie!")}>Click me pookie</button>  
    
//     </>
//   )
// }


const App = () => {
  const profiles = [
    {name: "John", age: 30},
    {name: "Jane", age: 25 },
    {name: "Bob", age: 35}
  ];

  const data = profiles.map((profiles, index) =>{
    console.log(profiles,index)
    return (<li key = {index}>
      <span>Name: {profiles.name}</span> | 
      <span>Age: {profiles.age}</span>
    </li>)
  });

console.log(data)

  return (
    <div>
      <h1>Rendering JSON</h1>
      <ol>{data}</ol>

    </div>
  )
}

export default App


