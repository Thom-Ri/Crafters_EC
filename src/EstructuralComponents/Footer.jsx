import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <p>Powered by <a target="_blank" href="">Tomás Ríos</a></p>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">Inicio</Link>
                <Link to='Lista' className="text-base font-medium text-gray-500 hover:text-gray-900">Lista de productos</Link>
                <Link to='Categoria/Tradicional' className="text-base font-medium text-gray-500 hover:text-gray-900">Tradicional</Link>
                <Link to='Categoria/Digital' className="text-base font-medium text-gray-500 hover:text-gray-900">Digital</Link>
              </nav>
            </div>
      </div>
  )
}

export default Footer