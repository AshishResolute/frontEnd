import { Person } from "./Person.jsx"
import { Product } from "./Product.jsx"

export const App = ()=>{
    return(
    <>
        <Person name="Ash" age={10}/>
        <Product name="Keyboard" price={699}/>
        <Person name="Ash" age={10}/>
        <Product name="Keyboard" price={699}/>
    </>)
}