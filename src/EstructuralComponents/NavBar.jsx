import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div>
        <Link to='/'>CRAFTERS</Link>
        {/* LOGO */}
    </div>
    <div>
        <Link to='/'> Inicio</Link>
        <Link to='Categoria'>lista de productos</Link>
    </div>
    </>
  )
}

export default NavBar