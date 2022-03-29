import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContextProvider';
function Cart() {

  const {itemsCart} = useContext(CartContext)

  const [itemsInCart, setitemsInCart] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () =>{
    const ItemsPromise = new Promise( (res, rej) => {
      res (itemsCart)
    })
    ItemsPromise.then( data => {
        setitemsInCart(data)
    })
  }  



  return (
    <>
      {itemsInCart.length == 0 && <div className="py-12 bg-white">
                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                      <div className="lg:text-center">
                                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Carrito de Compras</h2>
                                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                         Este carrito está vacio!!
                                        </p>
                                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                          Continua comprando y ve el status de tu compra al agregar productos al carrito
                                        </p>
                                      </div>

                                      <div className="mt-10">
                                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                          <Link to={"/"}>
                                            <button className="mx-80 mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                              Seguir comprando
                                            </button>
                                          </Link> 
                                        </dl>
                                      </div>
                                    </div>
                                  </div>}
      {itemsInCart.length > 0 && <div className="pointer-events-auto">
                              <div className="flex flex-col overflow-y-scroll bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto py-20 px-4 sm:px-6">
                                  <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900"> Shopping cart </h2>
                                    <div className="ml-3 flex h-7 items-center">
                                      <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Close panel</span>
                                      </button>
                                    </div>
                                  </div>

                                  <div className="mt-8">
                                    <div className="flow-root">
                                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {itemsInCart.map((mat) => (
                                            <li key={mat.id} className="flex py-6">
                                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                  src={mat.img}
                                                  alt=""
                                                  className="h-full w-full object-cover object-center"
                                                />
                                              </div>

                                              <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                      {mat.title}
                                                    </h3>
                                                    <p className="ml-4">{mat.price}</p>
                                                  </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                  <p className="text-gray-500">Qty {mat.quantity}</p>
                                                  <p className="ml-4 text-gray-500">Total: {mat.price*mat.quantity}</p>
                                                  <div className="flex">
                                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                      Remove
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-t border-gray-200 py-20 px-4 sm:px-6">
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>$262.00</p>
                                  </div>
                                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                  <div className="mt-6">
                                    <a
                                      href="#"
                                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                      Checkout
                                    </a>
                                  </div>
                                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                      or{' '}
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
      }
    </> 
  )
}

export default Cart


