import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContextProvider';
import ItemCount from './ItemCount';

function ItemDetail({item}) {
  const {addItem,clearCart} = useContext(CartContext)
  const [isInCart, setisInCart] = useState(false)

  function addToCart(quantity){
    addItem(item,quantity)
    setisInCart(true)
  }

  function emptyCart(){
    clearCart()
    setisInCart(false)
  }

  return (
    <>
      <div className="bg-white">
            <div className="pt-6">
               {/* Product info  */}
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
                  </div>
                </div>
                {/* Options  */}
                  <div className="mt-4 lg:mt-0 lg:row-span-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl text-gray-900">$ {item.price}</p>
                    <p className="text-3xl text-gray-900">Categoria: {item.categoria}</p>
                    {isInCart ?
                      <Link to='Carrito'><button className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Terminar Compra</button></Link> 
                      :
                      <ItemCount addToCart={addToCart} stock = {item.stock}/>
                    }
                    <button
                      onClick={emptyCart} className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Vaciar carrito
                    </button>
                  </div>
            </div>
      </div>
    </>
  )
}

export default ItemDetail

