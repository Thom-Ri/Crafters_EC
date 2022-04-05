import React, { useEffect, useState } from 'react'

function CartBadge({items}) {
    
    const [quantity, setquantity] = useState(0)
    
    useEffect(() => {
      findQuantity()
    }, [items])
    

    function findQuantity(){
        let qty = items.map(product => items.quantity);
        let totalQty = qty.reduce((a, b) => a + Number(b), 0)
        setquantity(totalQty)
        console.log(totalQty)
    }



  return (
    <div>
        <span className='bg-red-500 text-red-100 py-1 px-1.5 text-xs float-right rounded-full'>{quantity}</span>
    </div>
    
  )
}

export default CartBadge