import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link to='/'>
                  <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""></img>
                </Link>
              </div>
              <nav className="hidden md:flex space-x-10">
                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">Inicio</Link>
                <Link to='Categoria' className="text-base font-medium text-gray-500 hover:text-gray-900">Lista de productos</Link>
                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">Tradicional</Link>
                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">Digital</Link>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
              </div>
            </div>
      </div>
    </>
  )
}

export default NavBar


