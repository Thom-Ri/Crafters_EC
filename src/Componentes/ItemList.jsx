import React, { useEffect, useState } from 'react'
// import ItemCard from './ItemCard';
import MateriaTradicional from './MaterialesData';
import { Link } from 'react-router-dom'


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
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Nuestros productos</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {materials.map((mat) => (
                            <div key={mat.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                    src={mat.img}
                                    alt={mat.imageAlt}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                    <Link to={`/materiales/${mat.id}`}>
                                        <h3 className="text-sm text-gray-700">{mat.title}</h3>
                                    </Link>
                                        <p className="mt-1 text-sm text-gray-500">{mat.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{mat.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>    
                </div>     
            </div>    
            {/* <div>Itemlist</div>
            {materials.map((mat) => 
                <ItemCard key={mat.id} item={mat}/>

            )} */}
        </>
    )
    
  
}

export default ItemList