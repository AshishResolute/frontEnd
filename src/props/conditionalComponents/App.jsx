import { Weather } from "./Weather.jsx"

const ValidPassword = ()=><h2>Valid Password!</h2>
const InvalidPassword = ()=> <h2>Invalid Password</h2>

const Password = ({isValid})=>{
    return (
        <>
    {isValid?<ValidPassword/>:<InvalidPassword/>}
        </>
    )
}

export const App = ()=>{
    return( <>
    <Password isValid={true}/>
    <Weather temp={15}/>
        </>
    )
}