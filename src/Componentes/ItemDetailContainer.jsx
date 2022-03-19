import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
// import MateriaTradicional from './MaterialesData';
import '../Firebase/FirebaseClient'
import {getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { async } from '@firebase/util';

function ItemDetailContainer() {
    const{id} = useParams()
    const [materialInfo, setmaterialInfo] = useState([])

  useEffect( async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Productos"));
    let Producto = []
    querySnapshot.forEach((doc) => {
      Producto.push(doc.data())
      if(id){
        setmaterialInfo(Producto.filter(mat => mat.id == id))
      }else{
        console.log("no fue posible")
      }
    })
  }, [id])
  

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
  
  // const getMaterial = () =>{
  //   const materialPromise = new Promise( (res, rej) => {
  //     res (MateriaTradicional)
  //   })
  //   materialPromise.then(
  //     data => {
  //       if(id){
  //         setmaterialInfo(data.filter(mat => mat.id == id))
  //       }else{
  //         setmaterialInfo(data)
  //       }
        
  //     }
  //   )
  // }  






}

export default ItemDetailContainer