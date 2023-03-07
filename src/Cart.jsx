import React, { useEffect, useState } from 'react'

const Cart = ({cart,removeFromCart}) => {
    const [cartVal,setCartVal] = useState(0);
    let priceVal = cart || []
    useEffect(()=>{
        const sumWithInitial = priceVal.reduce(
            (acc, i) => acc + i.price,0
          )
          setCartVal(sumWithInitial)
    },[cart])
   
  return (
    <div className='cart'>
        <h3>Cart Value : $ {cartVal} </h3>
      {cart.map((i)=>{
       return <div key={i.id} onClick={()=>removeFromCart(i.id)} className='list'>
        <h4>{i.title}</h4>
        <h5>{i.price}.00 </h5>
        </div>
      })}
    </div>
  )
}

export default Cart
