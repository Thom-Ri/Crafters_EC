import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import '../Firebase/FirebaseClient'
import {getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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
}

export default ItemDetailContainer