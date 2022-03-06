import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';
import MateriaTradicional from './MaterialesData';


function ItemList({category}) {
    
    const [materials, setmaterials] = useState([])
    
    useEffect(() => {
      getMaterials()
    }, [category])
    
    
    const getMaterials = () => {
        const materialPromise = new Promise( (resolve, reject) => {       
            resolve(MateriaTradicional)    
        })
    
        materialPromise.then(
          data => {
            if(category){
                setmaterials(data.filter(mat => mat.categoria == category))
            }else{
                setmaterials(data)
            }
            
          }
        )    
        
    }
    return(
        <>
        <div>Itemlist</div>
        {materials.map((mat) => 
            <ItemCard key={mat.id} item={mat}/>

        )}
    </>
    )
    
  
}

export default ItemList