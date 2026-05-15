// expressions are used to run valid js expressions

const name = "Ash"
const mutiply = (a,b)=>a*b;
const sortAList = (arr)=>arr.sort((a,b)=>a-b).join(',');


export const ShowExpressions = ()=>{

    return(
        <>
        <h1>Name:{name}</h1>
        <p>10*10:{mutiply(10,10)}</p>
        <p>SortedArray:{sortAList([20,10,9,8,7,6,4])}</p>
        </>
    )
}