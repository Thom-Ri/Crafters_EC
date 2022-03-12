import React, { useEffect, useState } from 'react'
import MateriaTradicional from './MaterialesData';

function ItemDetail({id}) {

  const [materialInfo, setmaterialInfo] = useState([])

  useEffect(() => {
    getMaterial()
  }, [id])
  

  const getMaterial = () =>{
    const materialPromise = new Promise( (res, rej) => {
      res (MateriaTradicional)
    })
    materialPromise.then(
      data => {
        if(id){
          setmaterialInfo(data.filter(mat => mat.id == id))
          console.log(materialInfo)
        }else{
          setmaterialInfo(data)
        }
        
      }
    )
  }  
  


  return (
    <>
      {materialInfo.map((mat)=>(
        <div key={mat.id}>
          <ul>
            <li><h2>{mat.title}</h2></li>
            <li>$ {mat.price}</li>
            <li>Categoria : {mat.categoria}</li>
          </ul>
        </div>
      ))}
    </>
  )
  
}

export default ItemDetail
