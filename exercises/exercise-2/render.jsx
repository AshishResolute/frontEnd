export const UserList =()=>{
    const users=[{id:1,name:"Alice",age:25},{id:2,name:"Bob",age:30},{id:3,name:"Charlie",age:45}];

    return (
    <>
        {users.map((user,ind)=>(
            <div id={ind}>
                <p>Name:{user.name}</p>
                <p>Age:{user.age}</p>
            </div>
        ))}
    </>)
}