export const AddElementsToDOM = ()=>{
    const arr =[1,2,3,4,5]
    return (
        <>
        {arr.map((num)=>(
            <ul key={num}>
                <li>{num}</li>
            </ul>
        ))}
        </>
    )
}

export const ShowUserInfo = ()=>{
    const users = [{name:"ash",age:10},{name:"misty",age:18},{name:"brock",age:10}]

    return (
        <>
        {users.map((user,index)=>(
           <ul key={index}>
            {Object.entries(user).map(([key,value])=>(
                (<li key={key}>
                    {key+':'+value}
                </li>)
            ))}
           </ul>
        ))}
        </>

    )
}