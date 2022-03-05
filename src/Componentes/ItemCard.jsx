import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({mati}) {
  return (
    <div key={mati.id}>
        <ul>
            <li>{mati.title}</li>
            <li>{mati.price}</li>
            <li><Link to={`/materiales/${mati.id}`}>Detalle de producto</Link></li>
        </ul>
    </div> 
  )
}

export default ItemCard