import React, { useState, useContext } from 'react'
import CartContext from './CartContextProvider';

function ItemCount({stock, addToCart}) {
    const [Count, setCount] = useState(0)
    const addToCount = () =>{
        if(Count < stock) {
            setCount (Count + 1)
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
            <div className='inline-flex'>
                <button onClick={addToCount} className='bg-cyan-200 mx-2 w-9 h-9 rounded'>+</button>
                <h2 className='text-center bg-cyan-200 mx-2 w-9 h-9 pt-1.5 rounded'>{Count}</h2>
                <button onClick={SubstractToCount} className='bg-cyan-200 mx-2 w-9 h-9 rounded'>-</button>
            </div>
            <button
                onClick={()=> addToCart(Count)} className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Agregar a carrito
            </button>
        </div>
        <p className='text-center'>stock disponible: {stock}</p>
    </div>
  )
}

export default ItemCount