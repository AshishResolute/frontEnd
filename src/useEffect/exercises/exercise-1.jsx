import {useState,useEffect, Fragment} from 'react';

// run the useEffect only when it renders once --> i just need to pass the dependency array argument
export const BasicEffect = ()=>{
    const [value,setValue]=useState(0)
    const [data,setData]=useState([])
    // the empty dependency array causes the useEffect hook to run just only its first render
    // useEffect(()=>{
    //     console.log(`Run just once during first render!`)
    // },[])
    // now lets make it run whenever a specific state changes
    useEffect(()=>{
        console.log(` rendered with useEffect ${value+1} times`)
    },[value])
    // now lets fetch data from an api using useEffect
    useEffect(()=>async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const posts = await response.json()
        if(posts&&posts.length) setData((prevPosts)=>{
            return [...prevPosts,...posts]
        })
    },[])// passed the data of api response which caused an infinite loop where the state kept on re rendering and useEffect ran every time the state changed
    return (
        <>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Increment</button>
        <ul>
            {data.map((post)=>(
                <Fragment>
                <li>UserId:{post.userId}</li>
                <li>Id:{post.id}</li>
                <li>Title:{post.title}</li>
                <li>body:{post.body}</li>
                </Fragment>
            ))}
        </ul>
        </>
    )
}


export const UseEffectExerciseApp = ()=>{
    return (
        <>
        <BasicEffect/>
        </>
    )
}