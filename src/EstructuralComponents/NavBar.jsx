import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../Componentes/CartContextProvider'
import Icon from "../media/Icon.png"
import Logo from "../media/LogoCrafter.png"
import CartBadge from './CartBadge'
function NavBar() {

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
      <div className="mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to='/'>
                  <img className="h-8 w-auto sm:h-24" src={Logo} alt=""></img>
                </Link>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">Inicio</Link>
                <Link to='Lista' className="text-base font-medium text-gray-500 hover:text-gray-900">Lista de productos</Link>
                <Link to='Categoria/Tradicional' className="text-base font-medium text-gray-500 hover:text-gray-900">Tradicional</Link>
                <Link to='Categoria/Digital' className="text-base font-medium text-gray-500 hover:text-gray-900">Digital</Link>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link to={'Carrito'}>
                <img src={Icon} alt="" style={{backgroundColor: itemsCart.length == 0 ? "rgb(228 235 245)" : "rgb(255 255 255)"}}  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full text-base font-medium text-white"/>
                <CartBadge items={itemsInCart}/>
              </Link>
              </div>
            </div>
      </div>
    </>
  )
}

export default NavBar


