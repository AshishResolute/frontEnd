export const Product = ({name:productName,price:productPrice}) => {
  return (<div key={Math.random()}>
        <p>ProductName:{productName}</p>
        <p>Price:{productPrice}</p>
  </div>)
};
