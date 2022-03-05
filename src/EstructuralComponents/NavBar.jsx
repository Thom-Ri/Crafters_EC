import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div>
        <h1>CRAFTERS</h1>
        {/* LOGO */}
    </div>
    <div>
        <Link to='/'> Inicio</Link>
        <Link to='lista'>lista</Link>
    </div>
    </>
  )
}

export default NavBar