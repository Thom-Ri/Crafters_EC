import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer() {
  return (
    <div>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer