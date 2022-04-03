import { createContext, useState } from "react"

const CartContext = createContext();

export function CartContextProvider({children}){
    
    const [itemsCart, setItemsCart] = useState([])
    
    function addItem(item,quantity){
        if(isIteminCart(item.id)){
            console.log("Se está ejecutando")
            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart]
            copyCart[index].quantity += quantity;
            setItemsCart(copyCart)
        }else{
            const itemToAdd = {...item, quantity};
            setItemsCart( [...itemsCart,itemToAdd] )
        }
    }


    // function removeItem(item){
    //     if(isIteminCart(item.id)){
    //         console.log("Se está ejecutando removeitem")
    //         let index = itemsCart.findIndex(i => i.id === item.id);
    //         let copyCart = [...itemsCart]
    //         copyCart.splice([index - 1], 1)
    //         setItemsCart(copyCart)
            
    //     }else{
    //         console.log("Se está ejecutando removeitem2")
    //     }
    // }

    function clearCart(){
        setItemsCart([])
    }

    function isIteminCart(id){
       return itemsCart.some(product=> product.id == id)
    }

    return(
        <>
            <CartContext.Provider value={{addItem, itemsCart,clearCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}
export default CartContext;