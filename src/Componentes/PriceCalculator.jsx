import React, { useEffect, useState } from 'react'

function PriceCalculator({items}) {
    const [TotalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        findtotal()
    }, [items])
    
    function findtotal(){
        let totals = items.map( items => items.quantity * items.price);
        console.log(totals)
        let totalprice = totals.reduce((a, b) => a + Number(b), 0)
        setTotalPrice(totalprice)
        console.log(TotalPrice)
    }


  return (
    <>
        <p>{TotalPrice}</p>
    </>
  )
}

export default PriceCalculator