import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer() {

  const{category} = useParams()

  return (
    <div>
      <ItemList category={category}/>
    </div>
  )
}

export default ItemListContainer