// const App = () => {

import { useState } from "react";

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


// const App = () => {
//   const profiles = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25 },
//     {name: "Bob", age: 35}
//   ];

//   const data = profiles.map((profiles, index) =>{
//     console.log(profiles,index)
//     return (<li key = {index}>
//       <span>Name: {profiles.name}</span> | 
//       <span>Age: {profiles.age}</span>
//     </li>)
//   });

// console.log(data)

//   return (
//     <div>
//       <h1>Rendering JSON</h1>
//       <ol>{data}</ol>

//     </div>
//   )
// }



// const App = () => {

//   const [username , setUsername] = useState("Sarthak")

//   const ChangeHandler = ()=>{
//     setUsername ("Ankur")
    
//   }
//   console.log(username);



//   return (
//     <div>
//       <h1>Username</h1>
//       <h2>{username}</h2>
//       <button onClick={ChangeHandler}> Change Name </button>
//     </div>
//   )
// }

// export default App



const App = () => {

  const [users , setUsers] = useState([
    {name: "John" , age: 12},
    {name: "bici" , age: 10},
    {name: "zozi" , age: 14},
    {name: "rizz" , age: 32}

  ]);

  const renderUser = users.map((user,index)=>{
    return <li key={index}> {user.name}</li>
  })
  
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState(18)

  const SubmitHandler = (e)=>{
    e.preventDefault();
    const newUser = {fullName,age}
    console.log(newUser); //api -backend -database
    
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
      <hr />

      <h1>User data </h1>
      <ol>{renderUser}</ol>
    </div>
  )
}

export default App

