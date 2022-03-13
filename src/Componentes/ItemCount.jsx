import React, { useState, useContext } from 'react'
import CartContext from './CartContextProvider';

function ItemCount({stock, addToCart}) {
    const [Count, setCount] = useState(0)
    const addToCount = () =>{
        if(Count < stock) {
            setCount (Count + 1)
            console.log(Count)
        }
    }
    const SubstractToCount = () =>{
        if(Count > 1){
            setCount(Count - 1)
        }
    }
  return (
    <div>
        <div>
            <button onClick={addToCount}>+</button>
            <h2>{Count}</h2>
            <button onClick={SubstractToCount}>-</button>
            <button
                onClick={()=> addToCart(Count)} className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Agregar a carrito
            </button>
        </div>
        <p>stock disponible: {stock}</p>
    </div>
  )
}

export default ItemCount