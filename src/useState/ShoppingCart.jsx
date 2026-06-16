// i have to show a list of items of my lets say my shop each item must have an button->add to cart when clicked add to the cart change of state -> show name,price and the totalSum
import { useState, Fragment } from "react";

const EmptyCart = () => <p>Empty Cart</p>;

const list = [
  { name: "RGB Mouse", price: 1000 },
  { name: "RGB Keyboard", price: 3000 },
  { name: "OLED Monitor", price: 10000 },
];

export const ShoppingCart = () => {
  // const [items,setItems]=useState([{},{},{},{}])
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <div key="list" id="listedItems">
        {list.map((item, index) => (
            // Used fragment instead of <> as i have to add a key as its the parent element that returns value it must have a key
          <Fragment key={index}>
            <p>Name:{item.name}</p>
            <p> Price:{item.price}</p>
            <button
              onClick={() =>
                // setCartItems([
                //   ...cartItems,
                //   { id:Date.now(),name: item.name, price: item.price },
                // ])
                setCartItems((prevCartItems)=>{
                return [...prevCartItems,{id:Date.now(),name:item.name,price:item.price}]})
              }
            >
              Add To Cart
            </button>
          </Fragment> 
        ))}
      </div>

      {/* only run when items added to the cart*/}
      {/* its good to have key only for parent elements that is being changed dynamically no need for static elements
       */}
      <div  style={{ margin: "16px 24px", padding: "16px" }}>
        <ol style={{listStyleType:"none"}}>
          {cartItems.map((item, index) => (
            <Fragment key={item.id}>
              <li>Name:{item.name}</li>
              <li>Price:{item.price}</li>
            </Fragment>
          ))}
        </ol>
        {!cartItems.length ? (
          <EmptyCart />
        ) : (
          <p>
            Total Amount:
            {cartItems.reduce((sum, { price }) => {
              return sum + price;
            }, 0)}
          </p>
        )}
      </div>
    </>
  );
};
