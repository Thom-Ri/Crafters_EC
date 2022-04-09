import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContextProvider';
import PriceCalculator from './PriceCalculator';
function Cart() {

  const {itemsCart,removeItem} = useContext(CartContext)

  const [itemsInCart, setitemsInCart] = useState([])

  useEffect(() => {
    getItems()
  }, [itemsCart])

  const getItems = () =>{
    const ItemsPromise = new Promise( (res, rej) => {
      res (itemsCart)
    })
    ItemsPromise.then( data => {
        setitemsInCart(data)
        console.log(itemsInCart)
    })
  }  

  function removingItem(id){
    const item = itemsCart.find(product => product.id === id)
    removeItem(item)
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
                                    <h1 className="text-4xl ml-96 font-medium text-gray-900" style={{marginLeft: "45%"}}> Mi carrito </h1>
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
                                    <div className="mt-10">
                                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                          {itemsInCart.map((mat) => (
                                            <div key={mat.id} className="relative">
                                              <dt>
                                                <div className="absolute flex items-center justify-center h-12 w-16 rounded-md bg-indigo-500 text-white">
                                                  <img src={mat.img} className="h-16" aria-hidden="true" />
                                                </div>
                                                <p className="ml-28 text-lg leading-6 font-medium text-gray-900">{mat.title}</p>
                                              </dt>
                                              <div className="ml-28">
                                                <dd className="mt-2 text-base text-gray-500">{mat.description}</dd>
                                                <h3 className="font-medium text-gray-500">Precio de lista {mat.price}</h3>
                                                <h3 className="font-medium text-gray-500">Cantidad: {mat.quantity}</h3>
                                                <h3 className="font-medium text-gray-500">Total: {mat.price*mat.quantity}</h3>
                                                <button type="button" onClick={()=>removingItem(mat.id)} className="font-medium mt-px text-indigo-600 hover:text-indigo-500">
                                                  Eliminar
                                                </button>
                                              </div>                                              
                                            </div>
                                          ))}
                                        </dl>
                                    </div>
                                  </div>
                                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="lg:text-center">
                                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Transacciones
                                      </p>
                                      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mt-2">Precio Total a pagar:</h2>
                                      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        <PriceCalculator items={itemsInCart}/>
                                      </p>
                                      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                                        accusamus quisquam.
                                      </p>
                                      <div className="mt-6">
                                        <Link
                                          to="/Checkout"
                                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                        >
                                          Finalizar compra
                                        </Link>
                                      </div>
                                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Seguir comprando
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
      }
    </> 
  )
}

export default Cart

      


{/* <ul role="list" className="-my-6 divide-y divide-gray-200">
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
              <h3 className="ml-4">Precio de lista {mat.price}</h3>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <h3 className="text-gray-500">Cantidad: {mat.quantity}</h3>
            <h3 className="ml-4 text-gray-500">Total: {mat.price*mat.quantity}</h3>
            <div className="flex">
              <button type="button" onClick={()=>removingItem(mat.id)} className="font-medium text-indigo-600 hover:text-indigo-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
</ul> 

<div className="border-t border-gray-200 py-20 px-4 sm:px-6">
  <div className="flex justify-between text-base font-medium text-gray-900">
    <p>Subtotal</p>
    <PriceCalculator items={itemsInCart}/>
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


*/}