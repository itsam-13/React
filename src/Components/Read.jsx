const Read = (props) => {

    console.log(props);
    const users = props.users
    // const setuser = props.setuser
    
    const renderUser = users.map((user, index) => {
        return <li key={index}> {user.name}</li>
    })


    return (
        <div>
            <h1>User data </h1>
            <ol>{renderUser}</ol>
        </div>
    )
}

export default Read
