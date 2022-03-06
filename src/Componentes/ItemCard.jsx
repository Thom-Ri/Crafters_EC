import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({item:mat}) {
  return (
    <div key={mat.id}>
        <ul>
            <li>{mat.title}</li>
            <li>{mat.price}</li>
            <li><Link to={`/Categoria/${mat.categoria}`}>productos similares</Link></li>
            <li><Link to={`/materiales/${mat.id}`} item={mat}>Detalle del producto</Link></li>
        </ul>
    </div> 
  )
}

export default ItemCard