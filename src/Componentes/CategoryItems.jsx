import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryItemsList from './CategoryItemsList'

function CategoryItems() {
  const{category} = useParams()

  return (
    <CategoryItemsList category={category}></CategoryItemsList>

  )
}

export default CategoryItems