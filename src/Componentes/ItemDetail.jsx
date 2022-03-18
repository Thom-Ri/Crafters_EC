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
      <div className="flex text-base text-left transform transition w-full md:inline-block">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl">
                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={item.img} alt="" className="object-center object-cover" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{item.title}</h2>
                    <section aria-labelledby="information-heading" className="mt-2">
                      <p className="text-2xl text-gray-900">{item.price}</p>
                    </section>
                    <section aria-labelledby="options-heading" className="mt-10">
                      {isInCart ?
                        <Link to='Carrito'><button className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Terminar Compra</button></Link> 
                        :
                        <ItemCount addToCart={addToCart} stock = {item.stock}/>
                      }
                      <button
                        onClick={emptyCart} className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Vaciar carrito
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
    </>











    // <>
    //   <div className="bg-white">
    //         <div className="pt-6">
    //            /* Product info  */
    //             <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
    //               <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //                 <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
    //               </div>
    //             </div>
    //             /* Options  */
    //               <div className="mt-4 lg:mt-0 lg:row-span-3">
    //                 <h2 className="sr-only">Product information</h2>
    //                 <p className="text-3xl text-gray-900">$ {item.price}</p>
    //                 <p className="text-3xl text-gray-900">Categoria: {item.categoria}</p>
                    // {isInCart ?
                    //   <Link to='Carrito'><button className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Terminar Compra</button></Link> 
                    //   :
                    //   <ItemCount addToCart={addToCart} stock = {item.stock}/>
                    // }
                    // <button
                    //   onClick={emptyCart} className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    // >
                    //   Vaciar carrito
                    // </button>
    //               </div>
    //         </div>
    //   </div>
    // </>
  )
}

export default ItemDetail

