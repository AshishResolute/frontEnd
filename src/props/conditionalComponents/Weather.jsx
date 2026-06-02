export const Weather = ({temp})=>{
   return (<div>
    {(temp<15)?(<h2 style={{color:"blue"}}>It's cold outside</h2>):(temp>=15&&temp<=25)?<h2 style={{color:"orange",padding:"10px"}}>It's nice Outside</h2>:(<h2>It's hot outside</h2>)}
   </div>)
}

