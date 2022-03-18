import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import MateriaTradicional from './MaterialesData';

function ItemDetailContainer() {
    const{id} = useParams()
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
        }else{
          setmaterialInfo(data)
        }
        
      }
    )
  }  
  


  return (
    <>
      {materialInfo.map((mat)=>(
        <ItemDetail key={mat.id} item={mat}/>
      ))}
    </>
  )
  

  //   const [materialInfo, setmaterialInfo] = useState([])

  //   useEffect(() => {
  //     getMaterial()
  //   }, [id])
  

  //   const getMaterial = () =>{
  //     const materialPromise = new Promise( (res, rej) => {
  //       res (MateriaTradicional)
  //     })
  //     materialPromise.then(
  //       data => {
  //         if(id){
  //           setmaterialInfo(data.filter(mat => mat.id == id))
  //           console.log(materialInfo)
  //         }else{
  //           setmaterialInfo(data)
  //         }
          
  //       }
  //     )
  //   }  
    
    
  // return (
  //   <div>
  //     <ItemDetail item={materialInfo}/>
  //   </div>
  // )
}

export default ItemDetailContainer