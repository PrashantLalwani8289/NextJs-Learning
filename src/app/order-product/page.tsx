'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const OrderProduct = () => {
    const router = useRouter()
    const handleClick = () => {
        console.log("Order is Placed");
        router.push("/")
    }
  return (
    <>
    <div>OrderProduct</div>
    <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default OrderProduct