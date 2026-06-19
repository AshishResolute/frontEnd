import {useState,useEffect,Fragment} from 'react';

// export const UseEffectApp = ()=>{
//     // const [counter,setCounter] = useState(0);
//     // const [value,setValue]=useState(0)
//     // useEffect takes 2 arguments 1 callback function and a dependecy array,without dependency array the useEffect call back is executed on each re-render
//      useEffect(()=>{
//         console.log(`from UseEffect!`);
//         document.title=`Increment ${counter}`
//      },[counter])
//      // as i passed the counter state this useEffect will run on render whenever this state changes not the other one it will ignore it and run just once during first render for others states
//     return(
//         <div>
//             <h2>{counter}</h2>
//             <p>Added by Another Button:{value}</p>
//             <button onClick={()=>setCounter(counter+1)}>Increment</button>
//             <button onClick={()=>setValue(value+1)}>Add by Another button</button>
//         </div>
//     )
// }


export const UseEffectApp = ()=>{
    const [data,setData]=useState([]);


    useEffect(()=>{
        async function getData()
        {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            const data = await response.json();
            console.log(...data)
            if(data&&data.length) setData((prev)=>{
                return [...prev,...data]
            })
        }
        getData()
    },[])
    return(
        <div>
            <ul>
            {data.map((task,index)=>(
                <Fragment key={index}>
                    {/* {console.log(task)} */}
               <li>UserId{task.userId}</li>
               <li>Id:{task.id}</li>
               <li>Title:{task.title}</li>
               <li>Completed:{task.completed}</li>
               </Fragment>
            ))}
            </ul>
        </div>
    )
}