import { useState } from "react";
// good but will do later out of track
// // lets say i have 3 lights red,green and yellow , currently green glowing , now add a new state lets say red ,check prev was green only then red brights

// const trafficLights = ()=>{

//     const [signal,setSignal] = useState(["red","yellow","green"])

//     const changeSignal=()=>{
//         const alterSignal = prompt(`New Signal`).toLowerCase()
//         if(alterSignal!=='red'||alterSignal!=='yellow',alterSignal!=='green') return  alert(`Invalid signal`)
//         const prevSignal = signal[signal.length-1];
//         if(alterSignal==='green'&&prevSignal==='red'){
//             setSignal([...signal,'green'])

//         }
//     }
//     return<div style={{width:200 ,backgroundColor:"black",display:"flex", flexDirection:"column"}}>
//         <div style={{width:50,borderRadius:"50%"} ,id={red}}>Stop</div>
//         <div style={{width:50,borderRadius:"50%"}}>Ready?</div>
//         <div style={{width:50,borderRadius:"50%"}}>Go!</div>
//         <button onClick={changeSignal}>Alter Signal</button>
//     </div>
// }

// [0,1,2]=> (0+1)%3 -> = 1 (yellow changed)

const signals = ["red", "yellow", "green"];

const displaySignal = {
  red: { on: "#E24B4A", off: "#3a1a1a" },
  yellow: { on: "#EF9F27", off: "#3a2e0a" },
  green: { on: "#639922", off: "#1a2e0a" },
}; // on and off 2 colors
let currentSignalInd = 0;
export const TrafficSignal = () => {
  const [signal, setSignal] = useState("red");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60px",
        height: "300px",
        alignItems: "center",
        padding: "20px",
        margin: "10px",
      }}
    >
      {signals.map((color) => (
        <div
          style={{
            borderRadius: "50%",
            backgroundColor:
              color === signal
                ? displaySignal[color].on
                : displaySignal[color].off,
            width: "50px",
            height: "50px",
            padding: "5px",
            margin: "10px",
          }}
          key={Math.random()}
        ></div>
      ))}
      <button onClick={() => setSignal(signals[++currentSignalInd % 3])}>
        next
      </button>
    </div>
  );
};
