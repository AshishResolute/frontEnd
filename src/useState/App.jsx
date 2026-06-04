
import { useState } from "react";

export const App = ()=>{
    let [counter,setCounter] = useState(0)
    // console.log(counter)

    const increment=()=>setCounter(counter+1)
    const decrement = ()=> setCounter(counter-1)
    return(<>
    <h2>{counter}</h2>
    <button onClick={increment}>Add</button>
    <button onClick={decrement}>-</button>
    </>)
}

// now updating an array

export const UpdateArr = ()=>{
    let [names,setNames] = useState(['ash']) // initial value

    let addTrainer = ()=>{
      let newTrainer =   prompt(`Enter Trainer Name!`);
    //   console.log(newTrainer)
      if(newTrainer!=='') setNames([...names,newTrainer])
    }

    const removeTrainer = ()=>{
        const trainerName = prompt(`Enter a trainer name`);
        if(trainerName!=='') setNames(names.filter((trainer)=>trainer!==trainerName))
    }

    return (<section>
        <h1>List of Trainers</h1>
        <button onClick={addTrainer}>New Registration</button>
        <button onClick={removeTrainer}>Remove Trainer</button>
        {names.map((trainer,ind)=>(
            <li key={ind}>{trainer}</li>
        ))}
    </section>)
}