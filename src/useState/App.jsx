import { useState } from "react";

export const App = ()=>{
    let [counter,setCounter] = useState(0)
    // console.log(counter)

    const increment=()=>setCounter(counter+1)
    return(<>
    <h2>{counter}</h2>
    <button onClick={increment}>Add</button>
    </>)
}