import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

function ItemList() {
    const materiaTradicional = [
        {title:"Pincel",id:1,price:160 },
        {title:"Lapiz",id:2,price:100 },
        {title:"Acrilico",id:3,price:120 },
        {title:"Bastidor",id:4,price:800 },
        {title:"Sketchbook",id:5,price:1500 }
    ];
    
    const [materials, setmaterials] = useState([])
    
    useEffect(() => {
      getMaterials()
    }, [])
    
    
    const getMaterials = () => {
        const materialPromise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(materiaTradicional)    
            }, 2000);
        })
    
        materialPromise.then(
          data => {
              setmaterials(data)
              console.log(data)
          }
        )
        
        
    }
    return(
        <>
        <div>Itemlist</div>
        {materials.map((mat) => 
            <ItemCard key={mat.id} mati={mat}/>
        )}
    </>
    )
    
  
}

export default ItemList