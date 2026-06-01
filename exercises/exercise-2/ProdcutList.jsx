export const ProductList = ()=>{
    const products=[{id:1,name:"phone",price:"$699"},{id:2,name:"Laptop",price:"$1200"},{id:3,name:"Headphones",price:"$199"}];

    return (<>
        {products.map(({id,name,price})=>(
            <div key={id}>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
            </div>
        ))}
    </>)
}