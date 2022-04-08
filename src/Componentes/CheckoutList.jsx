import React, { useContext, useEffect, useState } from 'react'
import CartContext from './CartContextProvider';

function CheckoutList() {
    const {itemsCart} = useContext(CartContext)

    const [itemsInCart, setitemsInCart] = useState([])

    useEffect(() => {
        getItems()
    }, [itemsCart])

    const getItems = () =>{
        const ItemsPromise = new Promise( (res, rej) => {
        res (itemsCart)
        })
        ItemsPromise.then( data => {
            setitemsInCart(data)
            console.log(itemsInCart)
        })
    }  


  return (
    <>
        {itemsInCart.map((mat) => (
            <li key={mat.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={mat.img}
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <h3 className="ml-4 font-medium">{mat.title}</h3>
                    <h3 className="ml-4 font-medium">Precio de lista {mat.price}</h3>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <h3 className="ml-4 text-gray-500 font-medium">Cantidad: {mat.quantity}</h3>
                    <h3 className="ml-4 text-gray-500 font-medium">Total: {mat.price*mat.quantity}</h3>
                    <div className="flex">
                    </div>
                </div>
                </div>
            </li>
        ))}
    </>
  )
}

export default CheckoutList