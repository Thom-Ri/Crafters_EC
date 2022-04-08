import React, { useContext, useEffect, useState } from 'react'
import CartContext from './CartContextProvider';
import CheckoutForm from './CheckoutForm';
import CheckoutList from './CheckoutList';
import PriceCalculator from './PriceCalculator';

function Checkout() {
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
    <div>
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h2 className="mt-2 text-3xl text-gray-900 inline-flex ml-56">Tu compra</h2>
                        <CheckoutList/>
                        <p className="mt-2 text-3xl text-gray-900 inline-flex ml-44">Precio Final:<PriceCalculator items={itemsInCart}/></p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <CheckoutForm items={itemsCart}/>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Checkout