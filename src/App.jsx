import "./Index.css";
import { useState } from "react";
import useFetch from "./useFetch";
import Detail from "./Detail";
import Cart from "./Cart";
export default function App() {
  const [input, setInput] = useState("");
  var url = "https://dummyjson.com/products";
  if (input !== "") {
    url = `https://dummyjson.com/products/search?q=${input}`;
  }
  const { data, loading } = useFetch(url);
  const [cart,setCart] = useState([]);
  //add to cart
  function addtoCart(item){
    if(!cart.includes(item)){
      const newitem = [...cart, item];
      setCart(newitem);
    }
    console.log(cart)
  }
  //remove from cart
  const removeFromCart = (item)=>{
    const newCart = cart.filter((cart)=>cart.id !== item);
    setCart(newCart);
  };
  
  if (loading) {
    return <div className="load">Loading...</div>;
  }
  return (
    <div className="App">
      <nav>
        <h1>E-Commerce</h1>
      </nav>
      <div className="container">
        {" "}
        <input
          type="text"
          value={input}
          onChange={(i) => setInput(i.target.value)}
          placeholder="Search here..."
        />
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <div className="main">
        {data.products.map((i, index) => {
          return (
            <div className="product-box" key={index}>
              <Detail
                thumbnail={i.thumbnail}
                title={i.title}
                description={i.description}
                price={i.price}
              />
              <h2>{i.title}</h2>
              <button className="btn" onClick={()=>addtoCart(i)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
